
import {initializeApp} from 'firebase/app'
import {getFirestore}from 'firebase/firestore'
import {getAuth} from "firebase/auth"
import { getDatabase } from 'firebase/database';

import { doc, setDoc } from "firebase/firestore"; 
import { db } from './firebaseConfig';


// const firebaseConfig = {
//  apiKey: "AIzaSyD9VnU4mU2uBJNzMSQrOsylss4_ZX-1Etc",
//  authDomain: "placementproj.firebaseapp.com",
//  databaseURL: "https://placementproj-default-rtdb.firebaseio.com",
//  projectId: "placementproj",
//  storageBucket: "placementproj.appspot.com",
//  messagingSenderId: "57199764219",
//  appId: "1:57199764219:web:35c33447669ad5ecb1c65e"
// };

// const app = initializeApp(firebaseConfig)

// // return getDatabase(app) 

// // }
// const db = getFirestore(app)
// // export const db = getDatabase(app)
// const auth = getAuth(app)

async function push_data (data,key){
  console.log(`${db.app} ${key}` )

  // const firebaseConfig = {
  //   apiKey: "AIzaSyAhF3hNDNlJt04tydJj5mzNqiw0MPswDw4",
  //   authDomain: "djsce-pp0.firebaseapp.com",
  //   projectId: "djsce-pp0",
  //   storageBucket: "djsce-pp0.appspot.com",
  //   messagingSenderId: "543072443264",
  //   appId: "1:543072443264:web:6948338da3bafb4c9bff65",
  //   measurementId: "G-SN9S4BB2Y0"
  // };

  
  // export default StartFirebase

// Add a new document in collection "cities"
await setDoc(doc(db, "Details", key), data);
}
export default push_data;

  