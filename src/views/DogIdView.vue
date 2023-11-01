<template>
  <div>
    <div v-if="content && content.image" class="dog-card">
      <img :src="content.image" :alt="content.breed" class="dog-image">
      <h2 class="dog-name">{{ content.breed }}</h2>
      <p class="dog-age">Возраст: {{ content.age }} год/лет</p>
      <p class="dog-description">Коротко о породе: {{ content.description }}</p>
      <h2 class="dog-id">ID: {{ content.id }}</h2>
    </div>
    <div v-else>
      Загрузка данных...
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useContent } from '../composables/useContent';

const route = useRoute();
const { getContentById, content } = useContent();

onMounted(async () => {
  console.log(route.params.id);
  await getContentById(route.params.id);
});

</script>


<style scoped>
.dog-card {
  max-width: 400px;
  margin: 40px auto;
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
