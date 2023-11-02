<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from '@/components/layouts/NavBarComponent.vue'
import { useUser } from './composables/useUser'
import { onMounted } from 'vue'

onMounted(() => {
  getUserFromLocalStorage()
})

const { user, getUserFromLocalStorage } = useUser()
</script>

<template>
  <NavBarComponent />
  <template v-if="user?.status === 'admin'">
    <AdminPanel />
  </template>
  <RouterView />
</template>

<style scoped>
</style>