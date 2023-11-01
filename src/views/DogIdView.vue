<template>
  <div class="dog-card">
    <img :src="dog.image" :alt="dog.breed" class="dog-image">
    <h2 class="dog-name">{{ dog.breed }}</h2>
    <p class="dog-age">Возраст: {{ dog.age }} год/лет</p>
    <p class="dog-description">Коротко о породе: {{ dog.description }}</p>
    <h2 class="dog-id">ID: {{ dog.id }}</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const dog = ref([]);

onMounted(() => {
  dog.value = route.params;
});
</script>

<style scoped>
.dog-card {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #f9f9f9;
}

.dog-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.dog-name {
  font-size: 24px;
  margin-top: 20px;
  color: #333;
}

.dog-age {
  font-size: 18px;
  color: #555;
}

.dog-description {
  font-size: 16px;
  color: #777;
}

.dog-id {
  font-size: 14px;
  color: #888;
  margin-top: 10px;
}
</style>
