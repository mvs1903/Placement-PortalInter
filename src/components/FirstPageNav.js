import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function StudentNavbar() {


    const navigate = useNavigate()
    

    const handleStudent=()=>{
        navigate("/SapLogin")
    }

    const handleAdmin = ()=>{
      navigate("/AdminLogin")
    }
  return (
    <div className="adminnavbar">
      <div className="row">
        <nav
          className="navbar flex justify-content-"
          style={{ background: "#32557D" }}
        >
          <nav
            className="navbar navbar-expand-lg "
            style={{ background: "#32557D" }}
          >
            <div className="container-fluid" style={{ background: "#32557D" }}>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/" style={{ color: "white" ,margin: "0px 20px"}}>
                      Recruitment Process
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/prevRep" style={{ color: "white" ,margin: "0px 20px"}}>
                      Previous Reports{" "}
                    </Link>
                  </li>
                  {/* ---------make changes here, yaha par jab click karenge to details wale page pe jayega and waha par jo db me details hai woh rendered hai , bas additional details add karke db me update karna hai------------ */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/contactUs" style={{ color: "white",margin: "0px 20px" }}>
                      Contact Us <img src="" alt="" />
                    </Link>
                  </li>
                </ul>

             </div>
            </div>
          </nav>
        </nav>
      </div>
    </div>
  );
}
