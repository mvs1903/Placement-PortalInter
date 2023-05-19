import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../components/firebaseConfig";

let uploadFile=async (firebasefilepath,file)=>{
 // var storageRef = storage.ref();
 //      // Get the file from DOM
 //      // var file = document.getElementById("files").files[0];
 //      console.log(file);
      
      
      //dynamically set reference to the file name
      var thisRef = ref(storage,firebasefilepath);
      //put request upload file to firebase storage
      uploadBytes(thisRef, file).then((snapshot) => {
       console.log('Uploaded a blob or file!');
     });
     
 console.log("File Uploaded")
}

let getFile=async (firebasefilepath) =>{
 console.log(`${firebasefilepath}`)

}

export {uploadFile,getFile};