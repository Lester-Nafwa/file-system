import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from '/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAIVJLuoNoV5ASFE05kf_vXFbkMOCOJGXI",

  authDomain: "dms-kenya.firebaseapp.com",

  databaseURL: "https://dms-kenya-default-rtdb.firebaseio.com",

  projectId: "dms-kenya",

  storageBucket: "dms-kenya.appspot.com",

  messagingSenderId: "870862696437",

  appId: "1:870862696437:web:aeb916b4e95186346f3abc"

}

firebase.initializeApp(firebaseConfig)
// Initialize Firebase
const app = createApp(App)

app.use(router)

app.mount('#app')

