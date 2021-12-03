import React, { useState } from 'react'
import '../../CSS/Shop/SignUp.css'
import { useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'
import Image1 from '../../Images/profile2.png'
import Image2 from '../../Images/location1.png'
import Image3 from '../../Images/phone.png'
import Image4 from '../../Images/lock.png'
import postData from '../../Services/postData'
import FileUpload from '../../Services/FileUplod'
import Validation from '../../Shared/Components/Validation'

const SignUp = () => {

    const history = useHistory()
    
    const [values, setValues] = useState({
        shopName: "", 
        shopLocation: "", 
        pin: "", 
        email: "", 
        phone: "", 
        password: "", 
        conformPassword: ""
    })
    const [selectedImage, setSelectedImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [errors, setErrors] = useState({});
    
    const url = imageUrl.url
    let isValid = true

    if((values.shopName || values.shopLocation || values.pin || values.email || values.phone || values.password || values.conformPassword) == ""){
        isValid = false
    }

    const signUpCall = (e) => 
    {
        e.preventDefault()
        setErrors(Validation(values))
        const data = {
            shopName: values.shopName,
            shopLocation: values.shopLocation,
            pin: values.pin,
            email: values.email,
            phone: values.phone,
            password: values.password,
            conformPassword: values.conformPassword,
            url
        }

        if(values.password !== values.conformPassword){
            alert("Password not match");
            return false;
        }
        else if (isValid === true )
            postData('/signup', data)
            .then((result) =>{
                if(result.status)
                history.push('/login');
    })
    }

    const handleChange = (e) =>{
        setValues({
            ...values,[e.target.name]: e.target.value,
        });
    }

    const upload = () => {
        const formData = new FormData()
            formData.append('files', selectedImage)
        FileUpload('/imageupload', formData)
        .then(result => setImageUrl(result))
    }

    return (
        <div className = "SignUp">
            <Header />
            <div className = "signup-page">
                <h2>SIGN UP</h2>
                {/* <div className = {!error ? 'error-t' : 'error'} >{error.data}</div>
                <div className = {!errror ? 'error-t' : 'error'} >Password not match</div> */}
                <div className = "usr-img">
                        <input type = "file" files = {selectedImage} onChange = {(e) => setSelectedImage(e.target.files[0]) } />
                        <button onClick = {upload} >UPLOAD IMAGE</button>
                </div>
                <form className="signup-form" onSubmit = {signUpCall}>
                    <label htmlFor = "shop-name" >
                        <img src = {Image1} alt="" />
                        <input type="text" name = "shopName" value = {values.shopName} placeholder = "Shop Name" onChange = {handleChange} /> 
                        {errors.shopName && <p className = "errort">{errors.shopName}</p>}
                    </label>
                   

                    <label htmlFor = "shop-location" >
                        <img src = {Image2} alt="" />
                        <input type="text" name = "shopLocation" value = {values.shopLocation} placeholder = "Shop Location" onChange = {handleChange} />
                        {errors.shopLocation && <p className = "errort">{errors.shopLocation}</p>}
                    </label>
                
                    <label htmlFor = "pin" >
                        <img src = {Image1} alt="" />
                        <input type="text" name = "pin" value = {values.pin} placeholder = "Pin" onChange = {handleChange} />
                        {errors.pin && <p className = "errort">{errors.pin}</p>}
                    </label>
               
                    <label htmlFor = "email" >
                        <img src = {Image1} alt="" />
                        <input type="email" name = "email" value = {values.email} placeholder ="Email" onChange = {handleChange} />
                        {errors.email && <p className = "errort">{errors.email}</p>}
                    </label>
                
                    <label htmlFor = "phone" >
                        <img src = {Image3} alt="" />
                        <input type="text" name = "phone" value = {values.phone} placeholder = "Phone" onChange = {handleChange} />
                        {errors.phone && <p className = "errort">{errors.phone}</p>}
                    </label>    

                    <label htmlFor = "password" >
                        <img src = {Image4} alt="" />
                        <input type="password" name = "password" value = {values.password} placeholder = "Password" onChange = {handleChange} />
                        {errors.password && <p className = "errort">{errors.password}</p>}
                    </label>
                
                    <label htmlFor = "conform-password" >
                        <img src = {Image4} alt="" />
                        <input type="password" name = "conformPassword" value = {values.conformPassword} placeholder = "Conform Password" onChange = {handleChange} />
                        {errors.conformPassword && <p className = "errort">{errors.conformPassword}</p>}
                    </label>
                
                    <button type = "submit" > SUBMIT</button>
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
