<template>
    <footer class="footer">
      <div class="container">
        <h3 class="footer-title">Следите за нами в соц. сетях</h3>
        <div class="socials">
          <a href="https://www.facebook.com"><img src="../../assets/fb.png"></a>
          <a href="https://www.instagram.com"><img src="../../assets/inst.png"></a>
          <a href="https://www.twitter.com"><img src="../../assets/tw.png"></a>
        </div>
        <p class="footer-text">© 2023 MADE BY KARINA ХК</p>
      </div>
    </footer>
  </template>
  
  <script setup>
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
  .footer {
    background-color: rgba(255, 255, 255, 0.919); 
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px 0;
  }
  .container { 
    background: #d1d0d0; 
    border-radius: 20px;
    width: 700px;
  } 
  
  .footer-title {
    margin-top: 10px;
    font-size: 20px;
    color: #017143; 
    margin-bottom: 10px;
  }
  
   p{
    font-size: 15px;
    color: #017143; 
  }
  
  .socials img {
    width: 30px;
    margin: 5px;
  }
  .socials img:hover{
    transform: scale(1.1); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  </style>
  