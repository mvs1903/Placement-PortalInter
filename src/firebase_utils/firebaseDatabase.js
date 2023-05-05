import { addDoc, collection, doc, setDoc ,updateDoc} from "firebase/firestore"
import { db } from "../components/firebaseConfig"

let addSelectedCompany=async(sapid,offerdetails,companyid=undefined)=>{
 let collectionref = collection(db,"PerDetails",sapid,"Selected");
 let response=await addDoc(collectionref,offerdetails);
 if (companyid!=undefined){
  let docref2 = doc(db,"CompDetails",companyid,"Selected",sapid);
  let response2=await setDoc(docref2,offerdetails);
  
 }
 return(response);
}
let updatedSelectedCompany=async(sapid,companyref,selectedcompdetails)=>{
 let docref = doc(db,"PerDetails",sapid,"Selected",companyref);
 let response=await updateDoc(docref,selectedcompdetails)
 return(response);
}



export {addSelectedCompany,updatedSelectedCompany};