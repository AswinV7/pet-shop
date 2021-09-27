import React from 'react'
import { useParams } from 'react-router'
import Button from '../../Shared/Components/Button'
import Header from '../../Shared/Components/Header'
import pets from '../../Data/pets'

const Pet = () => {
    const params = useParams();
    return (
        <div>
            <Header />
            <div className="pet">
                <div className="image">
                    <img src="" alt="" />
                </div>
                <div className="pet-header">
                    <h2>{pets[params.petid - 1].name}</h2>
                    <h3>Pet Breed</h3>
                    <h4>Age</h4>
                </div>
                <h5>{pets[params.petid - 1].info}</h5>
                <div className="price-details">
                    <h5>10,000</h5>
                </div>
                <Button text = "Adopt Me" onClick = {() => {}} />
            </div>
        </div>
    )
}

export default Pet
