import React, { useState } from 'react'
import '../../CSS/Shared/UpdateOwner.css'
import postData from '../../Services/postData'
import UpdateVerify from './UpdateVerify'
import Validation from './Validation'

const UpdateOwner = ({Close ,shopId }) => {
    
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        email: "", 
        phone: "", 
    })
    const [open, setOpen] = useState(false);
    let isValid = true

    if((values.email || values.phone) == ""){
        isValid = false
    }

    const updateCall = (e) => 
    {
        e.preventDefault()
        setErrors(Validation(values))
        const data = {
            phone: values.phone,
            shopId
        }
        if(isValid === true)
            postData('/shop/user-update', data)
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
        <div className = "UpdateOwner">
            { open && <UpdateVerify Close = {setOpen} phone = {values.phone} email = {values.email} />}
            <div className = "signin-page">
                <div className = "closebt">
                    <button  onClick = {() => Close(false)} >X</button>
                </div>
                <h1>Update Owner</h1>
                <form className="signin-form">
                    <label htmlFor = "email" >
                        <input type="text" name = "email" value = {values.email} placeholder = "Email" onChange = {handleChange} />
                        {errors.email && <p className = "errort">{errors.email}</p>}
                    </label>
                
                    <label htmlFor = "phone" >
                        <input type="text" name = "phone" value = {values.phone} placeholder = "Phone" onChange = {handleChange} />
                        {errors.phone && <p className = "errort">{errors.phone}</p>}
                    </label>    
                    <button type = "submit" onClick = {updateCall} > SUBMIT</button>
                </form>
                
            </div>
        </div>
    )
}

export default UpdateOwner
