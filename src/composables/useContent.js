import { getDocs, addDoc, doc, collection, deleteDoc } from 'firebase/firestore'
import { db,  } from '@/firebase'
import { getStorage, uploadBytes,  } from 'firebase/storage'
import { ref,  } from 'vue'
//import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useUser } from './useUser'
import * as firebase from 'firebase/storage'
import { createId } from '../utils/index.js'

export const useContent = () => {
  const content = ref()
  const contentList = ref([])
  const newContent = ref({
    id: createId(),
    image: null,
    breed: '',
    age: '',
    description: '',
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
      content.value = querySnapshot.docs.map((doc) => doc.data()).find((item) => item.id === id)
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    loading.value.newContent = true
    
    const { userToObject } = useUser()
    try {
      console.log(newContent)
      console.log(userToObject.value)
      if (newContent.value && userToObject.value) {
        newContent.value.author = userToObject.value
        const res = await addDoc(collection(db, 'contents'), newContent.value)
        return res;
        // loading.value.newContent = false
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

  async function uploadImage(file) {
    console.log(file)
    const storage = getStorage()
    console.log(storage)
    const storageRef = firebase.ref(storage, 'contens/' + file.name)
    console.log(storageRef)

    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Файл успешно загружен!')
        firebase
        .getDownloadURL(storageRef)
          .then((downloadURL) => {
            newContent.value.image = downloadURL
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
    uploadImage,
    content,
    contentList,
    loading,
    newContent,
    getAllContent,
    getContentById,
    addContent,
    deleteContent,  
  }
}