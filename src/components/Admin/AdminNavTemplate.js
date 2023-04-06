
import { Link } from 'react-router-dom'
import AdminNav from './AdminNav'
import React, { useContext, useEffect, useState } from "react";
import { CompanyContext } from '../../context/CompanyContext';
import BasicChart from '../widgets/GetChart';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';


const AdminNavTemplate = () => {
  const [compDetails, setCompDetails] = useState([]);

  const [selectedComp, setselectedComp] = useState({});
  const con=useContext(CompanyContext);
  const {getCompCountData}=con;
  const handleSelect = async (e) => {
    console.log(e.target.value);
    let snap=await getDocs(collection(db,"CompDetails",e.target.value,"Interested"));
    let ans={}
    for(let i=0;i<snap.docs.length;i++){
      ans={...ans,...{[snap.docs[i].data().Department]:ans[snap.docs[i].data().Department]==null?1:ans[snap.docs[i].data().Department]+1}}
    }
    setselectedComp(ans);

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

  useEffect(() => {
    
  
    return () => {
      handleFilter();
    }
  },[])
  
  
  return (
    <div>
      <Link to ="/">
      <button className='reset' >Logout</button>
      </Link>
        <AdminNav/>
        <BasicChart data={getCompCountData()}/>
        <BasicChart data={selectedComp}/>
        <br />
        <br />
        <br />
        <br />
        <select id="dropdown" onChange={handleSelect}>
            {compDetails?.map((company) => {
              return <option value={company.id}>{company.compName}</option>;
            })}
          </select>
        
        
    </div>
  )
}

export default AdminNavTemplate