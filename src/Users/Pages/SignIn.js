import React, { useState } from 'react'
import '../../CSS/User/SignIn.css'
import Image1 from '../../Images/profile2.png'
import Image3 from '../../Images/phone.png'
import VerifyPhone from '../../Shared/Components/VerifyPhone'

const SignIn = ({Close}) => {
    
    const [userName, setUserName] = useState("")
    const [phone, setPhone] = useState("")
    const [open, setOpen] = useState(false);

    const signInCall = (e) => 
    {
        e.preventDefault()
        const data = {
            userName: userName,
            phone: phone,
        }
        console.log(data);
    }

    return (
        <div className = "SignIn">
            { open && <VerifyPhone Close = {setOpen} />}
            <div className = "signin-page">
                <div className = "closebt">
                    <button  onClick = {() => Close(false)} >X</button>
                </div>
                <h1>SIGN IN</h1>
                <form className="signin-form" onSubmit = {signInCall}>
                    <label htmlFor = "user-name" >
                        <img src = {Image1} alt="" />
                        <input type="text" name = "user-name" value = {userName} placeholder = "User Name" onChange = {(e) => {setUserName(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "phone" >
                        <img src = {Image3} alt="" />
                        <input type="text" name = "phone" value = {phone} placeholder = "Phone" onChange = {(e) => {setPhone(e.target.value)}} />
                    </label>    
                    <button type = "submit" onClick = {() => {setOpen(true)}} > SUBMIT</button>
                </form>
                
            </div>
        </div>
    )
}

export default SignIn
