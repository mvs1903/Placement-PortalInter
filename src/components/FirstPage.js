import BasicChart from "./widgets/GetChart";
import { CompanyContext } from "../context/CompanyContext";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirstPageNav from "../components/FirstPageNav";
import djsceHall from "../assets/djsceHall.jpg";
import "../components/FirstPageNav.css";
import RecruitProcess from "./RecruitProcess";

const FirstPage = () => {
  const navigate = useNavigate();

  const handleStudent = () => {
    navigate("/StudentLoginPage");
  };

  const handleAdmin = () => {
    navigate("/AdminLoginPage");
  };
  return (
    <div>
      <div>
        <FirstPageNav />
      </div>
      <div className="placeTeam">
        <img className="hallImg" src={djsceHall} />
        <img className="hallImg" src={djsceHall} />

        <div className="detailLo">
          <h3>LOGIN</h3>
          <button className="otherBtn" onClick={handleStudent}>
            Student Login
          </button>
          <button className="otherBtn" onClick={handleAdmin}>
            Admin Login
          </button>
          <br/>
          <a href="secondPage">New User? SignUp</a>
        </div>
      </div>
      <div>
        <RecruitProcess />
      </div>
    </div>

    // <div className="adminForm">
    //   {/* <Link to="/AdminLogin"> */}
    //     <button className="otherBtn"onClick={handleAdmin} >Admin Login</button>
    //   {/* </Link> */}
    //   {/* <Link to="/SapLogin"> */}
    //     <button className="otherBtn" onClick={handleStudent} >Student Login</button>
    //   {/* </Link> */}

    // </div>
  );
};

export default FirstPage;
