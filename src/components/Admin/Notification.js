import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { send_email } from "../../utilities/email_sender";
import { alignPropType } from "react-bootstrap/esm/types";
import AdminsideNavbar from "./adminsidenav";


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

  const handleSubmit = async (e) => {
    // console.log("yo");
    e.preventDefault()
    if(compName===""||compName===null||visitDate===""||visitDate===null||reportTime===""||reportTime===null){
      alert('Feilds cannot be Empty!')
    }
    else{

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
  }
  };
  return (
      <div>
      <AdminsideNavbar/>
      <div className="adminNav" >

      <form action="">
        <input
          type="text"
          className="labelInpost"
          value={compName}
          onChange={handlecompName}
        />{" "}
        is coming to our college for Placement on{" "}
        <input
          type="date"
          name=""
          id=""
          className="labelInpost"
          value={visitDate}
          onChange={handlevisitDate}
        />{" "}
        <br /> 
        <br /> reporting time is{" "}
        <input
          type="time"
          name=""
          id=""
          className="labelInpost"
          value={reportTime}
          onChange={handleReportTime}
        />
        <br />
        <br />
        <Link to="/AdminNavTemplate" >
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
