import { collection,getDocs,query} from "firebase/firestore";
import { db} from "../components/firebaseConfig";

const getCountOfCompanies=async(comps)=>{
 let ans={}


 for(let i=0;i<comps.length;i++){

 const coll = collection(db, `CompDetails/${comps[i][0]}/Interested`);
 const snapshot = await getDocs(coll);
ans={...ans,...{[`${comps[i][1]}`]:snapshot.docs.length}}
 }
 
 
 
 
 return ans
}



const getAllCompDetails= async ()=>{
 const coll = collection(db, `CompDetails`);
 const snapshot = await getDocs(coll);
 let ans={};
 for (let i=0;i<snapshot.docs.length;i++){
  ans={...ans,...{[`${snapshot.docs[i].id}`]:snapshot.docs[i].data()}}
 }
 
 console.log(ans);
 return ans


}

export {getCountOfCompanies,getAllCompDetails}
