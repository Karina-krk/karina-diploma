<template>
  <div class="root">
    <img class="background" ref="background" src="../assets/background.jpeg" />
    <div class="section section-1" ref="first">
      <div>
        <h1>Про Собак <span>DOGOG</span></h1>
      </div>
    </div>
    <div class="section section-2" ref="second">
      <div>
        <h2>Наша история</h2>
        <p>Мы начали работу в 2007 году, обнаружив, что в городе много бездомных собак, требующих внимания. С тех пор мы помогли многим собакам найти дом и предоставляем услуги ухода для питомцев.</p>
        <h2>Наша команда</h2>
        <p>Мы работаем с командой экспертов и волонтеров, которые любят и заботятся о животных. Наш персонал всегда готов оказать помощь и сделать все необходимое, чтобы вы и ваш питомец чувствовали себя уютно и защищенно.</p>
        <h2>Наши ценности</h2>
        <p>Мы гордимся нашей работой и привержены высоким стандартам заботы и ухода за животными. Мы уважаем и ценим жизнь каждого питомца и делаем все возможное, чтобы предоставить им лучшие условия и заботу.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const background = ref(null);
const first = ref(null);
const second = ref(null);

const handleScroll = () => {
  const scrollY = window.scrollY;
  first.value.style.opacity = (100 - (scrollY + window.innerHeight - first.value.offsetHeight)) / 100;
  second.value.style.opacity = (scrollY + window.innerHeight - second.value.offsetTop) / 100;
  const maxBackgroundSize = 120;
  const backgroundSize = scrollY / (maxBackgroundSize - 100);
  background.value.style.transform = 'scale(' + (100 + backgroundSize * 0.4) / 100 + ')';
};

onMounted(() => {
  document.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
img.background {
  z-index: 0;
  min-height: 100%;
  min-width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
}


.section {
  min-height: 100vh;
  position: relative;
}

.section > div {
  display: flex;
  flex-direction: row;
  position: fixed;
  color: white;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}

.section-1 {
  margin-bottom: 500px;
  font-size: 4em;
}
.section-1 h1 span{
  color: #00834cd5;
  font-weight: 800;
  -webkit-text-stroke: 0.5px #ffffff9f;
}

.section-2 {
  opacity: 0;
}

.section-2 div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  text-align: center;
  padding: 50px;
  max-width: 1000px;
}

.section-2 h2 {
  font-size: 2em;
  margin-bottom: 10px;
  color: cadetblue;
}

.section-2 p {
  line-height: 100%;
}

@media only screen and (max-width: 428px) {
  img.background {
    z-index: 0; 
    background-size: cover
  }
  
  .section {
    min-height: 100vh;
    position: relative;
  }
  
  .section > div {
    display: flex;
    flex-direction: row;
    position: fixed;
    color: white;
    left: 26%;
    top: 35%;
    transform: translate(-50%, -50%);
    font-size: 20px;

  }
  .section-1 {
    font-size: 20px;
  }

  .section-2 h2 {
    font-size: 1.2em;
  }

  .section-2 p {
    font-size: 0.9em;
  }
}
</style>
