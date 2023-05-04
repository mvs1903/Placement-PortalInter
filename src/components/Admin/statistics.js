import React , {useState,useEffect, useContext}from 'react'

import { getDocs,collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { CompanyContext } from '../../context/CompanyContext';
import { Link } from 'react-router-dom';
import BasicChart from '../widgets/GetChart';
import AdminsideNavbar from './adminsidenav';


const Statistics = () => {

 const [compDetails, setCompDetails] = useState([]);
 

  const [selectedComp, setselectedComp] = useState({});
  const con=useContext(CompanyContext);
  const {getCompCountData}=con;

  const handleSelect = async (e) => {
    e.preventDefault();
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
  handleFilter();
    return () => {
      handleFilter();
    }
  },[])
  return (
    <div>
        <AdminsideNavbar/>
        <br />
        <br />
        <div className='statsNav '>
          <div className='overflow-x-scroll'>
          <h3 className='h3 '>Company wise</h3>
          <BasicChart data={getCompCountData()}/>

          </div>
        
        </div>
        <br />
        <br />
        <div className='statsNav'>
        <h3 className='h3'>Department wise</h3>
        <BasicChart data={selectedComp}/>
        <br />
        <br />
        <br />
        <br />
        <select id="dropdown" className='labelInpost' onChange={handleSelect}>
            {compDetails?.map((company) => {
              return <option value={company.id}>{company.compName}</option>;
            })}
          </select>
        </div>
        
    </div>
  )
}

export default Statistics