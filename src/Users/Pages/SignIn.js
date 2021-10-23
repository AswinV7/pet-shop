import React, { useState } from 'react'
import '../../CSS/User/SignIn.css'
import Header from '../../Shared/Components/Header'
import Image1 from '../../Images/profile2.png'
import Image3 from '../../Images/phone.png'
import Image4 from '../../Images/lock.png'

const SignIn = () => {
    
    const [userName, setUserName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [conformPassword, setConformPassword] = useState("")

    const signInCall = (e) => 
    {
        e.preventDefault()
        const data = {
            userName: userName,
            phone: phone,
            password: password,
            conformPassword: conformPassword
        }
        console.log(data);
    }

    return (
        <div className = "SignIn">
            <Header />
            <div className = "signin-page">
                <h2>SIGN IN</h2>
                <form className="signin-form" onSubmit = {signInCall}>
                    <label htmlFor = "user-name" >
                        <img src = {Image1} alt="" />
                        <input type="text" name = "user-name" value = {userName} placeholder = "User Name" onChange = {(e) => {setUserName(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "phone" >
                        <img src = {Image3} alt="" />
                        <input type="text" name = "phone" value = {phone} placeholder = "Phone" onChange = {(e) => {setPhone(e.target.value)}} />
                    </label>    

                    <label htmlFor = "password" >
                        <img src = {Image4} alt="" />
                        <input type="password" name = "password" value = {password} placeholder = "Password" onChange = {(e) => {setPassword(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "conform-password" >
                        <img src = {Image4} alt="" />
                        <input type="password" name = "conform-password" value = {conformPassword} placeholder = "Conform Password" onChange = {(e) => {setConformPassword(e.target.value)}} />
                    </label>
                
                    <button type = "submit" > SUBMIT</button>
                </form>
                
            </div>
        </div>
    )
}

export default SignIn
