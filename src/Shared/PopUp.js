import React, { useState } from 'react'
import '../CSS/Shared/PopUp.css'
import { useHistory } from 'react-router'
import postData from '../Services/postData'
import Validation from './Components/Validation'

const PopUp = ({Close}) => {

    const history = useHistory()
    const [errors, setErrors] = useState({});
    let isValid = true
    const [values, setValues] = useState({
        shopName: "", 
        shopLocation: "", 
        pin: ""
    })

    if((values.shopName || values.shopLocation || values.pin) == ""){
        isValid = false
    }

    const submitCall = (e) => {
        e.preventDefault()
        setErrors(Validation(values))
        const data = {
            shopName: values.shopName,
            shopLocation: values.shopLocation,
            pin: values.pin
        }

        if(isValid === true)
            postData('/shop/update', data)
    }

    const handleChange = (e) =>{
        setValues({
            ...values,[e.target.name]: e.target.value,
        });
    }

    return (
        <div className = "popUp-open" >
            <div className = "popup-details">
                <div className = "close-bt">
                    <button  onClick = {() => Close(false)} >X</button>
                </div>
                <form className="edit-form" onSubmit = {submitCall} >
                    <label htmlFor = "shopname" >
                        <input type="text" name = "shopName" value = {values.shopName}  placeholder = "Shop Name" onChange = {handleChange}  />
                        {errors.shopName && <p className = "errort">{errors.shopName}</p>}
                    </label>
                
                    <label htmlFor = "shoplocation" >
                        <input type="text" name = "shopLocation" value = {values.shopLocation} placeholder = "Shop Location" onChange = {handleChange}  />
                        {errors.shopLocation && <p className = "errort">{errors.shopLocation}</p>}
                    </label>
                
                    <label htmlFor = "pin" >
                        <input type="text" name = "pin" value = {values.pin} placeholder = "Pin" onChange = {handleChange}  />
                        {errors.pin && <p className = "errort">{errors.pin}</p>}
                    </label>
                
                    <button type = "submit"  > SUBMIT</button>
                </form>
            </div>
            
        </div>
    )
}

export default PopUp
