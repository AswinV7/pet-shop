import React, { useState } from 'react'
import '../CSS/Shared/ForgetPassword.css'
import EnterOtp from './Components/EnterOtp'
import postData from '../Services/postData'

const ForgetPassword = ({isClose}) => {

    const [phone, setPhone] = useState("")
    const [open, setOpen] = useState(false);

    const forgetCall = (e) => {
        e.preventDefault()
        const data = {
            phone: phone
        }
        console.log(data);
        postData('/forgotpassword', data)
    }

    return (
        <div className = "ForgetPassword">
            { open && <EnterOtp Close = {setOpen} />}
            <div className = "forget-container">
                <div className = "closebt">
                    <button  onClick = {() => isClose(false)} >X</button>
                </div>
                <div className = "details-a">
                    <h1>Forget Password</h1>
                    <h3>Enter your phone number</h3>
                    <form className = "forget-form" onSubmit = {forgetCall} >
                        <label htmlFor = "phone" >
                            <input type="text" name = "phone" value = {phone} placeholder = "Phone Number" onChange = {(e) => {setPhone(e.target.value)}} />
                        </label>
                    </form>
                    <button type = "submit"  >Continue</button>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
