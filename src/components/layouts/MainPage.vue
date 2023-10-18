<template>
    <div class="circle"></div>
    <section class="container">
    <div class="content">
        <div class="textBox">
          <h2>
            Это не просто приют<br> Это <span>Dogog</span>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nulla saepe maxime, officiis molestias accusamus odio ducimus amet, atque repellendus ex fugit! Eos provident debitis vitae laboriosam tenetur mollitia odio?
          </p>
          <a href="#" class="learnMore">Узнать больше</a>
        </div>
        <div class="imgBox">
          <img :src="currentImage" class="corgi">
        </div>
      </div>
      <ul class="thumb">
        <li><img src="@/assets/dog1.png" @click="imgSlider('@/src/assets/origdog1.png')" alt="Собака 1"></li>
        <li><img src="@/assets/dog2.png" @click="imgSlider('../../src/assets/origdog2.png')" alt="Собака 2" style="height: 80px; width: 110px"></li>
        <li><img src="@/assets/dog3.png" @click="imgSlider('../../src/assets/origdog3.png')" alt="Собака 3"></li>
      </ul>
      <ul class="sci">
        <li><a href="#"><img src="@/assets/fb.png" alt="Facebook"></a></li>
        <li><a href="#"><img src="@/assets/tw.png" alt="Twitter" style="width: 50%;"></a></li>
        <li><a href="#"><img src="@/assets/inst.png" alt="Instagram"></a></li>
      </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const currentImage = ref('../../src/assets/origdog1.png')

function imgSlider(image) {
    currentImage.value = image
}
</script>

<style scoped>
@font-face {
    font-family: Poppins;
    src: url(../../assets/Poppins-Black.ttf);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.container {
    position: relative;
    width: 100%;
    min-height: 100vh;
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
    display: flex;
    gap: 40px;
    list-style: none;
  }
  
  header ul li a {
    color: rgb(81, 134, 134);
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  header ul li a:hover {
    color: #007bff;
  }
  
  .side p-button {
    margin-left: 20px;
  }
  
  .content {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .textBox {
    position: relative;
    max-width: 600px;
  }
  
  .textBox h2 {
    color: #0056b3;
    font-size: 4em;
    line-height: 1.4em;
    font-weight: 500;
  }
  
  .textBox h2 span {
    color: #017143;
    font-size: 1.2em;
    font-weight: 900;
  }
  
  .textBox p {
    color: #666;
  }
  
  .textBox a.learnMore {
    display: inline-block;
    margin-top: 20px;
    padding: 8px 20px;
    background: #0c6580;
    color: #fff;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.3s ease;
  }
  
  .textBox a.learnMore:hover {
    background: #0056b3;
  }
  
  .imgBox {
    width: 600px;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    margin-top: auto;
  }
  
  .imgBox img {
    max-width: 340px;
  }
  
  .thumb {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    display: flex;
  }
  
  .thumb li {
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .thumb li:hover {
    transform: translateY(-15px);
  }
  
  .thumb li img {
    width: 60px;
  }
  
  .sci {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .sci li {
    list-style: none;
  }
  
  .sci li a {
    display: inline-block;
    margin: 5px 0;
    transform: scale(0.6);
  }

  .sci img {
    width: 12%;
  }

</style>