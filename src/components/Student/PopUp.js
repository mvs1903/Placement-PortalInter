import { async } from "@firebase/util";
import {
  setDoc,
  doc,
  updateDoc,
  getDocs,
  getDoc,
  collection,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { Link, useNavigate } from "react-router-dom";
// import {compName} from "../Admin/Notification";
import { db } from "../firebaseConfig";
import { useUserAuth } from "../userAuthContext";
export default function () {
  const [notification, setNotification] = useState([]);
  const [enteredSAP, setEnteredSAP] = useState("");
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

<<<<<<< HEAD
  const handleNotInterested = async () => {
    try {
      // await logOut();
    } catch (error) {
      console.log(error.message);
    }
    alert("Your response have been succesfully recorded!")
    // navigate("/");
=======
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
>>>>>>> 9149e3d (filtering done)
  };

  const handleInterested = async (e) => {
    console.log(e);
    const details = doc(db, "CompDetails", e, "Interested", enteredSAP);
    const dt = await getDoc(doc(db, "PerDetails", enteredSAP));
    const detail = await setDoc(details, dt.data());
    console.log(detail);
    console.log(details);

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
        <h3>Enter SAPID</h3>
        <input
          onChange={handleEnteredSAP}
          value={enteredSAP}
          type="number"
          className="labelIn"
        />{" "}
        <br />
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
            </form>
          );
        })}
      </div>
    </>
  );
}
