<template>
  <div class="all-items">
    <div class="container">
      <div class="card" v-for="(dog, index) in dogsData" :key="index">
        <router-link :to="'/dog/' + dog.id" class="link">
          <img :src="dog.image" :alt="dog.image">
          <h2>{{ dog.breed }}</h2>
          <h3>Возраст: </h3><p>{{ dog.age }} лет/год </p>
          <h3>Коротко о:</h3> <p>{{ dog.description }} </p>
        </router-link>
      </div>
    </div>
    <Button label="Добавить новую собаку" class="p-button" @click="visible = true">
      <i class="fas fa-dog"></i>
    </Button>
  </div>
  <Dialog v-model:visible="visible" modal header="Добавить новую собаку" :style="{ width: '30vw' }">
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
    <span class="p-field">
      <label for="description">Коротко о:</label>
      <Textarea
      style="margin-top: 10px; margin-bottom: 10px; width: 100%"
        v-model="newContent.description"
        rows="5"
        cols="30"
      />
    </span>
    <form class="input__wrapper" enctype="multipart/form-data">
      <input id="inputfile" class="input inputfile" name="images" type="file" accept=".jpg, .png" @input="onUpload($event)" />
      <label for="inputfile" class="inputfile-button">
        <span class="input__file-icon-wrapper"/>
      </label>
    </form>
    <template #footer>
      <Button label="Сбросить" icon="pi pi-times" @click="clear" text class="btn" />
      <Button label="Добавить" icon="pi pi-check" @click="add" autofocus class="btn" />
    </template>
  </Dialog>
  <FooterComponent />
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
import FooterComponent from '../components/layouts/FooterComponent.vue'
// import { useRouter } from 'vue-router'


// const router = useRouter()

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
    console.log(newContent.value.image)

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
  getContentList;
});

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:200, 300, 400, 500, 600, 700, 800, 900&display=swap'); 

.all-items{
  background-image: url(../assets/bg.jpeg);
  background-size: contain;

}
.link {
  text-decoration: none;
}
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
    max-width: 300px;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  
  img {
    max-width: 260px;
    min-height: 200px;
    border-radius: 5px;
  }
  
  h2 {
    margin-top: 10px;
    color: rgb(43, 144, 226);
    font-family: 'Poppins', sans-serif; 
  }
  
  .card p {
    color: #888;
    font-family: 'Poppins', sans-serif; 
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
    width: 120px;
    height: 60px;
    font-size: 28px;
    font-family: 'Poppins', sans-serif; 
    padding-left: 45px;
}
.btn{
  width:max-content;
  height: 40px;
  font-size: 12px;
  margin: 10px;
  padding: 5px;
}
</style>
  