<template>
    <section class="volunteering-section">
      <div class="volunteering-item" v-on:mouseover="startAnimation($event)" v-on:mouseout="stopAnimation($event)">
        <img src="https://img.gazeta.ru/files3/621/16612621/shutterstock_275863976-pic_32ratio_1200x800-1200x800-38047.jpg" alt="Выгул собак" class="volunteering-image" />
        <h2>Выгул собак</h2>
        <p>
          Присоединитесь к нашей команде волонтеров по выгулу собак и помогите нашим питомцам получить необходимое движение и
          внимание.
        </p>
      </div>
      <div class="volunteering-item" v-on:mouseover="startAnimation($event)" v-on:mouseout="stopAnimation($event)">
        <img src="https://gallery.profi.ru/mkt/emsender/blog/pages/74/1173_1002_897.jpeg" alt="Груминг" class="volunteering-image" />
        <h2>Груминг</h2>
        <p>
          Сделайте наших питомцев более ухоженными и здоровыми, присоединившись к команде грумеров и волонтеров.
        </p>
      </div>
      <div class="volunteering-item" v-on:mouseover="startAnimation($event)" v-on:mouseout="stopAnimation($event)">
        <img src="https://vestirama.ru/assets/templates/images/photo/5edaa8dad2c2258a1a0ca1b08dcc4646.jpg" alt="Сбор средств" class="volunteering-image" />
        <h2>Сбор средств</h2>
        <p>
          Присоединитесь к нашей команде по сбору средств и помогите нашему приюту продолжать заботиться о питомцах.
        </p>
      </div>
    </section>
  </template>
  
  <style scoped>
  .volunteering-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
  }
  
  .volunteering-item {
    text-align: center;
    max-width: 300px;
    transition: transform 0.3s ease-in-out;
  }
  
  .volunteering-item:hover {
    transform: scale(1.05);
  }
  
  .volunteering-image {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #265f17;
  }
  
  p {
    font-size: 16px;
    color: #777;
  }
  </style>
  
  <script>
  export default {
    methods: {
      startAnimation(event) {
        event.currentTarget.classList.add("animate");
      },
      stopAnimation(event) {
        event.currentTarget.classList.remove("animate");
      }
    }
  };
  </script>
  