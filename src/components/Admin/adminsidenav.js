import React from "react";
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
                    <a className="nav-link active" aria-current="page" href="/" style={{ color: "white",margin: "0px 20px" }}>
                      Logout{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/stats" style={{ color: "white" ,margin: "0px 20px"}}>
                      Analysis
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Notification" style={{ color: "white",margin: "0px 20px" }}>
                      Post Notification
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin" style={{ color: "white" , margin: "0px 20px" }}>
                      Data Handling
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
