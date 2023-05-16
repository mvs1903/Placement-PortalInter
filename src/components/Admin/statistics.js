import React , {useState,useEffect, useContext}from 'react'

import { getDocs,collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { CompanyContext } from '../../context/CompanyContext';
import { Link } from 'react-router-dom';
import BasicChart from '../widgets/GetChart';
import AdminsideNavbar from './adminsidenav';
import { useCharts } from '../../context/ChartContext';


const Statistics = () => {
  const {CompanyDetails,InterestedStudentsMap}=useCharts()

 const [compDetails, setCompDetails] = useState([]);
 

  const [selectedComp, setselectedComp] = useState({});
  const con=useContext(CompanyContext);
  const {getCompCountData}=con;


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

///This will be triggered if CompanyDetails changes////////////////////////////////////////////////////////////////////////////////////////////
const [CountOfStudentInterestedInCompanies, setCountOfStudentInterestedInCompanies] = useState({})
const [CountOfStudentsBasedOnDepartment, setCountOfStudentsBasedOnDepartment] = useState({})
const [PercentOfCGPA, setPercentOfCGPA] = useState({})
useEffect(() => {
  let studCount={}
  for(let compId in CompanyDetails){
    studCount[CompanyDetails[compId]["compName"]]=(InterestedStudentsMap[compId]??[]).length;
  }
  setCountOfStudentInterestedInCompanies(studCount);
  _selectedCompany(Object.keys(CompanyDetails)[0])

}, [CompanyDetails,InterestedStudentsMap])


let _selectedCompany=(compId)=>{

  let _CountOfStudentsBasedOnDepartment={}
  let _PercentOfCGPA={}
  if(InterestedStudentsMap[compId]==undefined){
    return;
  }
  (InterestedStudentsMap[compId]).forEach((e)=>{
    if(_CountOfStudentsBasedOnDepartment[e["Department"]]==undefined){
      _CountOfStudentsBasedOnDepartment[e["Department"]]=0;
    }
    _CountOfStudentsBasedOnDepartment[e["Department"]]+=1;
    let avg=(e["SEM1"]??0)+(e["SEM2"]??0)+(e["SEM3"]??0)+(e["SEM4"]??0)+(e["SEM5"]??0)+(e["SEM6"]??0);
    avg=avg/6;
    if(avg>=9){
      if(_PercentOfCGPA['Greater or Equalto 9']==undefined){
        _PercentOfCGPA['Greater or Equalto 9']=0;
      }
      _PercentOfCGPA['Greater or Equalto 9']+=1;
    }else if(avg>=8){
      if(_PercentOfCGPA['8-9']==undefined){
        _PercentOfCGPA['8-9']=0;
      }
      _PercentOfCGPA['8-9']+=1;
    }else if(avg>=7){
      if(_PercentOfCGPA['7-8']==undefined){
        _PercentOfCGPA['7-8']=0;
      }
      _PercentOfCGPA['7-8']+=1;
    }else {
      if(_PercentOfCGPA['Less than 7']==undefined){
        _PercentOfCGPA['Less than 7']=0;
      }
      _PercentOfCGPA['Less than 7']+=1;
    }


  }
  )
  
  console.log(_CountOfStudentsBasedOnDepartment)
  setPercentOfCGPA(_PercentOfCGPA)
  setCountOfStudentsBasedOnDepartment( _CountOfStudentsBasedOnDepartment)


}


const handleSelect = async (e) => {
  e.preventDefault();
  console.log(e.target.value);
  _selectedCompany(e.target.value);
 
};




  return (
    <div>
        <AdminsideNavbar/>
        <br />
       <div className='col-11 m-3'>
        
       <BasicChart data={CountOfStudentInterestedInCompanies} label="Company Wise Distribution"/>
       </div>
       <br />
        <div className='m-3' >

        <h3 className='h3'>Department wise</h3>
        <select id="dropdown" className='labelInpost' onChange={handleSelect}>
            {compDetails?.map((company) => {
              return <option value={company.id}>{company.compName}</option>;
            })}
          </select>
        </div>
        <div className='row justify-items-end align-items-end'>
          
       <div className='col-5 mx-4'>
       <BasicChart data={CountOfStudentsBasedOnDepartment} type="doughnut" label="Student Count"/>
       </div>
       <div className='col-5 mx-4'>
       <BasicChart data={PercentOfCGPA} label="CGPA Distribution"/>
       </div>
        
        </div>
        
    </div>
  )
}

export default Statistics