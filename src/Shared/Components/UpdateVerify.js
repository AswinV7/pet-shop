import React, { useState } from 'react'
import '../../CSS/Shared/EnterOtp.css'
import { useHistory } from 'react-router'
import postData from '../../Services/postData'


const UpdateVerify = ({Close ,email ,phone}) => {

    const history = useHistory()
    const [otp, setOtp] = useState("")
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);


    const otpCall = () => {
        const data = {
            otp: otp,
            phone,
            email
        }
        postData('/shop/user-update/otp-verification', data)
        .then((result) =>{
            setError(result)
        })
    }

    return (
        <div className = "OTP">
            <div className = "closebt">
                <button  onClick = {() => Close(false)} >X</button>
            </div>
            <div className = "details-a">
                <h1>Enter OTP</h1>
                <div className = {!error ? 'error-t' : 'error'} >{error.data}</div>
                <h3>Check your phone for OTP</h3>
                <form className = "OTP-form">
                    <label htmlFor = "otp" >
                        <input type="text" name = "otp" value = {otp} placeholder = "OTP" onChange = {(e) => {setOtp(e.target.value)}} />
                    </label>
                </form>
                <button onClick = {otpCall} >Verify</button>
            </div>
        </div>
    )
}

export default UpdateVerify
