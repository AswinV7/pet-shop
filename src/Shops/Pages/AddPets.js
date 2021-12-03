import React from 'react'
import '../../CSS/Shop/AddPets.css'
import { useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import postData from '../../Services/postData'
import Header from '../../Shared/Components/Header'
import FileUpload from '../../Services/FileUplod'
import Validation from '../../Shared/Components/Validation'

const AddPets = () => {

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
    const token = localStorage.getItem('token')
    const history = useHistory()
    let isValid = true

    if((values.petName || values.petBreed || values.petAge || values.petDescription || values.petPrice) == ""){
        isValid = false
    }

    const petAddCall = (e) => 
    {
        e.preventDefault()
        setErrors(Validation(values))
        const data = {
            petName: values.petName,
            petBreed: values.petBreed,
            petAge: values.petAge,
            petDescription: values.petDescription,
            petPrice: values.petPrice,
            petImage: url
        }
        if(isValid === true)
            postData('/shop/pets', data)
            .then((result) =>{
                if(result.status)
                    history.push('/mypets')
        });
    }

    if(!token)
        return <Redirect to = '/'/>

    const upload = () => {
        const formData = new FormData()
            formData.append('files', selectedImage)
        FileUpload('/imageupload', formData)
        .then(result => setImageUrl(result))
    }
    
    const handleChange = (e) =>{
        setValues({
            ...values,[e.target.name]: e.target.value,
        });
    }
    
    return (
        <div className = "Add-Pet">
            <Header />
            <div className = "add-pets">
                <h2>ADD PET DETAILS</h2>
                <div className = "add-details">
                    <div className = "add-img">
                        <input type = "file" files = {selectedImage} onChange = {(e) => setSelectedImage(e.target.files[0]) } />
                        <button onClick = {upload} >UPLOAD IMAGE</button>
                    </div>
                    <form className = "add-form" onSubmit = {petAddCall}>
                        <label htmlFor="pet-name">
                            <input type="text" name = "petName" value = {values.petName} placeholder = "Pet Name" onChange = {handleChange} />
                            {errors.petName && <p className = "errort">{errors.petName}</p>}
                        </label>

                        <label htmlFor="pet-breed">
                            <input type="text" name = "petBreed" value = {values.petBreed} placeholder = "Pet Breed" onChange = {handleChange} />
                            {errors.petBreed && <p className = "errort">{errors.petBreed}</p>}
                        </label>

                        <label htmlFor="pet-age">
                            <input type="text" name = "petAge" value = {values.petAge} placeholder = "Pet Age" onChange = {handleChange} />
                            {errors.petAge && <p className = "errort">{errors.petAge}</p>}
                        </label>

                        <label htmlFor="pet-price">
                            <input type="text" name = "petPrice" value = {values.petPrice} placeholder = "Pet Price" onChange = {handleChange} />
                            {errors.petPrice && <p className = "errort">{errors.petPrice}</p>}
                        </label>

                        <label htmlFor="pet-description">
                            <input type="text" name = "petDescription" value = {values.petDescription} placeholder = "Pet Description" onChange = {handleChange} />
                            {errors.petDescription && <p className = "errort">{errors.petDescription}</p>}
                        </label>

                        <button type = "submit"> SAVE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPets
