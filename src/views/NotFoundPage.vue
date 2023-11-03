<template>
    <div class="not-found">
     <img src="../assets/not-found.jpeg" alt="Ничего не найдено" />
     <h1>ERROR 404 - PAGE NOT FOUND</h1>
     <p>The page you requested was not found</p>
    </div>
   </template>
   
   <style scoped>
   @font-face {
    font-family: ljk_Adventure;
    src: url(../../assets/ljk_Adventure.ttf);
  }
  .not-found {
    font-family: ljk_Adventure;
    text-align: center;
    padding: 20px;
  }
  img {
    width: 500px;
    margin: 0 auto;
  }
   
   h1 {
    font-size: 38px;
    margin-top: 20px;
    color: rgb(106, 174, 252);
   }
   
   p {
    font-size: 22px;
    margin-top: 10px;
    color: #666;
   }
   
   router-link {
    display: inline-block;
    margin-top: 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
   
  router-link:hover {
    background-color: #0056b3;
  }
  </style>