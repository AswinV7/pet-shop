import React from 'react'

const Card1 = ({name, info}) => {
    return (
        <div className="shops-list">
            <div className="shops-images">
                <img src="" alt="" />
            </div>
            <div className="info">
                <h3 className = "shops-name">{name}</h3>
                <h4 className = "shops-info">{info}</h4>
            </div>
        </div>
    )
}

export default Card1
