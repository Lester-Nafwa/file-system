import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyAIVJLuoNoV5ASFE05kf_vXFbkMOCOJGXI",

  authDomain: "dms-kenya.firebaseapp.com",

  databaseURL: "https://dms-kenya-default-rtdb.firebaseio.com",

  projectId: "dms-kenya",

  storageBucket: "dms-kenya.appspot.com",

  messagingSenderId: "870862696437",

  appId: "1:870862696437:web:aeb916b4e95186346f3abc"

}


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();