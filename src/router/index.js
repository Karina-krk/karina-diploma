import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BreedsPage from '../components/BreedsPage.vue'
import AboutDogPage from '../components/AboutDogPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/breeds',
      name: 'breeds',
      component: BreedsPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutDogPage
    }
  ]
})

export default router
