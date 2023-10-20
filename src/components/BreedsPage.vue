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
            {   name: "Австралийская овчарка", 
                breed: "Австралийская овчарка (Аусси)", 
                image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQaodBpDpPXz2JoGPoSUrRUy42TDcvDo6ipsID7d2vJE31RcDnb-NercBRbdxbYL14K" 
            },
            {   name: "Акита ину", 
                breed: "Акита ину", 
                image: "https://lapkins.ru/upload/iblock/c06/c06d4716c1620542d39f3e480950e016.jpg" 
            },
            {   name: "Басенджи", 
                breed: "Басенджи", 
                image: "https://lapkins.ru/upload/iblock/f60/f608e712750929627adf73d8603204ea.jpg"
            },
            {   name: "Белгородская овчарка", 
                breed: "Белгородская овчарка", 
                image: "https://lapkins.ru/upload/iblock/c06/c06d4716c1620542d39f3e480950e016.jpg" 
            },
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
    max-width: 500px;
    height: auto;
    border-radius: 5px;
  }
  
  h2 {
    margin-top: 10px;
    color: rgb(43, 144, 226);
  }
  
  .card p {
    color: #888;
  }
  </style>
  