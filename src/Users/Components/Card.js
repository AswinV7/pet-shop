import React from 'react'
import Button from '../../Shared/Components/Button'
import image1 from '../../Images/puppy.png'
import { useHistory } from 'react-router'

const Card = ({name, breed, petid, price}) => {
    const history = useHistory()
    return (
        <div className="featured-pet">
            <div className="pet-image">
                <img src = {image1} alt = "" /> 
            </div>
            <div className="pet-info">
                <h3 className = "pet-name">{name}</h3>
                <h4 className = "pet-breed">{breed}</h4>
                <h5 className = "pet-price">{price}</h5>
                <div className = "Am" >
                    <Button text = "Adopt Me" onClick = {() => {history.push(`/shops/pets/${petid}`)}}  />
                </div>
            </div>
            
        </div>
    )
}

export default Card
