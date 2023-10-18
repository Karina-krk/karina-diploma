<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from '@/components/layouts/NavBarComponent.vue'
import SliderComponent from '@/components/layouts/SliderComponent.vue';
</script>

<template>
  <NavBarComponent />
  <RouterView />
  <SliderComponent />
</template>

<style scoped>
</style>