<template>
  <div class="container">
    <Card class="dog-card">
      <template #header>
        <img alt="no-dog" class="dog-image" :src="dog.image" />
      </template>
      <template #title>{{ dog.breed }}</template>
      <template #content>
        <div class="dog-details">
          <h2>{{ dog.breed }}</h2>
          <p>Возраст: {{ dog.age }}</p>
          <p>{{ dog.description }}</p>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
// import { ref, onMounted } from 'vue';
// import { useRoute } from 'vue-router';
// import { defineProps, defineEmits } from 'vue'
import Card from 'primevue/card'

</script>

<style scoped>
.dog-card {
  width: 500px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
}

.dog-card:hover {
  transform: scale(1.02);
}

.dog-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
}

.dog-details {
  padding: 16px;
  text-align: left;
}

.dog-details p {
  font-size: 16px;
  margin: 4px 0;
}

</style>
