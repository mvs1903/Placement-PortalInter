import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SecondPage() {
  const [Dept,setDept] = useState('Information Technology');
  const[Gender,setGender]=useState('Female');
  
  const [SAPID, setSAPID] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surname, setSurname] = useState("");
  const [motherName, setMotherName] = useState("");
  const [phoneNo, setPhoneNo] = useState(0);
  const [emailID, setEmailID] = useState("");
  const [DOB, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [educationGap, seteducationGap] = useState("");
  const [tenthPercent, setTenthPercent] = useState(0);
  const [twelfthPercent, setTwelfthPercent] = useState(0);
  const [JEE, setJEE] = useState(0);
  const [CET, setCET] = useState(0);
  const [SEM1, setSEM1] = useState(0);
  const [SEM2, setSEM2] = useState(0);
  const [SEM3, setSEM3] = useState(0);
  const [SEM4, setSEM4] = useState(0);
  const [SEM5, setSEM5] = useState(0);
  const [SEM6, setSEM6] = useState(0);
  const [counter, setCounter] = useState(0);

//   const [admin, setAdmin] = useState("false");

  const navigate = useNavigate();
  // const [data,setData] = useState({
  //      "sapId":"",
  //      "firstName":"",
  // });

  // const handleData = (e) => {

  // }

  const handleSAPID = async (e) => {
    setSAPID(e.target.value);
    if (e.target.value.toString()!=""){
      console.log(e.target.value)
      const details =  await getDoc(doc(collection(db,'Details'),e.target.value.toString()))
    // // let records = details.docs.map((doc)=>(doc.data()))
    
      console.log(details.data());
      console.log(details.data()["First Name"]);
      if(details.data()!=undefined){
        setDept(details.data()["Department"]);
        setFirstName(details.data()["First Name"]);
        setMiddleName(details.data()["Father's First Name"]);
        setSurname(details.data()["Last Name"]);
        setMotherName(details.data()["Mother's First Name"]);
        setPhoneNo(details.data()["Mobile Number"]);
        setEmailID(details.data()["Email ID"]);
        setDOB(details.data()["Date of Birth"]);
        setAddress(details.data()["Address"]);
        seteducationGap(details.data()[""]);
        setTenthPercent(details.data()["Xth %"]);
        setTwelfthPercent(details.data()["XIIth %"]);
        setJEE(details.data()[""]);
        setCET(details.data()[""]);
        setSEM1(details.data()["Semester 1 CGPA"]);
        setSEM2(details.data()["Semester 2 CGPA"]);
        setSEM3(details.data()["Semester 3 CGPA"]);
        setSEM4(details.data()["Semester 4 CGPA"]);
        setSEM5(details.data()["Semester 5 CGPA"]);
        setSEM6(details.data()["Semester 6 CGPA"]);
      };
    };
    
    
    setSAPID(e.target.value);
  };
  const handleDepartment = (e) => {
    setDept(e.target.value);

  };
  
  const handleGender = (e) => {
    setGender(e.target.value);
    console.log(e.target.value)
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleMiddleName = (e) => {
    setMiddleName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleMotherName = (e) => {
    setMotherName(e.target.value);
  };

  const handlePhoneNo = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleEmailID = (e) => {
    setEmailID(e.target.value);
  };

  const handleDOB = (e) => {
    setDOB(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handlePassword =(e)=>{
    setPassword(e.target.value)
  }
  const handleEducationGap = (e) => {
    seteducationGap(e.target.value);
  };
  const handleTenthPercent = (e) => {
    setTenthPercent(e.target.value);
  };

  const handleTwelfthPercent = (e) => {
    setTwelfthPercent(e.target.value);
  };
  const handleJEE = (e) => {
    setJEE(e.target.value);
  };
  const handleCET = (e) => {
    setCET(e.target.value);
  };

  const handleSEM1 = (e) => {
    setSEM1(e.target.value);
  };

  const handleSEM2 = (e) => {
    setSEM2(e.target.value);
  };

  const handleSEM3 = (e) => {
    setSEM3(e.target.value);
  };
  const handleSEM4 = (e) => {
    setSEM4(e.target.value);
  };

  const handleSEM5 = (e) => {
    setSEM5(e.target.value);
  };

  const handleSEM6 = (e) => {
    setSEM6(e.target.value);
  };

  

  const handleClick = async (e) => {


    if((Dept === "")||(SAPID === "")||(firstName==="")||(middleName==="")||(surname==="")||(motherName==="")||(phoneNo==="")||(emailID==="")||(DOB==="")||(address==="")||(password==="")||(educationGap==="")||(tenthPercent==="")||(twelfthPercent==="")||(JEE==="")||(CET==="")||(SEM1==="")||(SEM2==="")||(SEM3==="")||(SEM4==="")||(SEM5==="")||(SEM6==="")){
      alert("Feilds cannot be empty")
    }
    else{
      try {
        const details = collection(db, "PerDetails");
        await setDoc(doc(db, "PerDetails", SAPID), {
          SAPID: Number(SAPID),
          Gender:Gender,
        Department: Dept,
        firstName: firstName,
        middleNname: middleName,
        surname: surname,
        motherName: motherName,
        phoneNo: Number(phoneNo),
        emailID: emailID,
        DOB: DOB,
        address: address,
        password : password,

        educationGap: educationGap,
        tenthPercent: Number(tenthPercent),
        twelfthPercent: Number(twelfthPercent),
        JEE: Number(JEE),
        CET: Number(CET),
        SEM1: Number(SEM1),
        SEM2: Number(SEM2),
        SEM3: Number(SEM3),
        SEM4: Number(SEM4),
        SEM5: Number(SEM5),
        SEM6: Number(SEM6),
      });
      //   });
      console.log("Input entered");
      console.log("y")
    } catch (error) {
      console.log(error.message);
    }
    
    alert("Form Submitted Successfuly");
    navigate("/SapLogin");
    }
  };


  const [inputs, setInputs] = useState([]);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const addInputMasters = () => {
    setInputs([...inputs, ""]);
  };

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const handleInputChange1 = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const handleFileUpload = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.files[0];
    setInputs(newInputs);
  };
  return (
    <>
      <br />
      <form className="fullForm" onSubmit={handleClick}>
        <h3 className="formH3">
          {" "}
          PERSONAL DETAILS <br />{" "}
        </h3>
        <label htmlFor="login" id="SAPID" className="label">
          SAP ID :
        </label>{" "}
        <br />
        <input
          type="text"
          className="labelIn"
          placeholder="SAP ID"
          required
          onChange={handleSAPID}
          value={SAPID}
          maxLength="11"
          minLength="11"
        />
        <br />
        <label htmlFor="Dept" id="Dept" className="label">
          Department :
        </label>
        <br />
        <div>
      
      <select id="Dept" className="labelIn" value={Dept} onChange={handleDepartment}>
        <option value="Information Technology">Information Technology</option>
        <option value="Computer Engineering">Computer Engineering</option>
        <option value="Computer Science and Engineering (Data Science)">Computer Science and Engineering (Data Science)</option>
        <option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
        <option value="Artificial Intelligence (AI) and Data Science">Artificial Intelligence (AI) and Data Science</option>
        <option value="Computer Science and Engineering (IOT and BlockChain)">Computer Science and Engineering (IOT and Block Chain Technology)</option>
        <option value="Chemical Engineering">Chemical Engineering</option>
        <option value="Electronics Engineering">Electronics Engineering</option>
        <option value="Production Engineering">Production Engineering</option>
        <option value="Biomedical Engineering">Biomedical Engineering</option>
        <option value="Mechanical Engineering">Mechanical Engineering</option>
        <option value="Electronics and Telecommunication Engg">Electronics and Telecommunication Engg</option>
      </select>
    </div>
        <br />
        <label htmlFor="Gender" id="Gender" className="label">
          Gender :{" "}
        </label>{" "}
        <div className="row row-cols-auto">
        <div className="col">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Female" onClick={handleGender}/>
  <label className="form-check-label" htmlFor ="flexRadioDefault1">
    Female
  </label>
</div>
<div className="col">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Male" onClick={handleGender}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Male
  </label>
</div>
<div className="col">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="Other" onClick={handleGender}/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    Other
  </label>
</div>

        </div>
        
        <br />
        <label htmlFor="Firstname" id="Firstname" className="label">
          First Name :{" "}
        </label>{" "}
        <br />
        <input
          type="text"
          placeholder="First Name"
          className="labelIn"
          required
        
          onChange={handleFirstName}
          value={firstName}
        />
        <br />
        <label htmlFor="Middlename" id="Middlename" className="label">
          Middle Name :{" "}
        </label>{" "}
        <br />
        <input
          type="text"
          placeholder="Middle Name"
          className="labelIn"
          required
          onChange={handleMiddleName}
          value={middleName}
        />
        <br />
        <label htmlFor="Surname" id="Surname" className="label">
          Surname :{" "}
        </label>{" "}
        <br />
        <input
          type="text"
          placeholder="Surname"
          className="labelIn"
          required
          onChange={handleSurname}
          value={surname}
        />
        <br />
        <label htmlFor="Mothername" id="Mothername" className="label">
          Mother's Name :{" "}
        </label>{" "}
        <br />
        <input
          type="text"
          placeholder="Mother's Name"
          className="labelIn"
          required
          onChange={handleMotherName}
          value={motherName}
        />
        <br />
        <label htmlFor="phoneNo" id="phoneNo" className="label">
          Phone No.:{" "}
        </label>{" "}
        <br />
        <input
          type="text"
          placeholder="Phone No."
          className="labelIn"
          required
          onChange={handlePhoneNo}
          value={phoneNo}
          minLength="10"
          maxLength="10"
        />
        <br />
        <label htmlFor="emailId" id="emailId" className="label">
          Email ID :{" "}
        </label>{" "}
        <br />
        <input
          type="email"
          placeholder="Email ID"
          className="labelIn"
          required
          onChange={handleEmailID}
          value={emailID}
          // pattern="abc@email.com"
        />{" "}
        <br />
        <label htmlFor="DOB" id="DOB" className="label">
          DOB :
        </label>{" "}
        <br />
        <input
          type="date"
          placeholder="DOB"
          className="labelIn"
          required
          onChange={handleDOB}
          value={DOB}
        />
        <br />
        <label htmlFor="address" id="address" className="label">
          Address :{" "}
        </label>
        <br />
        <textarea
          cols="30"
          rows="10"
          className="labelIn"
          required
          placeholder="Enter your Address here"
          onChange={handleAddress}
          value={address}
        ></textarea>
        <br />
        <label htmlFor="DOB" id="DOB" className="label">
          Create Password :
        </label>{" "}
        <br />
        <input
          type="password"
          placeholder="Create Password"
          className="labelIn"
          required
          onChange={handlePassword}
          value={password}
        />
        <br/>
        <br />

        <label htmlFor="DOB" id="DOB" className="label">
          Confirm Password :
        </label>{" "}
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          className="labelIn"
          required
          onChange={handlePassword}
          value={password}
        />
        <br />
        <h3 className="formH3">
          EDUCATION DETAILS<br />{" "}
        </h3>
        <label htmlFor="educationGap" id="educationGap" className="label">
          Education Gap :{" "}
        </label>{" "}
        <br />
        <input
          type="text"
          placeholder="Education Gap?"
          className="labelIn"
          required
          onChange={handleEducationGap}
          value={educationGap}
        />
        <br />
        <label htmlFor="10th" id="10thpercentage" className="label">
          10th percentage :{" "}
        </label>{" "}
        <br />
        <input
          type="number"
          placeholder="10th Percentage"
          className="labelIn"
          required
          onChange={handleTenthPercent}
          value={tenthPercent}
        />
        <br />
        <label htmlFor="12th" id="12thpercentage" className="label">
          12th percentage :{" "}
        </label>{" "}
        <br />
        <input
          type="number"
          placeholder="12th Percentage"
          className="labelIn"
          required
          onChange={handleTwelfthPercent}
          value={twelfthPercent}
        />
        <br />
        <label htmlFor="JEE" id="JEEPercentile" className="label">
          JEE percentile :{" "}
        </label>{" "}
        <br />
        <input
          type="number"
          placeholder="JEE Percentile"
          className="labelIn"
          required
          onChange={handleJEE}
          value={JEE}
        />
        <br />
        <label htmlFor="CET" id="CETPercentile" className="label">
          CET percentile :{" "}
        </label>{" "}
        <br />
        <input
          type="number"
          placeholder="CET Percentile"
          className="labelIn"
          required
          onChange={handleCET}
          value={CET}
        />
        <br />
        <label htmlFor="SEM1" id="SEM1" className="label">
          SEM1 :{" "}
        </label>{" "}
        <br />
        <input
          type="number"
          placeholder="SEM1 Pointer"
          className="labelIn"
          required
          onChange={handleSEM1}
          value={SEM1}
        />
        <br />
        <label htmlFor="SEM2" id="SEM2" className="label">
          SEM2 :{" "}
        </label>{" "}
        <br />
        <input
          type="number"
          placeholder="SEM2 Pointer"
          className="labelIn"
          onChange={handleSEM2}
          value={SEM2}
        />
        <br />
        <label htmlFor="SEM3" id="SEM3" className="label">
          SEM3 :{" "}
        </label>{" "}
        <br />
        <input
          type="number"
          placeholder="SEM3 Pointer"
          className="labelIn"
          required
          onChange={handleSEM3}
          value={SEM3}
        />
        <br />
        <label htmlFor="SEM4" id="SEM4" className="label">
          SEM4 :{" "}
        </label>{" "}
        <br />
        <input
          type="number"
          placeholder="SEM4 Pointer"
          className="labelIn"
          required
          onChange={handleSEM4}
          value={SEM4}
        />
        <br />
        <label htmlFor="SEM5" id="SEM5" className="label">
          SEM5 :{" "}
        </label>{" "}
        <br />
        <input
          type="number"
          placeholder="SEM5 Pointer"
          className="labelIn"
          required
          onChange={handleSEM5}
          value={SEM5}
        />
        <br />
        <label htmlFor="SEM6" id="SEM6" className="label">
          SEM6 :{" "}
        </label>{" "}
        <br />
        <input
          type="number"
          placeholder="SEM6 Pointer"
          className="labelIn"
          required
          onChange={handleSEM6}
          value={SEM6}
        />
        <br />

        <Link to="/SapLogin" >
        <button id="submitbtn" className="login" onClick={handleClick} >
          Submit
        </button>
        </Link>
      </form>
    </>
  );
}
