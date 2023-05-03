import React , {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useUserAuth } from '../userAuthContext'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { async } from '@firebase/util'
import { send_email } from '../../utilities/email_sender'
import { useAuth } from '../../context/authContextk'

const PhoneSignUp = (props) => {

    const navigate = useNavigate()
    const auth=useAuth();
    const [number, setNumber] = useState("")
    const [error, seterror] = useState("")
    const [otp, setOtp] = useState("")

    const [confirmObj, setConfirmObj] = useState("")
    const [flag, setFlag] = useState(false)

    const {setUpRecaptcha} = useUserAuth()


    const handleCancel = () =>{
        return(
            navigate("/")
        )
    }
// ----------yaha par dynamically email change hoga----------
    const verifyOtp= async (e) =>{
        e.preventDefault()
        console.log(otp)
        if(otp===""|| otp===null)return
        try {
            await confirmObj.confirm(otp)
            alert("You have been succesfully registered!")
            send_email("muskaansharma81349@gmail.com","Successfully regestered!",`You have successfully registered!`);

            navigate("/PopUp")

            // Send data to the backend via POST
    fetch('http://localhost:5100/api/email', {  // Enter your IP address here

    method: 'POST', 
    mode: 'cors', 
    body: JSON.stringify({
        "email":"mvs81349@gmail.com",
        "sub":"Hello",
        "text":"Thank you ;)"
      }) // body data type must match "Content-Type" header

    });
        }
        catch(err){
            seterror(err.message)
        }
    };

    useEffect(() => {
        let x="+91"+auth.userDetails.phoneNo.toString()
      setNumber(x)
      getOtp(x)
    }, [])
    

    const getOtp = async (num) =>{
        // e.preventDefault()
        console.log(num)
        if(num=== "" || num === undefined )
        return seterror("Please enter a valid number")
        try {
            const response = await setUpRecaptcha(num)
            console.log(response)
            setConfirmObj(response)
            setFlag(true)
        } catch (err) {
            seterror(err.message)
        }
        console.log(num)
    };
    return (
    <>

    <div className="card">
        {error && alert(error)}
        <form onSubmit={getOtp} style={{display :!flag ? "block" : "none"}}>
        <h3 id ="phoneVeri" >Phone Verification :</h3>
            <PhoneInput
            defaultCountry='IN'
            value={number}
            onChange={setNumber}
            placeholder ="Enter Phone Number"
            id="enterNumber"
            />


      
        <div id="recaptcha-container" />
        <div>
        <Link to="/"/>
        {/* <button type="submit" className='login'>Send OTP</button> */}
        </div>
        </form>


        <form onSubmit={verifyOtp} style={{display :flag ? "block" : "none"}}  >
        <div>
            <h3 className="phoneVeri">Enter OTP : </h3>
            <Link to="/"/>
            <input type="text" className='labelIn' onChange={(e)=>{setOtp(e.target.value)
    seterror("")}}/> <br />
            <button className='reset' onClick={handleCancel} >Cancel</button> 
            <button type="submit" className='login' >Verify OTP</button>
        </div>
        </form>
    </div>
    </>
);
};

export default PhoneSignUp