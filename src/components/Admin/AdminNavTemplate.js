
import { Link } from 'react-router-dom'
import AdminNav from './AdminNav'
import React, { useContext, useEffect, useState } from "react";
import { CompanyContext } from '../../context/CompanyContext';
import BasicChart from '../widgets/GetChart';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';


const AdminNavTemplate = () => {
  
  
  
  return (
    <div>
      <Link to ="/">
      <button className='reset' >Logout</button>
      </Link>
        <AdminNav/>
        
        
        
    </div>
  )
}

export default AdminNavTemplate