import React, { useState, useEffect } from "react";
import { ref, onValue, child } from "firebase/database";
// import StartFirebase from './firebaseConfig'
import { Table } from "react-bootstrap";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { JsonToCsv, useJsonToCsv } from "react-json-csv";
import AdminsideNavbar from "./adminsidenav";
import enteredSAP from "../Student/SapLogin";
import AdminNav from "./AdminNav";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";

const filename = "Csv-file";

const fields = {
  SAPID: "SAPID",
  firstName: "First_Name",
  middleNname: "Middle_Name",
  surname: "Surname",
  motherName: "Mother_Name",
  phoneNo: "Phone_Number",
  emailID: "EmailID",
  DOB: "DOB",
  address: "Address",
  educationGap: "Education_Gap",
  tenthPercent: "Tenth_Percentage",
  twelfthPercent: "Twelfth_Percentage",
  JEE: "JEE",
  CET: "CET",
  SEM1: "SEM1",
  SEM2: "SEM2",
  SEM3: "SEM3",
  SEM4: "SEM4",
  SEM5: "SEM5",
  SEM6: "SEM6",
};

// const compFeilds =
// {

//   compName : 'compName',

// }

// const db = StartFirebase()

export default function Admin() {


  const [compDetails, setCompDetails] = useState([]);

  const handleSelect = async (e) => {
    console.log(e.target.value);

    const dt = await getDocs(collection(db,"CompDetails",e.target.value,"Interested"))
    let filteredData = dt.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
    console.log(filteredData)

    setTableData(filteredData);

  };
  const handleFilter = async () => {
    const compDet = await getDocs(collection(db, "CompDetails"));
    // let compRecord = compDet.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
    let compRecord = compDet.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
    console.log(compRecord);
    // const name = compRecord.where(compName==="TCS")
    // console.log(name)
    setCompDetails(compRecord);
  };
  const [tableData, setTableData] = useState([]);
  const { saveAsCsv } = useJsonToCsv();
  const [selectedSapId, setselectedSapId] = useState(false);
  const [selectedFirstName, setSelectedFirstName] = useState(false);
  const [selectedMiddleName, setSelectedMiddleName] = useState(false);
  const [selectedSurname, setSelectedSurname] = useState(false);
  const [selectedMotherName, setSelectedMotherName] = useState(false);
  const [selectedPhoneNo, setSelectedPhoneNo] = useState(false);
  const [selectedEmailId, setSelectedEmailId] = useState(false);
  const [selectedDOB, setSelectedDOB] = useState(false);
  const [selectedAddress, setselectedAddress] = useState(false);
  const [selectededucationGap, setSelectededucationGap] = useState(false);
  const [selectedTenthPercent, setSelectedTenthPercent] = useState(false);
  const [selectedTwelfthPercent, setSelectedTwelfthPercent] = useState(false);
  const [selectedJEE, setSelectedJEE] = useState(false);
  const [selectedCET, setSelectedCET] = useState(false);
  const [selectedSEM1, setSelectedSEM1] = useState(false);
  const [selectedSEM2, setSelectedSEM2] = useState(false);
  const [selectedSEM3, setSelectedSEM3] = useState(false);
  const [selectedSEM4, setSelectedSEM4] = useState(false);
  const [selectedSEM5, setSelectedSEM5] = useState(false);
  const [selectedSEM6, setSelectedSEM6] = useState(false);

  const handleExcel = () => {
    let newObj = {};
    let fieldsKeyArr = Object.keys(fields);

    fieldsKeyArr.forEach((val, index) => {
      if (index === 0 && selectedSapId) {
        newObj["SAPID"] = "SAP_ID";
      } else if (index === 1 && selectedFirstName) {
        newObj["firstName"] = "First_Name";
      } else if (index === 2 && selectedMiddleName) {
        newObj["middleNname"] = "Middle_Name";
      } else if (index === 3 && selectedSurname) {
        newObj["surname"] = "Surname";
      } else if (index === 4 && selectedMotherName) {
        newObj["motherName"] = "Mother_Name";
      } else if (index === 5 && selectedPhoneNo) {
        newObj["phoneNo"] = "Phone_No";
      } else if (index === 6 && selectedEmailId) {
        newObj["emailID"] = "Email_ID";
      } else if (index === 7 && selectedDOB) {
        newObj["DOB"] = "DOB";
      } else if (index === 8 && selectedAddress) {
        newObj["address"] = "Address";
      } else if (index === 9 && selectededucationGap) {
        newObj["educationGap"] = "Education_Gap";
      } else if (index === 10 && selectedTenthPercent) {
        newObj["tenthPercent"] = "Tenth_Precent";
      } else if (index === 11 && selectedTwelfthPercent) {
        newObj["twelfthPercent"] = "Twelfth_Percent";
      } else if (index === 12 && selectedJEE) {
        newObj["JEE"] = "JEE";
      } else if (index === 13 && selectedCET) {
        newObj["CET"] = "CET";
      } else if (index === 14 && selectedSEM1) {
        newObj["SEM1"] = "SEM1";
      } else if (index === 15 && selectedSEM2) {
        newObj["SEM2"] = "SEM2";
      } else if (index === 16 && selectedSEM3) {
        newObj["SEM3"] = "SEM3";
      } else if (index === 17 && selectedSEM4) {
        newObj["SEM4"] = "SEM4";
      } else if (index === 18 && selectedSEM5) {
        newObj["SEM5"] = "SEM5";
      } else if (index === 19 && selectedSEM6) {
        newObj["SEM6"] = "SEM6";
      }
    });

    console.table(newObj);

    // newObj = {firstName : 'First_Name'}

    let finaldata = tableData.map((obj) => {
      let obj1 = { ...obj };
      for (let item in obj1) {
        if (!newObj[item]) {
          delete obj1[item];
        }
      }
      return obj1;
    });

    console.log("Final data", finaldata);

    console.log("this is called");

    // console.log(typeof newObj);

    saveAsCsv({ data: finaldata, fields, filename });
  };

  useEffect(() => {

    
    const getPersonalDetails = async() =>{
        
      const details =  await getDocs(collection(db,'PerDetails'))
      let records = details.docs.map((doc)=>({...doc.data(),id:enteredSAP}))
      setTableData(records);   

      // const details =  await getDocs(collection(db,'Company'))
      // let arr = []
      // let records = details.docs.map((doc)=>({...doc.data(),id:'TCS'}))
      // for(let i =0;i<records[0].Students.length;i++){
      //   var x = await (await getDoc(records[0].Students[i])).data()
      //   console.log(x)
      //   arr.push(x)
      // }

      // setTableData(arr);
      // console.log(arr)
    };
    getPersonalDetails();
    handleFilter();
  }, []);

  return (
    <>
      {/* <div className="xy">
        <input type="text" />
      </div> */}
      <AdminsideNavbar/>
      <br />
      <br />
      <br />
      <div>
          {/* <input  id="dropdown-cgpa" placeholder="Enter CGPA for Filtering"/> */}
          <select id="dropdown" onChange={handleSelect}>
            {compDetails?.map((company) => {
              return <option value={company.id}>{company.compName}</option>;
            })}
          </select>
        </div>
      <div className="fullForm ">
      <div >
        
        <div>
        <Table>
          <thead >
            <tr>
              <th>#</th>
              <th>
                SAPID
                <input
                  type="checkbox"
                  value="SAPID"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setselectedSapId(e.target.checked);
                  }}
                />
              </th>
              <th>
                First Name
                <input
                  type="checkbox"
                  value="firstName"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedFirstName(e.target.checked);
                  }}
                />
              </th>
              <th>
                Middle Name
                <input
                  type="checkbox"
                  value="middleName"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedMiddleName(e.target.checked);
                  }}
                />
              </th>
              <th>
                Surname
                <input
                  type="checkbox"
                  value="surname"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedSurname(e.target.checked);
                  }}
                />
              </th>
              <th>
                Mother Name
                <input
                  type="checkbox"
                  value="motherName"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedMotherName(e.target.checked);
                  }}
                />
              </th>
              <th>
                Phone Number
                <input
                  type="checkbox"
                  value="phoneNo"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedPhoneNo(e.target.checked);
                  }}
                />
              </th>
              <th>
                EmailID
                <input
                  type="checkbox"
                  value="emailID"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedEmailId(e.target.checked);
                  }}
                />
              </th>
              <th>
                DOB
                <input
                  type="checkbox"
                  value="DOB"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedDOB(e.target.checked);
                  }}
                />
              </th>
              <th>
                Address
                <input
                  type="checkbox"
                  value="address"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setselectedAddress(e.target.checked);
                  }}
                />
              </th>
              <th>
                Education Gap
                <input
                  type="checkbox"
                  value="educationGap"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectededucationGap(e.target.checked);
                  }}
                />
              </th>
              <th>
                Tenth Percentage
                <input
                  type="checkbox"
                  value="tenthPercent"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedTenthPercent(e.target.checked);
                  }}
                />
              </th>
              <th>
                Twelfth Percentage
                <input
                  type="checkbox"
                  value="twelfthPercent"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedTwelfthPercent(e.target.checked);
                  }}
                />
              </th>
              <th>
                JEE
                <input
                  type="checkbox"
                  value="JEE"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedJEE(e.target.checked);
                  }}
                />
              </th>
              <th>
                CET
                <input
                  type="checkbox"
                  value="CET"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedCET(e.target.checked);
                  }}
                />
              </th>
              <th>
                SEM1
                <input
                  type="checkbox"
                  value="SEM1"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedSEM1(e.target.checked);
                  }}
                />
              </th>
              <th>
                SEM2
                <input
                  type="checkbox"
                  value="SEM2"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedSEM2(e.target.checked);
                  }}
                />
              </th>
              <th>
                SEM3
                <input
                  type="checkbox"
                  value="SEM3"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedSEM3(e.target.checked);
                  }}
                />
              </th>
              <th>
                SEM4
                <input
                  type="checkbox"
                  value="SEM4"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedSEM4(e.target.checked);
                  }}
                />
              </th>
              <th>
                SEM5
                <input
                  type="checkbox"
                  value="SEM5"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedSEM5(e.target.checked);
                  }}
                />
              </th>
              <th>
                SEM6
                <input
                  type="checkbox"
                  value="SEM6"
                  onChange={(e) => {
                    console.log("Targe value", e.target.value);
                    console.log("Targe checked", e.target.checked);
                    setSelectedSEM6(e.target.checked);
                  }}
                />
              </th>
            </tr>
          </thead>

          

          <tbody>
            {tableData.map((row, index) => {
              {
                console.log(row);
              }
              return (
                <tr>
                  <td>{index}</td>
                  <td>{row.SAPID}</td>
                  <td>{row.firstName}</td>
                  <td>{row.middleNname}</td>
                  <td>{row.surname}</td>
                  <td>{row.motherName}</td>
                  <td>{row.phoneNo}</td>
                  <td>{row.emailID}</td>
                  <td>{row.DOB}</td>
                  <td>{row.address}</td>

                  <td>{row.educationGap}</td>
                  <td>{row.tenthPercent}</td>
                  <td>{row.twelfthPercent}</td>
                  <td>{row.JEE}</td>
                  <td>{row.CET}</td>
                  <td>{row.SEM1}</td>
                  <td>{row.SEM2}</td>
                  <td>{row.SEM3}</td>
                  <td>{row.SEM4}</td>
                  <td>{row.SEM5}</td>
                  <td>{row.SEM6}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        </div>
        
        <button className="login" onClick={handleExcel}>
          Create Excel Sheet
        </button>
      </div>

      </div>
      
    </>
  );
}
