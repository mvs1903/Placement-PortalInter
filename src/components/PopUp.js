// import React from 'react'


// export default function () {

//   return (
//       <>
//     <form >
//         <h3 id ="phoneVeri" >TCS is coming for interview do you want to Register ?</h3> 
//         <label htmlFor=""className='label' >SAP ID :</label>  <br />
//         <input type="number" className='labelIn'  /> <br />     
//         <button type="submit" className='login' >Register</button>
//     </form>
//       </>
//   )
// }
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import {compName} from "../Admin/Notification";
import { db } from "../firebaseConfig";
import { useUserAuth } from "../userAuthContext";
export default function () {
  const [notification, setNotification] = useState([]);
  // const [enteredSAP, setEnteredSAP] = useState("")
  const [compDetails, setCompDetails] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // db.connection("Compny")
    // const Compnydoc = doc(db,"Compny","TCS")
    // const newRef = firebase.firestore("Details/"+"6003200176")
    // await  updateDoc(Compnydoc,newRef)
    // alert("You have Successfully Registered !");

    console.log(notification);
  };
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleNotInterested = async () => {
    try {
      // await logOut();
    } catch (error) {
      console.log(error.message);
    }
    alert("Your response have been succesfully recorded!");
    // navigate("/");
  };
  const handleLogout = () => {
    navigate("/");
  };

  const handleInterested = async () => {
    // alert("You have successfully registered");
    navigate("/Otp");
  };

  useEffect(() => {
    const getCompDetails = async () => {
      const details = await getDocs(collection(db, "CompDetails"));
          
      let records = details.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setNotification(records);
      console.log(records);

      setCompDetails(records);
    };
    getCompDetails();
    console.log("first");
    console.log(compDetails);
  }, []);
  return (
    <>
      <div>
        {/* <h3>{SAP}</h3> */}
        <button className="reset" onClick={handleLogout}>
          Log out
        </button>
        {compDetails?.map((company) => {
          return (
            <form onSubmit={handleSubmit} className="formNoti">
              {/* <Notification/> */}
              <h3 id="phoneVeri">
                {" "}
                {company.compName} is coming for interview on{" "}
                {company.visitDate} at {company.reportTime} do you want to
                Register ?
              </h3>
              <br />
              <input type="number" className="labelIn" /> <br />
              <button
                type="submit"
                className="login"
                onClick={handleInterested}
              >
                Interested
              </button>
              <button
                type="submit"
                className="reset"
                onClick={handleNotInterested}
              >
                Not Interested
              </button>
            </form>
          );
        })}
      </div>
    </>
  );
}
