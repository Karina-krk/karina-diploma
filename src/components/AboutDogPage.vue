<template>
  <div class="root">
    <img class="background" ref="background" src="../assets/background.jpeg" />
    <div class="section section-1" ref="first">
      <div>
        <h1>Про Собак DOGOG</h1>
      </div>
    </div>
    <div class="section section-2" ref="second">
      <div>
        <h2>Here's more info</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
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
}

img.background {
  position: fixed;
  top: 0;
  left: 0;
}

.section {
  min-height: 100vh;
  position: relative;
}

.section > div {
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

.section-2 {
  opacity: 0;
}

.section-2 div {
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  text-align: center;
  padding: 50px;
  max-width: 300px;
}

.section-2 h2 {
  font-size: 2em;
  margin-bottom: 40px;
}

.section-2 p {
  line-height: 150%;
}
</style>
