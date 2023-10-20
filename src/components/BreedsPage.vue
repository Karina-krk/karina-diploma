<template>
    <div id="app">
      <div class="container">
        <div class="card" v-for="(dog, index) in dogs" :key="index">
          <img :src="dog.image" :alt="dog.name">
          <h2>{{ dog.name }}</h2>
          <p>Breed: {{ dog.breed }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dogs: [
          { name: "Dog Name 1", breed: "Австралийская овчарка (Аусси)", image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQaodBpDpPXz2JoGPoSUrRUy42TDcvDo6ipsID7d2vJE31RcDnb-NercBRbdxbYL14K" },
          { name: "Dog Name 2", breed: "Breed 2", image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQaodBpDpPXz2JoGPoSUrRUy42TDcvDo6ipsID7d2vJE31RcDnb-NercBRbdxbYL14K" },
          { name: "Dog Name 3", breed: "Breed 3", image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQaodBpDpPXz2JoGPoSUrRUy42TDcvDo6ipsID7d2vJE31RcDnb-NercBRbdxbYL14K"}
        ]
      };
    }
  };
  </script>
  
  <style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .card {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  h2 {
    margin-top: 10px;
  }
  
  .card p {
    color: #888;
  }
  </style>
  