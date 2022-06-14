import React from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './AdminNav'

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