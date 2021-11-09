import React, { useState } from 'react'
import '../../CSS/Shared/EnterOtp.css'

const VerifyPhone = ({Close}) => {

    const [otp, setOtp] = useState("")

    const otpCall = (e) => {
        e.preventDefault()
        const data = {
            otp: otp
        }
    }

    return (
        <div className = "OTP">
            <div className = "closebt">
                <button  onClick = {() => Close(false)} >X</button>
            </div>
            <div className = "details-a">
                <h1>Enter OTP</h1>
                <h3>Check your phone for OTP</h3>
                <form className = "OTP-form">
                    <label htmlFor = "otp" >
                        <input type="text" name = "otp" value = {otp} placeholder = "OTP" onChange = {(e) => {setOtp(e.target.value)}} />
                    </label>
                </form>
                <button>Verify</button>
            </div>
        </div>
    )
}

export default VerifyPhone
