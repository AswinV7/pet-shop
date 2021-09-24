import React from 'react'

const Card = ({name, info}) => {
    return (
        <div className="featured-pet">
            <div className="pet-image">
                <img src="" alt="" />
            </div>
            <div className="info">
                <h3 className = "pet-name">{name}</h3>
                <h4 className = "pet-info">{info}</h4>
            </div>
        </div>
    )
}

export default Card
