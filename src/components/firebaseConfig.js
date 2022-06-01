
import {initializeApp} from 'firebase/app'
import {getFirestore}from 'firebase/firestore'
import {getAuth} from "firebase/auth"
import { getDatabase } from 'firebase/database';

// function StartFirebase(){

  const firebaseConfig = {
    apiKey: "AIzaSyAhF3hNDNlJt04tydJj5mzNqiw0MPswDw4",
    authDomain: "djsce-pp0.firebaseapp.com",
    projectId: "djsce-pp0",
    storageBucket: "djsce-pp0.appspot.com",
    messagingSenderId: "543072443264",
    appId: "1:543072443264:web:6948338da3bafb4c9bff65",
    measurementId: "G-SN9S4BB2Y0"
  };
  const app = initializeApp(firebaseConfig)

  // return getDatabase(app)
  
// }
  export const db = getFirestore(app)
  // export const db = getDatabase(app)
  export const auth = getAuth(app)
  // export default StartFirebase

  