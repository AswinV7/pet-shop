import React from 'react'
import { useState } from 'react'
import Header from '../../Shared/Components/Header'
import Image from '../../Images/profile2.png'
import Image1 from '../../Images/lock.png'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const LoginCall = (e) => {
        e.preventDefault()
    }

    return (
        <div className = "Login">
            <Header />
            <div className = "login-page">
                <h2>LOGIN</h2>
                <form className = "login-form" onSubmit = {LoginCall}>
                    <label htmlFor = "email" >
                        <img src = {Image} alt="" />
                        <input type="email" name = "email" value = {email} placeholder ="Email" onChange = {(e) => {setEmail(e.target.value)}} />
                    </label>
                    <label htmlFor = "password" >
                        <img src = {Image1} alt="" />
                        <input type="password" name = "password" value = {password} placeholder = "Password" onChange = {(e) => {setPassword(e.target.value)}} />
                    </label>
                    <div className = "forget-password">
                        <h5>FORGET PASSWORD ? </h5> 
                        <h5 className = "click-here"> CLICK HERE</h5>
                        <button type = "submit">LOGIN</button>
                    </div>
                    <div className = "create-account">
                        <h5>CREATE AN ACCOUNT ? </h5> 
                        <h5 className = "click-here"> CLICK HERE</h5>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
