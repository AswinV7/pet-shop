import React, { useState } from 'react'
import '../../CSS/User/SignIn.css'
import Image1 from '../../Images/profile2.png'
import Image3 from '../../Images/phone.png'
import VerifyPhone from '../../Shared/Components/VerifyPhone'
import postData from '../../Services/postData'
import Validation from '../../Shared/Components/Validation'

const SignIn = ({Close , Sname ,pid, Pname , Pbreed , Pprice}) => {
    
    const [values, setValues] = useState({
        userName: "", 
        phone: "", 
    })
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState({});
    let isValid = true

    if((values.userName || values.phone ) == ""){
        isValid = false
    }

    const signInCall = (e) => 
    {
        e.preventDefault()
        setErrors(Validation(values))
        const data = {
            userName: values.userName,
            phone: values.phone,
        }
        if(isValid === true)
            postData('/placeorder', data)
            .then((result) =>{
                if(result.status)
                    setOpen(true)
        })
    }

    const handleChange = (e) =>{
        setValues({
            ...values,[e.target.name]: e.target.value,
        });
    }

    return (
        <div className = "SignIn">
            { open && <VerifyPhone Close = {setOpen} Sname = {Sname} pid = {pid} Pname = {Pname} Pbreed = {Pbreed} Pprice= {Pprice} userName = {values.userName} phone = {values.phone} />}
            <div className = "signin-page">
                <div className = "closebt">
                    <button  onClick = {() => Close(false)} >X</button>
                </div>
                <h1>SIGN IN</h1>
                <form className="signin-form">
                    <label htmlFor = "user-name" >
                        <img src = {Image1} alt="" />
                        <input type="text" name = "userName" value = {values.userName} placeholder = "User Name" onChange = {handleChange} />
                        {errors.userName && <p className = "errort">{errors.userName}</p>}
                    </label>
                
                    <label htmlFor = "phone" >
                        <img src = {Image3} alt="" />
                        <input type="text" name = "phone" value = {values.phone} placeholder = "Phone" onChange = {handleChange} />
                        {errors.phone && <p className = "errort">{errors.phone}</p>}
                    </label>    
                    <button type = "submit" onClick = {signInCall} > SUBMIT</button>
                </form>
                
            </div>
        </div>
    )
}

export default SignIn
