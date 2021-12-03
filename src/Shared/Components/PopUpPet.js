import React, { useState } from 'react'
import '../../CSS/Shared/PopUpPet.css'
import FileUpload from '../../Services/FileUplod'
import postData from '../../Services/postData'
import Validation from './Validation'

const PopUpPet = ({Close, pid}) => {

    const [values, setValues] = useState({
        petName: "", 
        petBreed: "", 
        petAge: "", 
        petDescription: "", 
        petPrice: ""
    })
    const [selectedImage, setSelectedImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [errors, setErrors] = useState({});

    const url = imageUrl.url
    let isValid = true

    if((values.petName || values.petBreed || values.petAge || values.petDescription || values.petPrice) == ""){
        isValid = false
    }

    const petUpdateCall = (e) => 
    {
        e.preventDefault()
        setErrors(Validation(values))
        const data = {
            petName: values.petName,
            petBreed: values.petBreed,
            petAge: values.petAge,
            petDescription: values.petDescription,
            petPrice: values.petPrice,
            petImage: url,
            pid
        }
        if(isValid === true)
            postData('/pet/update', data)
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
        <div className = "popUpPet-open" >
            <div className = "popuppet-details">
                <div className = "close-bt">
                    <button  onClick = {() => Close(false)} >X</button>
                </div>
                <div className = "petimg">
                        <input type = "file" files = {selectedImage} onChange = {(e) => setSelectedImage(e.target.files[0]) } />
                        <button onClick = {upload} >UPLOAD IMAGE</button>
                </div>
                <form className="edit-form"  onSubmit = {petUpdateCall} >
                    <label htmlFor = "pet-name" >
                        <input type="text" name = "petname" value = {values.petName}  placeholder = "Pet Name" onChange = {handleChange} />
                        {errors.petName && <p className = "errort">{errors.petName}</p>}
                    </label>
                
                    <label htmlFor = "pet-age" >
                        <input type="text" name = "petage" value = {values.petAge} placeholder = "Pet Age" onChange = {handleChange} />
                        {errors.petAge && <p className = "errort">{errors.petAge}</p>}
                    </label>
                
                    <label htmlFor = "pet-breed" >
                        <input type="text" name = "petbreed" value = {values.petBreed} placeholder = "Pet Breed" onChange = {handleChange} />
                        {errors.petBreed && <p className = "errort">{errors.petBreed}</p>}
                    </label>

                    <label htmlFor = "pet-description" >
                        <input type="text" name = "petdescription" value = {values.petDescription} placeholder = "Description" onChange = {handleChange} />
                        {errors.petDescription && <p className = "errort">{errors.petDescription}</p>}
                    </label>
                
                    <label htmlFor = "pet-price" >
                        <input type="text" name = "petprice" value = {values.petPrice} placeholder = "Price" onChange = {handleChange} />
                        {errors.petPrice && <p className = "errort">{errors.petPrice}</p>}
                    </label>
                
                    <button type = "submit"  > SUBMIT</button>
                </form>
            </div>
            
        </div>
    )
}

export default PopUpPet
