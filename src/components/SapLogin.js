import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SapLogin = () => {
  const registerComp = () => {
    alert("You have successfully Registered");
    setflag(false);
  };

  const [flag, setflag] = useState(true);
  const [enteredSAP, setEnteredSAP] = useState("");

  const SAPHandler = (e) => {
    setEnteredSAP(e.target.value);
    console.log(enteredSAP)
  };
  return (
    <div className="card">
      <form>
        {flag && (
          <div>
            <form>
              <h3 id="phoneVeri">
                TCS is coming for interview do you want to Register ?
              </h3>
              <label htmlFor="" className="label" >
                SAP ID :
              </label>{" "}
              <br />
              <input type="number" className="labelIn" onChange={SAPHandler} /> <br />
              <button
                type="submit"
                className="login"
                onClick={() => registerComp()}
              >
                Register
              </button>
            </form>
          </div>
        )}
        <h3 id="phoneVeri">SAP ID Verification :</h3>
        <label htmlFor="" className="label">
          SAP ID :
        </label>{" "}
        <br />
        <input type="number" className="labelIn" /> <br />
        <label htmlFor="" className="label">
          Create New Password :
        </label>{" "}
        <br />
        <input type="text" className="labelIn" /> <br />
        <label htmlFor="" className="label">
          Re-Enter Password :
        </label>{" "}
        <br />
        <input type="text" className="labelIn" /> <br />
        <div id="recaptcha-container" />
        <div>
          <Link to="/adminLogin">
            <button type="submit" className="otherBtn">
              Are you Admin?
            </button>
          </Link>
          <Link to="/PhoneSignUp">
            <button type="submit" className="login">
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SapLogin;
