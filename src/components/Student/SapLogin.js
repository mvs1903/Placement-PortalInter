import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../userAuthContext";

const SapLogin = () => {
  const navigate = useNavigate();
  // const { logIn } = useUserAuth();
  const [SAP, setSAP] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const handleLogin = () => {
    // setError("");
    navigate("/PopUp");
    // try {
    //   // await logIn(SAP, password);
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  const handleSignUp = () => {
    navigate("/PhoneSignUp");
  };
  return (
    <div>
      <form action="">
        <h3 id="phoneVeri">Student Portal :</h3>
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
        <Link to="/PopUp">
          <button className="login" onClick={handleLogin}>
            Login
          </button>
        </Link>
        <br />
        <Link to="/PhoneSignUp">New User? Signup</Link>
        {/* <Link to="/PhoneSignUp"> */}
        {/* <button className="otherBtn" onClick={handleSignUp} >Signup</button> */}
        {/* </Link> */}
        <div id="recaptcha-container" />
      </form>
    </div>
  );
};

export default SapLogin;
