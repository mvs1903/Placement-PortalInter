import React from "react";
import { Link } from "react-router-dom";
export default function AdminsideNavbar() {
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
              {/* <a class="navbar-brand" href="#">Logout</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button> */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/" style={{ color: "white",margin: "0px 20px" }}>
                      Logout{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/stats" style={{ color: "white" ,margin: "0px 20px"}}>
                      Analysis
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Notification" style={{ color: "white",margin: "0px 20px" }}>
                      Post Notification
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin" style={{ color: "white" , margin: "0px 20px" }}>
                      Data Handling
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
