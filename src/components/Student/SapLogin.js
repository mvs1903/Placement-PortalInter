import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {db} from "../firebaseConfig"
import { doc, getDoc , collection } from "firebase/firestore";
import {authentication} from "../firebaseConfig"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "../../context/authContextk";

const SapLogin = () => {
  const navigate = useNavigate();
  const [SAP, setSAP] = useState("");
  const [password, setPassword] = useState("");
  
  // const provider = provider.setCustomParameters({
  //   'login_hint': 'user@example.com'
  // });

  // const handleGoogle = async (e)=>{
  //   e.preventDefault();
  //   console.log("entered handleGoogle")
  //   const provider = new GoogleAuthProvider();
  //   await signInWithPopup(authentication,provider)
  //   .then((re)=>{
  //     navigate("/PopUp")
  //     console.log(re)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // }
  
  const {login , setUserDetails} = useAuth()

  const handleLogin = async(e) => {
    e.preventDefault();
    if((SAP === "")||(SAP === null)||(password==="")||(password===null)){
      alert("Login ID or Password cannot be empty")
      return;
    }
    const detail =  await getDoc(doc(db,'PerDetails' ,SAP))

    // let recordSAP = details.docs.map((doc)=>(doc.data()["SAPID"]))
    // let recordPass = details.docs.map((doc)=>(doc.data()["password"]))

    console.log(detail.data())

    if(detail.data()!=null && password === detail.data().password){
      let userDetails = await getDoc(doc(db,"PerDetails",SAP))
      setUserDetails(userDetails.data())
          alert("Login Successful")
          navigate("/PopUp");
    }
    else{

      alert("Login ID or Password doesn't match")
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
          {/* <button className="login" onClick={handleGoogle}>
            Google
          </button> */}

          <button className="otherBtn" onClick={handleSignUp}>Signup</button>
        <div id="recaptcha-container" />
      </form>
    </div>
  );
};

export default SapLogin ;
// export {SAP};
