import { getDocs, addDoc, doc, collection, deleteDoc } from 'firebase/firestore'
import { db,  } from '@/firebase'
// import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref, } from 'vue'
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useUser } from './useUser'
import { getStorage, uploadBytes, } from 'firebase/storage'
import { computed } from 'vue'
import { createId, formatDate } from '@/services/methods'
import * as firebase from 'firebase/storage'

export const useContent = () => {
  const content = ref()
  const contentList = ref([])
  const newContent = ref({
    author: '' 
  })

  const loading = ref({
    content: false,
    contentList: false,
    newContent: false
  })

  async function getAllContent() {
    loading.value.contentList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      contentList.value = querySnapshot.docs.map((doc) => doc.data())
      loading.value.contentList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id) {
    loading.value.content = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      content.value = querySnapshot.docs
        .map((doc) => doc.data())
        .find((item) => item.id === id)
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    const { userToObject } = useUser()
    loading.value.newContent = true
    try {
      if (newContent.value && userToObject.value) {
        newContent.value.author = userToObject.value
        await addDoc(collection(db, 'contents'), newContent.value)
        loading.value.newContent = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteContent(id) {
    try {
      if (content.value) {
        await deleteDoc(doc(db, 'contents', id))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    content,
    contentList,
    loading,
    newContent,
    getAllContent,
    getContentById,
    addContent,
    deleteContent
  }
}

export const useAuto = () => {

  const newAuto = ref({
    id: createId(),
    brand: '',
    price: '',
    year: '',
    volume: '',
    color: '',
    city: '',
    carcase: '',
    gear: '',
    travel: 0,
    image: null,
    saled: false,
  })


  const autoList = ref([])
  const auto = ref(null)

  const loading = ref({
    auto: false,
    autoList: false,
    newAuto: false,
  })

  async function getAuto(id) {
    loading.value.auto = true
    try {
      const querySnapshot = await getDocs(collection(db, 'autos'))
      querySnapshot.forEach((doc) => {
        if(doc.data().id === id) {
          auto.value = doc.data()
        }
      })
    } catch(e) {
      console.error('Error: ', e)
    } finally {
      loading.value.auto = false
    }
  }

  const autoListRemake = computed(() => {
    const _autoListRemake = autoList.value.map((auto) => {
      auto.price = `${parseInt(auto.price)} KZT`
      auto.volume = `${auto.volume} л`
      auto.travel = `${auto.travel} км`
      auto.year = formatDate(auto.year)
      auto.age = `${new Date().getFullYear() - auto.year}г`
      auto.color = `#${auto.color}`
      return auto
    })
    return _autoListRemake || []
  })

  async function createAuto() {
    loading.value.newAuto = true
    try {
      await addDoc(collection(db, 'autos'), newAuto.value).then(async () => {
        await getAutoList()
      })
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  async function getAutoList() {
    loading.value.autoList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'autos'))
      querySnapshot.forEach((doc) => {
        autoList.value.push(doc.data())
      })
    } catch (e) {
      console.error('Error: ', e)
    } finally {
      loading.value.autoList = false
    }
  }

  function clear() {
    newAuto.value = {
      id: '',
      brand: '',
      price: '',
      year: '',
      volume: '',
      color: '',
      city: '',
      carcase: '',
      gear: '',
      travel: 0,
      image: null,
      saled: false,
    }
    autoList.value = []
    auto.value = null
  }
  async function uploadImage(file) {
    console.log(file)
    const storage = getStorage()
    console.log(storage)
    const storageRef = firebase.ref(storage, 'autos/' + file.name)
    console.log(storageRef)

    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Файл успешно загружен!')

        firebase
        .getDownloadURL(storageRef)
          .then((downloadURL) => {
            newAuto.value.image = downloadURL
          })
          .catch((error) => {
            console.error('Ошибка получения ссылки на загруженный файл:', error)
          })
      })
      .catch((error) => {
        console.error('Ошибка загрузки файла:', error)
      })
  }

  return {
    getAuto,
    createAuto,
    getAutoList,
    clear,
    auto,
    newAuto,
    autoListRemake,
    loading,
    uploadImage,
  }
}