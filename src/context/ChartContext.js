import React, { useEffect, useState } from "react";
import { getCountOfCompanies,getAllCompDetails } from "../database/DbFileHandler";
import { useContext } from "react";
import { getAllDocsFromCollection, getAllDocsFromSubCollection } from "../firebase_utils/firebaseDBFunctions";
import { CollectionReference } from "@firebase/firestore";
import DBConstants from "../constants/DbConstants";
const ChartContext=React.createContext();

export function useCharts(){
    return useContext(ChartContext);
}




let ChartProvider=(props)=>{
    const [CompanyDetails, setCompanyDetails] = useState({})
const [InterestedStudentsMap,setInterestedStudentMap]=useState({})
useEffect(() => {
    let getInterestedStudentMap=async(compdetails)=>{
        let interestedStudents={}
        console.log(Object.keys(compdetails).length)
    for(let companyId in compdetails){
        console.log(companyId);
        let instdocs=await getAllDocsFromSubCollection(DBConstants.COMPANY_COLLECTION,companyId,DBConstants.INTERESTED);
        interestedStudents[companyId]=instdocs.docs.map((e)=>{return {...e.data(),id:e.id}});
    }
    setInterestedStudentMap(interestedStudents);
    console.log(interestedStudents);
    }
    getAllDocsFromCollection(DBConstants.COMPANY_COLLECTION).then((res)=>{
        if(res!=undefined){
            let allComps={}
        res.docs.forEach((e)=>{
            allComps[e.id]={...e.data(),id:e.id}
           
            
        });
        setCompanyDetails(allComps);
        console.log(allComps);
        getInterestedStudentMap(allComps)
        }

    })
}, [])

 return (<ChartContext.Provider value={{CompanyDetails,InterestedStudentsMap}}>
  {props.children}
 </ChartContext.Provider>);
}

export default ChartProvider;