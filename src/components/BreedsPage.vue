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
    <div class="container">
      <div class="card" v-for="(dog, index) in dogsData" :key="index">
        <img :src="dog.image" :alt="dog.breed">
        <h2>{{ dog.breed }}</h2>
        <p>Возраст: {{ dog.age }}</p>
        <p>{{ dog.description }}</p>
      </div>
    </div>
    <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
  <Dialog v-model:visible="visible" modal header="Добавить игру" :style="{ width: '30vw' }">
    <div class="p-field">
      <label for="price">Порода:</label>
      <InputText
        style="margin-top: 10px; margin-bottom: 10px; width: 100%"
        id="breed"
        v-model="newContent.breed"
        mode="currency"
        locale="ru-ru"
      />
    </div>
    <div class="p-field">
      <label for="age">Возраст:</label>
      <InputText 
      style="margin-top: 10px; margin-bottom: 10px; width: 100%"
      id="age"
      v-model="newContent.age"
      />
    </div>
    <span class="p-float-label">
      <Textarea
        v-model="newContent.description"
        rows="5"
        cols="30"
        style="margin-bottom: 10px; width: 100%"
      />
      <label>Коротко о:</label>
    </span>
    <form class="input__wrapper" enctype="multipart/form-data">
      <input id="inputfile" class="input inputfile" name="images" type="file" accept=".jpg, .png" @input="onUpload($event)" />
      <label for="inputfile" class="inputfile-button">
        <span class="input__file-icon-wrapper">
          <img class="input__file-icon" width="25" />
        </span>
      </label>
    </form>
    <template #footer>
      <Button label="Сбросить" icon="pi pi-times" @click="clear" text />
      <Button label="Добавить" icon="pi pi-check" @click="add" autofocus />
    </template>
  </Dialog>
</template>
  


<script setup>
import { ref, onMounted } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { useContent } from '../composables/useContent';
import Textarea from 'primevue/textarea';

const dogs = [
    { 
      breed: "Австралийская овчарка (Аусси)", 
      image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQaodBpDpPXz2JoGPoSUrRUy42TDcvDo6ipsID7d2vJE31RcDnb-NercBRbdxbYL14K",
      age: "12",
      description: "Хорошая овчарка"
    },
    { 
      breed: "Акита ину", 
      image: "https://lapkins.ru/upload/iblock/c06/c06d4716c1620542d39f3e480950e016.jpg",
      age: "1",
      description: "Хорошая акита ину"
    },
    { 
      breed: "Бассенджи", 
      image: "https://lapkins.ru/upload/iblock/f60/f608e712750929627adf73d8603204ea.jpg",
      age: "5",
      description: "Хороший бассенджи"
    },
  ]

const { uploadImage, newContent, addContent } = useContent();
const visible = ref(false);

async function add() {
  await addDog();
  await addContent();
  visible.value = false;
}

async function addDog() {
  try {
    const dogData = {
      breed: newContent.value.breed,
      age: newContent.value.age,
      description: newContent.value.description,
      image: newContent.value.image,
    };

    const docRef = await addDoc(collection(db, 'dogs'), dogData);
    console.log('Document written with ID: ', docRef.id);
    clear();
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}
function clear() {
  newContent.value = {
    breed: '',
    image: '',
    age: '',
    description: '',
  };
}

async function onUpload(e) {
  const image = e.target.files[0];
  await uploadImage(image);
}


const dogsData = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'dogs'));
  dogsData.value = querySnapshot.docs.map(doc => doc.data());
});

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
  