import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DogIdView from '../views/DogIdView.vue'
import AboutView from '../views/AboutView.vue'

import NotFoundPage from '../views/NotFoundPage.vue'
import BreedsPage from '../components/BreedsPage.vue'
import DogStore from '../components/DogStore.vue'

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
      path: '/store',
      name: 'store',
      component: DogStore
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/dog/:id',
      name: 'dog',
      component: DogIdView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    },
    
  ]
})

export default router
