import React, { useEffect, useState } from 'react'
import '../../CSS/Shop/Pet.css'
import Button from '../../Shared/Components/Button'
import Header from '../../Shared/Components/Header'
import Image from '../../Images/puppy.png'
import API_url from '../../Services/API_url'

const Pet = () => {

    const [pet, setPet] = useState([])
    
    useEffect(() => {
        fetch(API_url + '/shop/pets')
        .then(res => res.json())
        .then(result => setPet(result))
    },[])

    return (
        <div className = "pets-details">
            <Header />
            {console.log(pet)}
            <div className="pet">
                <div className = "pets-info">
                    <div className="image">
                        <img src = {Image} alt = "" />
                    </div>
                    <div className="pet-header">
                        <h2>Name  :  {pet.map(pet => {return pet.petName})} </h2>
                        <h4>Age  :  </h4>
                        <h4>Breed  :  </h4>
                        <div className = "Catagory">
                            <h4 className = "catagory">CATEGORY</h4>
                            <h4>hhh</h4>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h5>10,000</h5>
                </div>
                <div className = "About-me">
                    <h1>ABOUT MY STORY</h1>
                    <h6>hh</h6>
                </div>
                <Button text = "ADOPT " onClick = {() => {}} />
            </div>
        </div>
    )
}

export default Pet
