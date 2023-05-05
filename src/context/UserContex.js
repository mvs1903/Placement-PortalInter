import React, { useEffect, useState } from "react";

const UserContext=React.createContext();


let UserState=(props)=>{
  const [UserDetails, setUserDetails] = useState({})
  const [UserInterestedDetails, setUserInterestedDetails] = useState([])
  const [UserSelectedCompanies, setUserSelectedCompanies] = useState([])
 let AddInterested=(compId)=>{
   let x=[compId].concat(UserInterestedDetails);
   setUserInterestedDetails(x);

 }
 let AddSelectCompanies=(compId)=>{
  let x=[compId].concat(UserSelectedCompanies);
  setUserSelectedCompanies(x);
 }
  
  
 return (<UserContext.Provider value={{UserInterestedDetails,AddInterested,AddSelectCompanies}} >
  


  {props.children}
 </UserContext.Provider>);
}

export {UserContext,UserState}