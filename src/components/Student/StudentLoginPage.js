import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentLoginPage.css";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import {db} from "../firebaseConfig"
import { doc, getDoc , collection } from "firebase/firestore";
import {authentication} from "../firebaseConfig"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "../../context/authContextk";



const StudentLoginPage = () => {
  const navigate = useNavigate();
  const [SAP, setSAP] = useState("");
  const [password, setPassword] = useState("");
  const {login , setUserDetails} = useAuth()

  const onRectangleButton1Click = useCallback(() => {
    navigate("/AdminLoginPage");
  }, [navigate]);

  const onAdminClick = useCallback(() => {
    navigate("/AdminLoginPage");
  }, [navigate]);

  const onRectangleInputClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleInput']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSubmitBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleInput']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSubmitBtn1Click = useCallback(() => {
    // Please sync "NotificationPage" to the project
  }, []);

  const onVerifyOTPClick = useCallback(() => {
    // Please sync "NotificationPage" to the project
  }, []);

  // ------------------

  const handleLogin = async(e) => {
    e.preventDefault();
    if((SAP === "")||(SAP === null)||(password==="")||(password===null)){
      alert("Login ID or Password cannot be empty")
      return;
    }
    const detail =  await getDoc(doc(db,'PerDetails' ,SAP))
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





  //--------------------

  

  return (
    <div className="studentloginpage">
      <section className="studentloginpage-child" id="sideNav" />
      <img className="djscelogo-icon" alt="" src="logodjsce.webp" />
      <h4 className="djsce-placement-portal-container1" id="navText">
        <p className="djsce1">DJSCE</p>
        <p className="djsce1"> PLACEMENT PORTAL</p>
      </h4>
      <img className="studentloginpage-item" alt="" src="" />
      <button className="studentloginpage-inner" id="StudentBtn" />
      <button
        className="studentloginpage-child1"
        id="AdminBtn"
        onClick={onRectangleButton1Click}
      />
      <label className="student1" htmlFor="StudentBtn">
        Student
      </label>
      <label className="admin1" htmlFor="AdminBtn" onClick={onAdminClick}>
        Admin
      </label>
      <input
        className="studentloginpage-child2"
        type="text"
        onChange={(e) => setSAP(e.target.value)}
        placeholder="SAPID"
        maxLength={11}
        minLength={-9}
        value={SAP}
        required
      />
      <input
        className="studentloginpage-child3"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        value={password}
      />
      <input
        className="studentloginpage-child4"
        type="number"
        placeholder="Please Enter OTP"
        data-scroll-to="rectangleInput"
        onClick={onRectangleInputClick}
      />
      <button
        className="submit-btn2"
        id="loginBtn"
        onClick={handleLogin}
        // onClick={onSubmitBtnClick}
      />
      {/* <button
        className="submit-btn3"
        id="verifyBtn"
        onClick={onSubmitBtn1Click} */}
      {/* /> */}
      <label className="login1" htmlFor="loginBtn">
        Login
      </label>
      {/* <label
        className="verify-otp1"
        htmlFor="verifyBtn"
        // onClick={onVerifyOTPClick}
        onClick={handleLogin}
      >
        Verify OTP
      </label> */}
      {/* <label className="otp-sent-to1" htmlFor="opt sent">
        OTP sent to number 
      </label> */}
    </div>
  );
};

export default StudentLoginPage;
