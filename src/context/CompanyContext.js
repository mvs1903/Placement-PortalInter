import React, { useEffect, useState } from "react";
import { getCountOfCompanies,getAllCompDetails } from "../database/DbFileHandler";
const CompanyContext=React.createContext();


let CompanyState=(props)=>{
  const [CompanyDetails, setCompanyDetails] = useState({})
 const [compCount, setcompCount] = useState({});
 const [CompDeptwise, setCompDeptwise] = useState({})
 useEffect(() => {
  getAllCompDetails().then((allComp)=>{
    setCompanyDetails(allComp)
    let x=Object.keys(allComp).map(function(key, index) {
      return [key,allComp[key]['compName']];
    })
    console.log(x)
    getCountOfCompanies(
      x
    ).then((e)=>setcompCount(e))
  })
  
 }, [])
 

  const getCompCountData=()=>{
    return compCount;
  
  }
 return (<CompanyContext.Provider value={{getCompCountData}}>
  


  {props.children}
 </CompanyContext.Provider>);
}

export {CompanyContext,CompanyState}