
import {
  setDoc,
  doc,
  updateDoc,
  getDocs,
  getDoc,
  collection,
} from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import {compName} from "../Admin/Notification";
import { db } from "../firebaseConfig";
import { useUserAuth } from "../userAuthContext";
import { UserContext } from "../../context/UserContex";
import { useAuth } from "../../context/authContextk";
import { Navigate } from "react-router-dom";
import StudentNavbar from "../Student/Studentsidenav";
export default function PopUp() {
  const [notification, setNotification] = useState([]);
  const [interestedComp, setInterestedComp] = useState([]);
  const [enteredSAP, setEnteredSAP] = useState("");
  const [compDetails, setCompDetails] = useState([]);
  const con =useContext(UserContext);
  const {UserInterestedDetails,AddInterested}=con;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // db.connection("Compny")
    // const Compnydoc = doc(db,"Compny","TCS")
    // const newRef = firebase.firestore("Details/"+"6003200176")
    // await  updateDoc(Compnydoc,newRef)
    // alert("You have Successfully Registered !");
    console.log(notification);
  };
  // const navigate = useNavigate()
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const {currentUser , userDetails} = useAuth()
  // const userid = currentUser.id;

  useEffect(()=>{
    setEnteredSAP(userDetails.SAPID)
  })

  // const handleNotInterested = async () => {
  //   try {
  //     // await logOut();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   alert("Your response have been succesfully recorded!");
  //   // navigate("/");
  // };
  const handleLogout = () => {
    navigate("/");
  };

  const handleInterested = async (e) => {
    console.log(e,enteredSAP);
    
    const details = doc(db, "CompDetails", e, "Interested", enteredSAP.toString());
    console.log(details);
    const dt = await getDoc(doc(db, "PerDetails", enteredSAP.toString()));
    console.log(dt)
    const detail = await setDoc(details, dt.data());
    
    // const perDetails = doc(db, "PerDetails", enteredSAP.toString(), "Interested",e);
    // let company=com

    // const dtComp = await setDoc(perDetails,compDetails)

    console.log(detail);
    AddInterested(e);

    navigate("/Otp");
  };

  const handleEnteredSAP = async (e) => {
    setEnteredSAP(e.target.value);
    console.log(e);
  };
  useEffect(() => {
    const getCompDetails = async () => {
      const details = await getDocs(collection(db, "CompDetails"));
      let records = details.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // UserInterestedDetails.forEach(e => {delete records[i]});
      let record1=[];
      let record2=[];
      for (let i=0;i<records.length;i++){
        if (!UserInterestedDetails.includes(records[i].id)){

          record1.push(records[i]);

        }
        else{
          record2.push(records[i])
        }
      }
      // console.log(UserInterestedDetails);
      setNotification(record1);
      console.log(record1);
      console.log(record2);

      setCompDetails(record1);
      setInterestedComp(record2)
    };
    getCompDetails();
    console.log("first");
    console.log(compDetails);
  }, []);
  return (
    <>
    <StudentNavbar/>
      <div>
        {/* <h3>{SAP}</h3> */}
        <br />
        <input
          onChange={handleEnteredSAP}
          value={enteredSAP}
          type="number"
          className="placemnt"
          disabled
        />{" "}
        <br />
        {compDetails?.map((company) => {
          return (
            <div  className="formNoti">
              {/* <Notification/> */}
              <h3 id="phoneVeri">
                {" "}
                {company.compName} is coming for interview on{" "}
                {company.visitDate} at {company.reportTime} do you want to
                Register ?
              </h3>
              <br />

              <button
                type="submit"
                className="login"
                onClick={() => handleInterested(company.id)}
              >
                Interested
              </button>
              {/* <button
                type="submit"
                className="reset"
                onClick={handleNotInterested}
              >
                Not Interested
              </button> */}
            </div>
          );
        })}
        <br />
        <br />

        <h3>Interested Companies</h3>

        {interestedComp?.map((company) => {
          return (
            <div  className="formNoti">
              {/* <Notification/> */}
              <h3 id="phoneVeri">
                {" "}
                {company.compName} is coming for interview on{" "}
                {company.visitDate} at {company.reportTime} do you want to
                Register ?
              </h3>
              <br />
            </div>
          );
        })}



      </div>
    </>
  );
}
