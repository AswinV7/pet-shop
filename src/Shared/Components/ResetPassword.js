import React, { useState } from 'react'
import { useHistory } from 'react-router'
import '../../CSS/Shared/ResetPassword.css'

const ResetPassword = ({isClose}) => {

    const [password, setPassword] = useState("")
    const [conformPassword, setConformPassword] = useState("")
    const history = useHistory()

    const forgetCall = (e) => {
        e.preventDefault()
        const data = {
            password: password,
            conformPassword: conformPassword
        }
    }

    return (
        <div className = "reset-password">
            <div className = "closebt">
                <button  onClick = {() => isClose(false)} >X</button>
            </div>
            <div className = "details-a">
                <h1>New Password</h1>
                <p>Please enter new password which is not used else where</p>
                <form className = "reset-form">
                    <label htmlFor = "password" >
                        <input type="password" name = "password" value = {password} placeholder = "New Password" onChange = {(e) => {setPassword(e.target.value)}} />
                    </label>
                    <label htmlFor = "conform-password" >
                        <input type="password" name = "conform-password" value = {conformPassword} placeholder = "Conform New Password" onChange = {(e) => {setConformPassword(e.target.value)}} />
                    </label>
                </form>
                <button onClick = {() => history.push(`/shops`)} >Change</button>
            </div>
        </div>
    )
}

export default ResetPassword
