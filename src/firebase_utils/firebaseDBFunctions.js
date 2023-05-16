import { collection, doc, getDoc, getDocs } from "@firebase/firestore"
import { db } from "../components/firebaseConfig"

let getDocFromCollection=async(collectionName,DocName)=>{
    try{
        let docum=doc(db,collectionName,DocName);
        let res=await getDoc(docum);
        return res;

    }catch(e){
        return undefined
    }
}

let getAllDocsFromCollection=async(collectionName)=>{
    try{
        let docum=collection(db,collectionName);
        let res=await getDocs(docum);
        
        return res;

    }catch(e){
        return undefined;
    } 
}


let getAllDocsFromSubCollection=async(collectionName,DocName,subCollectionName)=>{
    try{
        let docum=collection(db,collectionName,DocName,subCollectionName);
        let res=await getDocs(docum);
        return res;

    }catch(e){
        return undefined;
    } 
}

export {getAllDocsFromCollection,getAllDocsFromSubCollection,getDocFromCollection}