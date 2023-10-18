import {getDocs, addDoc, collection, doc, deleteDoc} from 'firebase/firestore'
import { db,  } from '@/firebase'
import {  } from 'firebase/storage'
import { ref,  } from 'vue'
import {  } from 'firebase/auth'

import { useUser } from './useUser'

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
    const { userRemake } = useUser()
    loading.value.newContent = true
    try {
      if (newContent.value && userRemake.value) {
        newContent.value.author = userRemake.value
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
    getAllContent,
    getContentById,
    addContent,
    deleteContent
  }
}
