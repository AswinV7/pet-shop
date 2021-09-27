import React from 'react'
import { useParams } from 'react-router'
import shops from '../../Data/shops'
import Header from '../../Shared/Components/Header'

const Shop = () => {
    const params = useParams()
    return (
        <div>
            <Header />
            <h2>{shops[params.shopid - 1].name}</h2>
            <h4>{shops[params.shopid - 1].location}</h4>
            <img src="" alt="" />
            <div className="contact-details">
                <h4>Email</h4>
                <h4>Phone No.</h4>
            </div>
            <div className="catagories-animals">
                <ul>
                    <li>dogs</li>
                    <li>cats</li>
                    <li>birds</li>
                </ul>
            </div>
        </div>
    )
}

export default Shop
