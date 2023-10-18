<template>
    <section class="container">
      <header>
        <a href="#"><img src="@/assets/logo.png" class="logo" alt="logo" /></a>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Tuda</a></li>
          <li><a href="#">Suda</a></li>
          <li><a href="#">What's new</a></li>
        </ul>
        <div class="side">
          <p-button v-if="!user" type="button" @click="googleRegister" label="Войти" icon="pi pi-user"></p-button>
          <p-button v-else type="button" @click="googleLogout" label="Выйти" icon="pi pi-sign-out"></p-button>
        </div>
      </header>
    </section>
  </template>
  
  <script setup>
  import PButton from 'primevue/button';
  import { useUser } from '@/composables/useUser';
  const { user, googleRegister, googleLogout } = useUser();
  
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:200, 300, 400, 500, 600, 700, 800, 900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 231, 95, 0.9);
    clip-path: circle(50% at right 0);
  }
  
  .container {
    position: relative;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f2f2f2;
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
    max-width: 80px;
  }
  
  header ul {
    background-color: rgb(210, 250, 210);
    display: flex;
    gap: 40px;
    list-style: none;
    height: 100px;
    width: 80%;
    padding-top: 35px;
    padding-left: 200px;
    border-radius: 15px
  }
  
  header ul li a {
    color: rgb(0, 162, 255);
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease;
    margin-left: 30px;
  }
  
  header ul li a:hover {
    color: #0068d8;
  }
  
  .side p-button {
    margin-left: 10px;
  }
  </style>
  