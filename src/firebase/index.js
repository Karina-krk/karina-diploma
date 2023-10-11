import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCSB_YadtvRcpdD4_EZerCe4ar82I8FhzE",
    authDomain: "karina-diploma.firebaseapp.com",
    projectId: "karina-diploma",
    storageBucket: "karina-diploma.appspot.com",
    messagingSenderId: "675623596568",
    appId: "1:675623596568:web:146b30c112962c0369896d"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }