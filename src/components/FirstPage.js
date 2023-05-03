import BasicChart from "./widgets/GetChart";
import { CompanyContext } from "../context/CompanyContext";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";



const FirstPage = () => {
    const navigate = useNavigate()
    

    const handleStudent=()=>{
        navigate("/SapLogin")
    }

    const handleAdmin = ()=>{
      navigate("/AdminLogin")
    }
  return (


    <div className="adminForm">
      {/* <Link to="/AdminLogin"> */}
        <button className="otherBtn"onClick={handleAdmin} >Admin Login</button>
      {/* </Link> */}
      {/* <Link to="/SapLogin"> */}
        <button className="otherBtn" onClick={handleStudent} >Student Login</button>
      {/* </Link> */}
      
    </div>
    
    
  );
};

export default FirstPage;
