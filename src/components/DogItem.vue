<template>
    <Card class="car-card">
      <template #header>
        <img alt="no-car" class="car-image" :src="auto.image" />
      </template>
      <template #title>{{ auto.brand }}</template>
      <template #content>
        <div class="car-details">
          <p>Цена: {{ auto.price }}</p>
          <p>Год выпуска: {{ auto.year }}</p>
          <p>Объем двигателя: {{ auto.volume }}</p>
          <div class="color-container">
            <p style="margin: 0px; margin-right: 10px">Цвет:</p>
            <ColorPicker v-model="auto.color" disabled />
          </div>
        </div>
      </template>
      <template #footer>
        <Chip v-if="Number(auto.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-apple" />
        <Chip v-else-if="Number(auto.year) <= 1960" label="Старый" icon="pi pi-history" />
        <Chip v-else label="Скучный" icon="pi pi-thumbs-down" />
        <Chip v-if="changeColor(auto.color)" label="Не эстетичный цвет" icon="pi pi-eye-slash" />
        <div class="like-dislike">
          <i class="pi pi-thumbs-up" @click="like" :class="{ 'liked': liked }" @click.stop />
          <span>{{ likes }}</span>
          <i class="pi pi-thumbs-down" @click="dislike" :class="{ 'disliked': disliked }" @click.stop />
          <span>{{ dislikes }}</span>
        </div>
        <i class="pi pi-star" @click="toggleFavorite" :class="{ 'favorited': favorited }" @click.stop></i>
      </template>
    </Card>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { defineProps, defineEmits } from 'vue'
  import Card from 'primevue/card'
  import Chip from 'primevue/chip'
  import ColorPicker from 'primevue/colorpicker'
  import 'primeicons/primeicons.css';
  
  const favorited = ref(false);
  
  const route = useRoute();
  const autoId = route.params.id;
  
  const liked = ref(false);
  const disliked = ref(false);
  const likes = ref(0);
  const dislikes = ref(0);
  
  
  function like() {
    if (!liked.value) {
      liked.value = true;
      dislikes.value = 0;
      likes.value = 1;
    } else {
      liked.value = false;
      likes.value = 0;
    }
    saveLikesToLocalStorage();
  }
  
  function dislike() {
    if (!disliked.value) {
      disliked.value = true;
      likes.value = 0;
      dislikes.value = 1;
    } else {
      disliked.value = false;
      dislikes.value = 0;
    }
  
    saveLikesToLocalStorage();
  }
  
  function saveLikesToLocalStorage() {
    const likedData = {
      id: autoId,
      liked: liked.value,
      disliked: disliked.value,
    };
  
    localStorage.setItem('autoLikes', JSON.stringify(likedData));
  }
  
  onMounted(() => {
    const likedData = JSON.parse(localStorage.getItem('autoLikes'));
    if (likedData && likedData.id === autoId) {
      liked.value = likedData.liked;
      disliked.value = likedData.disliked;
  
      if (liked.value) {
        likes.value = 1;
      } else if (disliked.value) {
        dislikes.value = 1;
      }
    }
    const favoriteData = JSON.parse(localStorage.getItem('autoFavorites'));
    if (favoriteData && favoriteData.id === autoId) {
      favorited.value = favoriteData.favorited;
    }
  });
  
  defineProps({
    auto: {
      type: Object,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  })
  
  function changeColor(color) {
    const crappyColors = ['#FF0000', '#00FF00', '#0000FF']
    if (crappyColors.includes(color)) {
      return true
    }
    return false
  }
  
  function toggleFavorite() {
    favorited.value = !favorited.value;
    saveFavoritesToLocalStorage();
  }
  function saveFavoritesToLocalStorage() {
    const favoriteData = {
      id: autoId,
      favorited: favorited.value,
    };
  
    localStorage.setItem('autoFavorites', JSON.stringify(favoriteData));
  }
  </script>
  
  
  <style scoped>
  .car-card {
    width: 500px;
    margin: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    overflow: hidden;
  }
  
  .car-card:hover {
    transform: scale(1.02);
  }
  
  .car-image {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
  
  .car-details {
    padding: 16px;
    text-align: left;
  }
  
  .car-details p {
    font-size: 16px;
    margin: 4px 0;
  }
  
  .chips {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  }
  
  .chip.expensive {
    background-color: #FF5733;
    color: #fff;
  }
  
  .chip.old {
    background-color: #7E7E7E;
    color: #fff;
  }
  
  .chip.boring {
    background-color: #3399FF;
    color: #fff;
  }
  
  .chip.ugly {
    background-color: #FF0000;
    color: #fff;
  }
  
  .like-dislike {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .liked {
    color: green;
  }
  
  .disliked {
    color: red; 
  }
  .favorited {
    color: yellow; 
  }
  </style>