import React ,{useState,useEffect}from "react";
import StudentNavbar from "./Studentsidenav";
import { db } from "../firebaseConfig";
import { collection,getDocs } from "firebase/firestore";
import { UserContext } from "../../context/UserContex";
const SelectedCompanies = () => {
    const [compDetails, setCompDetails] = useState([]);
    const [notification, setNotification] = useState([]);
    const con =UserContext(UserContext);
    const {UserInterestedDetails,AddInterested}=con;


    useEffect(() => {
        const getCompDetails = async () => {
        
          const details = await getDocs(collection(db, "CompDetails"));
        // const details = doc(db, "PerDetails", enteredSAP.toString(), "Interested",);
          let records = details.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          // UserInterestedDetails.forEach(e => {delete records[i]});
          let record1=[];
          for (let i=0;i<records.length;i++){
            if (!UserInterestedDetails.includes(records[i].id)){
    
              record1.push(records[i]);
    
            }
          }
          console.log(UserInterestedDetails);
          setNotification(record1);
          console.log(record1);
    
          setCompDetails(record1);
        };
        getCompDetails();
        console.log("first");
        console.log(compDetails);
      }, []);
  return (
    <div>
      <StudentNavbar />
      {compDetails?.map((company) => {
        return (
          <div className="formNoti">
            {/* <Notification/> */}
            <h3 id="phoneVeri">
              {" "}
              {company.compName} is coming for interview on {company.visitDate}{" "}
              at {company.reportTime} do you want to Register ?
            </h3>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default SelectedCompanies;
