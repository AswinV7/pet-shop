import React from 'react'
import Button from '../../Shared/Components/Button'
import image1 from '../../Images/story1.png'
import { useHistory } from 'react-router'

const ShopCard = ({name, info, location, shopid}) => {
    const history = useHistory()
    return (
        <div className="shops-list">
            <div className="shops-images">
                <img src = {image1} alt = "" />
            </div>
            <div className="shopcard-info">
                <h3 className = "shops-name">{name}</h3>
                <h4 className = "shops-info">{info}</h4>
                <h4 className = "shops-location">{location}</h4>
                <Button text = "Shop" onClick = {() => {history.push(`/shops/${shopid}`)}} />
            </div>
            
        </div>
    )
}

export default ShopCard
