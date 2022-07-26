import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {db} from "../firebaseConfig"
import { doc, getDoc } from "firebase/firestore";

const SapLogin = () => {
  const navigate = useNavigate();
  const [SAP, setSAP] = useState("");
  const [password, setPassword] = useState("");
  
  // const docRef = doc(db, "Details");
  // var sap = docRef.get("SAPID");
  // console.log(sap)

  const handleLogin = () => {
    if((SAP === "")||(SAP === null)||(password==="")||(password===null)){
      alert("Login ID or Password cannot be empty")
    }
    else{
      navigate("/PopUp");
    }
  };

  const handleSignUp = () => {
    navigate("/PhoneSignUp");
  };

  // const
  return (
    <div>
      <form action="" className="fullForm">
        <h3 id="phoneVeri">STUDENT PORTAL :</h3>
        <label htmlFor="" className="label">
          Enter SAP ID :
        </label>{" "}
        <br />
        <input
          type="number"
          className="labelIn"
          placeholder="Enter your SAPID"
          onChange={(e) => setSAP(e.target.value)}
          value={SAP}
        />{" "}
        <br />
        <label htmlFor="" className="label">
          Enter Password :
        </label>{" "}
        <br />
        <input
          type="password"
          className="labelIn"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />{" "}
        <br />
        <br />
          <button className="login" onClick={handleLogin}>
            Login
          </button>
          <button className="otherBtn" onClick={handleSignUp}>Signup</button>
        <div id="recaptcha-container" />
      </form>
    </div>
  );
};

export default SapLogin;
