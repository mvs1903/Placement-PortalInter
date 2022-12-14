import React , {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useUserAuth } from '../userAuthContext'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { async } from '@firebase/util'

const PhoneSignUp = () => {

    const navigate = useNavigate()
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

    const verifyOtp= async (e) =>{
        e.preventDefault()
        console.log(otp)
        if(otp===""|| otp===null)return
        try {
            await confirmObj.confirm(otp)
            navigate("/secondPage")
        }
        catch(err){
            seterror(err.message)
        }
    };

    const getOtp = async (e) =>{
        e.preventDefault()
        if(number=== "" || number === undefined )
        return seterror("Please enter a valid number")
        try {
            const response = await setUpRecaptcha(number)
            console.log(response)
            setConfirmObj(response)
            setFlag(true)
        } catch (err) {
            seterror(err.message)
        }
        console.log(number)
    };
  return (
    <>

    <div className="fullForm">
        {error && alert(error)}
        <form onSubmit={getOtp} style={{display :!flag ? "block" : "none"}}>
        <h3 id ="phoneVeri" >Phone Verification :</h3>
            <PhoneInput
            defaultCountry='IND'
            value={number}
            onChange={setNumber}
            placeholder ="Enter Phone Number"
            id="enterNumber"
            />


        <div id="recaptcha-container" />
        <div>
        <Link to="/"/>
        <button type="submit" className='login'>Send OTP</button>
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