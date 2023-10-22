<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from '@/components/layouts/NavBarComponent.vue'
import SliderComponent from '@/components/layouts/SliderComponent.vue';
import { useUser } from './composables/useUser'
import { onMounted } from 'vue'

onMounted(() => {
  getUserFromLocalStorage()
})

const { user, getUserFromLocalStorage } = useUser()
</script>

<template>
  <NavBarComponent />
  <RouterView />
  <template v-if="user?.status === 'admin'">
    <AdminPanel />
  </template>
  <SliderComponent />
</template>

<style scoped>
</style>