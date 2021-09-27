import React from 'react'
import Button from '../../Shared/Components/Button'
import image1 from '../../Images/dog13.png'
import { useHistory } from 'react-router'

const Card = ({name, info, petid, shopid}) => {
    const history = useHistory()
    return (
        <div className="featured-pet">
            <div className="pet-image">
                <img src = {image1} alt = "" /> 
            </div>
            <div className="info">
                <h3 className = "pet-name">{name}</h3>
                <h4 className = "pet-info">{info}</h4>
            </div>
            <div className = "ff" >
                <Button text = "Adopt Me" onClick = {() => history.push(`/shops/5/${petid}`)} />
            </div>
        </div>
    )
}

export default Card
