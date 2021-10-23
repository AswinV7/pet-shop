import React, { useState } from 'react'
import '../../CSS/Shop/SignUp.css'
import { useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'
import Image1 from '../../Images/profile2.png'
import Image2 from '../../Images/location1.png'
import Image3 from '../../Images/phone.png'
import Image4 from '../../Images/lock.png'
import postData from '../../Services/postData'

const SignUp = () => {

    const history = useHistory()
    
    const [shopName, setShopName] = useState("")
    const [shopLocation, setShopLocation] = useState("")
    const [pin, setPin] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [conformPassword, setConformPassword] = useState("")

    const signUpCall = (e) => 
    {
        e.preventDefault()
        const data = {
            shopName: shopName,
            shopLocation: shopLocation,
            pin: pin,
            email: email,
            phone: phone,
            password: password,
            conformPassword: conformPassword
        }
        console.log(data);
        postData('/signup', data)
        .then((result) =>{
            console.log(result);
        })
    }

    return (
        <div className = "SignUp">
            <Header />
            <div className = "signup-page">
                <h2>SIGN UP</h2>
                <form className="signup-form" onSubmit = {signUpCall}>
                    <label htmlFor = "shop-name" >
                        <img src = {Image1} alt="" />
                        <input type="text" name = "shop-name" value = {shopName} placeholder = "Shop Name" onChange = {(e) => {setShopName(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "shop-location" >
                        <img src = {Image2} alt="" />
                        <input type="text" name = "shop-location" value = {shopLocation} placeholder = "Shop Location" onChange = {(e) => {setShopLocation(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "pin" >
                        <img src = {Image1} alt="" />
                        <input type="text" name = "pin" value = {pin} placeholder = "Pin" onChange = {(e) => {setPin(e.target.value)}} />
                    </label>
               
                    <label htmlFor = "email" >
                        <img src = {Image1} alt="" />
                        <input type="email" name = "email" value = {email} placeholder ="Email" onChange = {(e) => {setEmail(e.target.value)}} />
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
                
                    <button type = "submit" onClick = {() => history.push(`/login`)}> SUBMIT</button>
                </form>
                <div className = "al">
                    <h5>ALREADY HAVE AN ACCOUNT?</h5> 
                    <h5 className = "signin-here" onClick = {() => history.push(`/login`)} > SIGNIN HERE</h5>
                    
                </div>
                
            </div>
        </div>
    )
}

export default SignUp
