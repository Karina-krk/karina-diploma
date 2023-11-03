<template> 
  <section class="container"> 
    <header> 
      <router-link to="/">
        <img src="@/assets/logo.png" alt="logo" class="logo" />
      </router-link>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
      <div class="side"> 
        <p-button v-if="!user" type="button" @click="googleRegister" label="Войти" icon="pi pi-lock"></p-button> 
        <p-button v-else type="button" @click="googleLogout" label="Выйти" icon="pi pi-lock-open"></p-button> 
      </div> 
      <div>
        <Button icon="pi pi-shopping-cart" @click="visible = true" class="btn"/>
        <Dialog v-model:visible="visible" modal styleClass="custom-dialog">
          <div class="card" v-for="item in user.bucket" :key="item.id">
            <img class="card-image" :src="item.image" alt="Card Image" />
            <div class="card-title">{{ item.name }}</div>
            <div class="card-description">{{ item.description }}</div>
          </div>
          <button class="close-button" @click="visible = false">Закрыть</button>
        </Dialog>
      </div>
    </header> 
  </section> 
</template> 
 
<script setup> 
import PButton from 'primevue/button';
import { useUser } from '@/composables/useUser';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { ref } from "vue";

const visible = ref(false);
const { user, googleRegister, googleLogout } = useUser();


const menuItems = [
  { text: 'Главная', link: '/' },
  { text: 'Породы собак', link: '/breeds' },
  { text: 'Магазин', link: '/store' },
  { text: "Про нас", link: '/about' }
];


</script> 
 
<style scoped> 
@import url('https://fonts.googleapis.com/css?family=Poppins:200, 300, 400, 500, 600, 700, 800, 900&display=swap'); 
 
* { 
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
  font-family: 'Poppins', sans-serif; 
  z-index: 1;
} 
 
.container { 
  position: relative; 
  padding-bottom: 140px; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  background: #c5c4c0; 
} 
 
header { 
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  padding: 20px 100px; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  background: rgba(255, 255, 255, 0.9); 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  backdrop-filter: blur(10px); 
} 
 
header .logo { 
  position: relative; 
  max-width: 90px; 
  border-radius: 30px 
} 
 
header ul { 
  background-color: rgb(223, 223, 223); 
  display: flex; 
  justify-content: center;
  align-items: center;
  gap: 40px; 
  list-style: none; 
  height: 100px; 
  width: 80%; 
  border-radius: 15px 
} 
 
header ul li a { 
  color: #017143; 
  justify-content: center;
  font-size: 18px; 
  font-weight: bold; 
  text-decoration: none; 
  transition: color 0.3s ease; 
  margin-left: 30px; 
} 
 
header ul li a:hover { 
  color: #0068d8; 
} 

.side{
  background-color: rgb(203, 203, 203); 
  border-radius: 10px;
  min-width: 100px;
  min-height: 70px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}
.p-button { 
  background-color: rgb(203, 203, 203);
  border: #f2f2f200;
} 
.btn { 
  border: #f2f2f200;
  background-color: rgb(203, 203, 203); 
  border-radius: 10px;
  min-width: 70px;
  min-height: 70px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
} 

.custom-dialog .p-dialog-content {
  padding: 0;
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  max-width: 300px;
  margin: 10px auto;
  color: #000000;
}

.card-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.card-title {
  font-size: 24px;
  margin-top: 20px;
  color: #333;
}

.card-description {
  font-size: 16px;
  color: #777;
  margin-top: 10px;
}

.close-button {
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 0 0 10px 10px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  justify-content: center;
}

.close-button:hover {
  background-color: #ff3e32;
}


/* Медиа-запросы для iPhone 12 Pro */
@media only screen and (max-width: 390px) {
  header {
    padding: 10px 20px; 
  }

  header .logo {
    max-width: 50px; 
  }

  header ul {
    width: 50%;
    height: 50px; 
    gap: 5px; 
  }

  header ul li a {
    font-size: 10px; 
    margin-left: 5px;
  }

  .side, .btn {
    min-width: 30px; 
    min-height: 30px; 
    margin-left: 10px;
  }
  .card {
    max-width: 250px; 
    margin: 10px auto;
  }

  .card-title {
    font-size: 20px; 
    margin-top: 15px;
  }

  .card-description {
    font-size: 14px; 
    margin-top: 10px;
  }

  .close-button {
    padding: 10px 15px; 
    margin-top: 15px;
  }
}


</style>