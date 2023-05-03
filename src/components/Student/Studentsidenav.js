import React from "react";
export default function StudentNavbar() {
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
                    <a className="nav-link active" aria-current="page" href="/">
                      Logout{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/PopUp">
                      Notification
                    </a>
                  </li>
                  {/* ---------make changes here, yaha par jab click karenge to details wale page pe jayega and waha par jo db me details hai woh rendered hai , bas additional details add karke db me update karna hai------------ */}
                  <li className="nav-item">
                    <a className="nav-link" href="/editProfile">
                      Edit Profile <img src="" alt="" />
                    </a>
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
