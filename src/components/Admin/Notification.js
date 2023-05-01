import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { send_email } from "../../utilities/email_sender";
import { alignPropType } from "react-bootstrap/esm/types";

const Notification = () => {
  const navigate = useNavigate();
  //
  
  const [compName, setcompName] = useState("");
  const [visitDate, setvisitDate] = useState("");
  const [reportTime, setReportTime] = useState("");

  const handlecompName = (e) => {
    setcompName(e.target.value);
  };

  const handlevisitDate = (e) => {
    setvisitDate(e.target.value);
  };

  const handleReportTime = (e) => {
    setReportTime(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("yo");
    try {
      // const compDetails = collection(db, "CompDetails");
      let doc=await addDoc(collection(db, "CompDetails"), {
        compName: compName,
        visitDate: visitDate,
        reportTime: reportTime,
      });
      let link=`http://localhost:3000/PopUp/${doc.id}`
      console.log(link)
      let message= `${compName} is coming for placement on ${visitDate} ,interested students please make note, the reporting time is ${reportTime}. For more details visit ${link} . Please note that interested student should have minimum CGPA of X`;

      console.log(message);
      
      const details =  await getDocs(collection(db,'PerDetails'))
      let records = details.docs.map((doc)=>(doc.data()["emailID"]))
      console.log(records);
      send_email(records,` ${compName} is coming for the interview`,message)
      //  });
      console.log("Input entered");
    } catch (error) {
      console.log(error.message);
    }
    alert("Notification Published Successfully");
    navigate("/AdminNavTemplate");
  };
  return (
    <div>
      <div>

      <div class='row'>

<nav class="navbar flex justify-content-" style={{background: "#32557D"}}  >
<nav class="navbar navbar-expand-lg " style={{background: "#32557D"}}>
<div class="container-fluid" style={{background: "#32557D"}}>
{/* <a class="navbar-brand" href="#">Logout</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button> */}
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
<li class="nav-item" >
    <a class="nav-link active" aria-current="page" href="#" >Logout </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#" >Analysis</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Post Notification</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Data Handling</a>
  </li>
</ul>
</div>
</div>
</nav>
</nav>

      </div>
      </div>
      <div className="adminNav" >

      <form action="">
        <input
          type="text"
          className="labelIn"
          value={compName}
          onChange={handlecompName}
        />{" "}
        is coming to our college for Placement on{" "}
        <input
          type="date"
          name=""
          id=""
          className="labelIn"
          value={visitDate}
          onChange={handlevisitDate}
        />{" "}
        <br /> reporting time is{" "}
        <input
          type="time"
          name=""
          id=""
          className="labelIn"
          value={reportTime}
          onChange={handleReportTime}
        />
        <br />
        <br />
        <Link to="/AdminNavTemplate">
        <button className="login" onClick={handleSubmit}>
          Publish
        </button>
        </Link>
      </form>
    </div>

    </div>
    
  );
};

export default Notification;
// export {compName};
