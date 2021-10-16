import React from 'react'
import Button from '../../Shared/Components/Button'
import image1 from '../../Images/puppy.png'
import { useHistory } from 'react-router'
import postData from '../../Services/postData'

const Card = ({name, breed, petid, price}) => {
    const history = useHistory()

    const onCall = () => {
        const id = {
            id: petid
        }
        postData('/shop/pets', id)
        .then(result => console.log(result))
        history.push(`/shops/pets/id`)
        
        console.log(id)
    }
    return (
        <div className="featured-pet">
            <div className="pet-image">
                <img src = {image1} alt = "" /> 
            </div>
            <div className="info">
                <h3 className = "pet-name">{name}</h3>
                <h4 className = "pet-breed">{breed}</h4>
                <h5 className = "pet-price">{price}</h5>
                <div className = "ff" >
                    <Button text = "Adopt Me" onClick = {onCall}  />
                </div>
            </div>
            
        </div>
    )
}

export default Card
