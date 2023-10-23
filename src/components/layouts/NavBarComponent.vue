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
      
    </header> 
  </section> 
</template> 
 
<script setup> 
import PButton from 'primevue/button';
import Dialog from 'primevue/dialog';
import { useUser } from '@/composables/useUser';
const { user, googleRegister, googleLogout } = useUser();

const menuItems = [
  { text: 'Главная', link: '/' },
  { text: 'Породы собак', link: '/breeds' },
  { text: 'Магазин', link: '/store' },
  { text: "What's new", link: '#' }
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
}
.p-button { 
  background-color: rgb(203, 203, 203);
  border: #f2f2f200;
} 

</style>