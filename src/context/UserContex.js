import React, { useEffect, useState } from "react";

const UserContext=React.createContext();


let UserState=(props)=>{
  const [UserDetails, setUserDetails] = useState({})
  const [UserInterestedDetails, setUserInterestedDetails] = useState([])
 let AddInterested=(compId)=>{
   let x=[compId].concat(UserInterestedDetails);
   setUserInterestedDetails(x);

 }
  
  
 return (<UserContext.Provider value={{UserInterestedDetails,AddInterested}} >
  


  {props.children}
 </UserContext.Provider>);
}

export {UserContext,UserState}