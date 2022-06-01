import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminLogin() {
  return (

      <div className="fullForm">

        <label htmlFor="adminEmail" className='label' >Email :</label> <br />
        <input type="email" className='labelIn' /> <br />
        <label htmlFor="adminPass" className='label'>Password :</label> <br />
        <input type="password" className='labelIn'/> <br />
        <Link to="/">
        <button className="reset">Cancel</button>
        </Link>
        <Link to="/admin">
        <button className='login'>Login</button> 
        </Link>
        </div> 
  )
}
