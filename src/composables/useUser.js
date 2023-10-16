import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db, storage } from '@/firebase'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref, computed } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export const useUser = () => {
  const user = ref(JSON.parse(localStorage.getItem('user')))

  const loading = ref({
    user: false
  })

  const auth = getAuth()

  const userRemake = computed(() => {
    if (user.value) {
      console.log(user.value)
      return {
        displayName: user.value.displayName,
        email: user.value.email,
        photoURL: user.value.photoURL,
        uid: user.value.uid
      }
    }
    return null
  })

  function googleRegister() {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then(async (userCredential) => {
        user.value = userCredential.user
        console.log(userRemake.value)
        // await addUserToMainDatabase()
        // location.reload()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async function addUserToMainDatabase() {
    loading.value.user = true
    try {
      console.log(user.value)
      const res = await addDoc(collection(db, 'users'), user.value)
      console.log(res)
      if (res) {
        localStorage.setItem('user', JSON.stringify(user.value))
      }
      loading.value.user = false
    } catch (error) {
      console.error(error)
    }
  }

  function googleLogout() {
    localStorage.removeItem('user')
    location.reload()
  }

  return {
    user,
    loading,
    googleRegister,
    googleLogout
  }
}
