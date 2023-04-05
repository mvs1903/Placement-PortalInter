import { doc, updateDoc , getDocs ,collection,getDoc,setDoc } from "firebase/firestore";
import React, {useState,useEffect} from "react";
import { Link, useNavigate ,useParams} from "react-router-dom";
// import {compName} from "../Admin/Notification";
import { db } from "../firebaseConfig";
import { useUserAuth } from "../userAuthContext";
export default function PopUpCompany() {

  const { id } = useParams();

  const [notificaton, setNotification] = useState([]);
  const [details,setDetails]=useState({});

    const [enteredSAP, setEnteredSAP] = useState(0)
  const handleSubmit = async (e) => {
    console.log(e);
    const details = doc(db, "CompDetails", e, "Interested", enteredSAP);
    const dt = await getDoc(doc(db, "PerDetails", enteredSAP));
    const detail = await setDoc(details, dt.data());
    console.log(detail);
    console.log(details);

    navigate("/Otp");
    
    // e.preventDefault()
    // db.connection("Compny")
    // const Compnydoc = doc(db,"Compny","TCS")
    // const newRef = firebase.firestore("Details/"+"6003200176")
    // await  updateDoc(Compnydoc,newRef)
    // alert("You have Successfully Registered !");

  };
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleNotInterested = async () => {
    try {
      // await logOut();

    navigate("/PopUp");
    } catch (error) {
      console.log(error.message);
    }
    alert("Your response have been succesfully recorded!")
    // navigate("/");
  };
  const handleLogout = ()=>{
    navigate("/")
  }

  const handleClick = async () => {
    // alert("You have successfully registered");

    // setDoc(doc(db,`${details['compName']}`,))
    navigate("/Otp");

    
  };

  useEffect(() => {

    
    const getCompDetails = async() =>{

        
      let details1 =  await (await getDoc(doc(db,'CompDetails',id))).data()
      // let records = details.docs.map((doc)=>({...doc.data(),id:doc.id}))
      setDetails(details1);


      // setNotification(records)
      console.log(details)

    }
    getCompDetails()
  }, [])
  return (
    <>
      <div>
        <button className="reset" onClick={handleLogout}>
          Log out
        </button>
        <form onSubmit={()=>{}}>
          {/* <Notification/> */}
          <h3 id="phoneVeri">
            {" "}
            {details['compName']} is coming for interview do you want to Register ?
            
          </h3>
          <br />
          <input type="number" className="labelIn" value={enteredSAP} onChange={(val)=>{
            // console.log(val.target.value);
            setEnteredSAP(val.target.value)}}/> <br />
          <input type={'button'}  className="login" onClick={()=>handleSubmit(id)} value={"Interested"} />
          <button className="reset" onClick={handleNotInterested} >
            Not Interested
          </button>
        </form>
      </div>
    </>
  );
}
