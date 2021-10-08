import React from 'react'
import { useParams } from 'react-router'
import Button from '../../Shared/Components/Button'
import Header from '../../Shared/Components/Header'
import Image from '../../Images/puppy.png'
import pets from '../../Data/pets'

const Pet = () => {
    const params = useParams();
    return (
        <div className = "pets-details">
            <Header />
            <div className="pet">
                <div className = "pets-info">
                    <div className="image">
                        <img src = {Image} alt = "" />
                    </div>
                    <div className="pet-header">
                        <h2>Name  :  {pets[params.petid - 1].name}</h2>
                        <h4>Age  :  {pets[params.petid - 1].age}</h4>
                        <h4>Breed  :  {pets[params.petid - 1].breed}</h4>
                        <div className = "Catagory">
                            <h4 className = "catagory">CATEGORY</h4>
                            <h4>{pets[params.petid - 1].catagory}</h4>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h5>10,000</h5>
                </div>
                <div className = "About-me">
                    <h1>ABOUT MY STORY</h1>
                    <h6>{pets[params.petid - 1].info}</h6>
                </div>
                <Button text = "ADOPT " onClick = {() => {}} />
            </div>
        </div>
    )
}

export default Pet
