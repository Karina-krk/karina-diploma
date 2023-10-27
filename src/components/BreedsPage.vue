<template>
  <div class="container">
      <section class="dogs" v-for="dog in dogsData" :key="dog.id">
        <DogItem :dog="dog" @click.stop="goToDogUrl(dog.id)" />
      </section>
    <div class="card" v-for="(dog, id) in dogsData" :key="id">
      <router-link :to="'/dog/' + dog.id">
        <img :src="dog.image" :alt="dog.breed">
        <h2>{{ dog.breed }}</h2>
        <p>Возраст: {{ dog.age }}</p>
        <p>{{ dog.description }}</p>
      </router-link>
      </div>
  </div>
    <Button label="Добавить" class="p-button" @click="visible = true">
      <i class="fas fa-dog">Добавить</i>
    </Button>
  <Dialog v-model:visible="visible" modal header="Добавить" :style="{ width: '30vw' }">
    <div class="p-field">
      <label for="breed">Порода:</label>
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
import DogItem from './DogItem.vue';
import { useRouter } from 'vue-router'


const router = useRouter()

const { uploadImage, newContent, addContent, getContentList } = useContent();
const visible = ref(false);

async function add() {
  await addDog();
  await addContent();
  visible.value = false;
}

async function addDog() {
  try {
    const dogData = {
      id: newContent.value.id,
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
    id: 0,
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
  getContentList();
});


function goToDogUrl(id) {
  router.push({ name: 'dog', params: { id } })
}

</script>

  
  <style scoped>
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
  .p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
    color: rgb(241, 255, 249);
    background-color: rgb(43, 144, 226);
    width: 100px;
    height: 50px;
    font-size: 17px;
}
  </style>
  