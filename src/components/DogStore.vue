<template>
    <div class="container">
      <div class="products">
        <div class="product" v-for="(product, index) in products" :key="index">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <h2 class="product-name">{{ product.name }}</h2>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">{{ product.price }} тг.</p>
          <button @click="addToCart(product)" class="add-to-cart-button">Добавить в корзину</button>
        </div>
      </div>
      <div class="cart">
        <h2>Корзина</h2>
        <ul>
          <li v-for="(item, index) in cart" :key="index">{{ item.name }} - {{ item.price }} тг.</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { db } from '@/firebase';
  import { collection, getDocs } from 'firebase/firestore';
  import { useCart } from '../composables/useCart';
  
// eslint-disable-next-line no-unused-vars
const { uploadImage, newContent, addContent, getContentList } = useCart();

  const products = ref([
    {
      name: 'Корм для собак',
      description: 'Полноценный сбалансированный корм для здоровья вашей собаки.',
      price: 5000,
      image: new URL('@/assets/korm.jpg', import.meta.url).href,
    },
    {
      name: 'Ошейник для собак',
      description: 'Кожаный ошейник с металлической фурнитурой для вашего друга.',
      price: 2000,
      image: new URL('@/assets/osheinik.webp', import.meta.url).href,
    },
    {
      name: 'Игрушка для собаки',
      description: 'Прочная резиновая игрушка для активных игр и тренировок.',
      price: 1500,
      image: new URL('@/assets/igrushka.jpeg', import.meta.url).href,
    },
  ]);
  
  const cart = ref([]);

  function addToCart(product) {
    cart.value.push(product);
    console.log();
  }


  onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'carts'));
  cart.value = querySnapshot.docs.map(doc => doc.data());
  getContentList;
});
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