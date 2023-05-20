import BasicChart from "./widgets/GetChart";
import { CompanyContext } from "../context/CompanyContext";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirstPageNav from "../components/FirstPageNav";
import djsceHall from "../assets/djsceHall.jpg";
import "../components/FirstPageNav.css";
import RecruitProcess from "./RecruitProcess";

//----------------------------------------------------------------

<div>
{/* // <!-- Important Owl stylesheet --> */}
 <link rel="stylesheet" href="owl-carousel/owl.carousel.css"/>

{/* //  <!-- Default Theme --> */}
 <link rel="stylesheet" href="owl-carousel/owl.theme.css"/>

{/* //  <!-- jQuery 1.7+ --> */}
 <script src="jquery-1.9.1.min.js"></script>

{/* //  <!-- Include js plugin --> */}
 <script src="assets/owl-carousel/owl.carousel.js"></script>


</div>

//----------------------------------------------------------------

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
        <div>
        <h3>LOGIN</h3>

        </div>
          
          <button className="otherBtn" onClick={handleStudent}>
            Student Login
          </button>
          <button className="otherBtn" onClick={handleAdmin}>
            Admin Login
          </button>
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
