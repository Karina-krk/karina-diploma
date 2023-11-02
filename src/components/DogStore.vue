<template>
    <div class="container">
      <div class="products">
        <div class="product" v-for="(product, index) in products" :key="index">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <h2 class="product-name">{{ product.name }}</h2>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">{{ product.price }} тг.</p>
          <button @click="addToCart(product)" class="add-to-cart-button"> <i class="pi pi-cart-plus"> Добавить в корзину </i></button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUser } from '../composables/useUser';
  import 'primeicons/primeicons.css'


  const {user} = useUser()

  function addToCart(product) {
    if (user.value) {
      user.value.bucket.push(product);
    } 
  }


  const products = ref([
    {
      name: 'Корм для собак',
      description: 'Полноценный сбалансированный корм для здоровья вашей собаки.',
      price: 5000,
      image: new URL('https://spinningline.kz/images/products_photo_providers/00422000/00422349/00422349_276928_LARGE.jpg').href,
    },
    {
      name: 'Ошейник для собак',
      description: 'Кожаный ошейник с металлической фурнитурой для вашего друга.',
      price: 3000,
      image: new URL('https://images.satu.kz/163572895_oshejnik-kozhanyj-dlya.jpg').href,
    },
    {
      name: 'Игрушка для собаки',
      description: 'Прочная резиновая игрушка для активных игр и тренировок.',
      price: 2500,
      image: new URL('https://amma.pet/media/products/images/2023/06/08/good-13033e56-3f95-11e7-a998-005056bf744c.jpg').href,
    },
    {
      name: 'Одежда для собаки',
      description: 'Функциональные и стильные наряды, созданные специально для наших четырехногих друзей.',
      price: 6000,
      image: new URL('https://7choice.net/wp-content/uploads/2019/01/odejda-dlya-sobak.jpg').href,
    },
    {
      name: 'Поводок с капюшоном для собаки',
      description: 'Удобный аксессуар, который обеспечивает комфорт и безопасность для вашего питомца во время прогулок.',
      price: 7000,
      image: new URL('https://dimon-camon.ru/uploadedFiles/images/0/clothing_to_protect_dogs.jpg').href,
    },
    {
      name: 'Игрушки и акссесуары для собаки',
      description: 'Игра с данной игрушкой помогает собаке поддерживать хорошую физическую форму и заниматься спортом.',
      price: 10000,
      image: new URL('@/assets/igrushka.jpeg', import.meta.url).href,
    },
  ]);
  
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
  }
  
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .product {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .product-name {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .product-description {
    color: #666;
    margin-bottom: 10px;
  }
  
  .product-price {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .add-to-cart-button {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .add-to-cart-button:hover {
    background-color: #45a049;
  }
  
  .cart {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  .cart h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .cart ul {
    list-style: none;
    padding: 0;
  }
  
  .cart li {
    margin-bottom: 10px;
  }
  </style>