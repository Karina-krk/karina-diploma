import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const firebaseConfig = {
    apiKey: "AIzaSyCSB_YadtvRcpdD4_EZerCe4ar82I8FhzE",
    authDomain: "karina-diploma.firebaseapp.com",
    projectId: "karina-diploma",
    storageBucket: "karina-diploma.appspot.com",
    messagingSenderId: "675623596568",
    appId: "1:675623596568:web:146b30c112962c0369896d"
};


initializeApp(firebaseConfig);
const app = createApp(App)

app.use(PrimeVue)

app.use(router)

app.mount('#app')
