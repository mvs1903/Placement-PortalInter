import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FirstPage = () => {
    const navigate = useNavigate()

    const handleStudent=()=>{
        navigate("/SapLogin")
    }

    const handleAdmin = ()=>{
      navigate("AdminLogin")
    }
  return (
    <div className="fullForm">
      {/* <Link to="/AdminLogin"> */}
        <button className="otherBtn"onClick={handleAdmin} >Are you Admin?</button>
      {/* </Link> */}
      {/* <Link to="/SapLogin"> */}
        <button className="otherBtn" onClick={handleStudent} >Are you Student?</button>
      {/* </Link> */}
    </div>
  );
};

export default FirstPage;
