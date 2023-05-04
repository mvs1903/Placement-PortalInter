import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [adminMail, setAdminMail] = useState("");
  const [adminPass, setadminPass] = useState("");
  const navigate = useNavigate();
  // hardcoded
  const hardMail = "admin";
  const hardPass = "admin123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminMail === "" || adminPass === "") {
      alert("Email or Password cannot be empty!");
    } 
    else if(adminMail === hardMail && adminPass === hardPass) {
      navigate("/admin");
    }
    else{
      alert("Wrong ID or Password")
    }
  };

  const handleAdminMail = (e) => {
    setAdminMail(e.target.value);
    console.log(adminMail);
  };

  const handleAdminPass = (e) => {
    setadminPass(e.target.value);
    console.log(adminPass);
  };
  return (
    <form className="fullForm">
      <h3>Admin Portal Login : </h3>
      <label htmlFor="adminEmail" className="label">
        Email :
      </label>{" "}
      <br />
      <input
        type="email"
        className="labelIn"
        value={adminMail}
        onChange={handleAdminMail}
      />{" "}
      <br />
      <label htmlFor="adminPass" className="label">
        Password :
      </label>{" "}
      <br />
      <input
        type="password"
        className="labelIn"
        value={adminPass}
        onChange={handleAdminPass}
      />{" "}
      <br />
      {/* <Link to="/">
        <button className="reset">Cancel</button>
      </Link> */}
      <button className="login" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
}
