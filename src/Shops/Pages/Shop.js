import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../../Shared/Components/Header'
import API_url from '../../Services/API_url'

const Shop = () => {
    const params = useParams()
    const sid = params.shopid
    const [shop, setShop] = useState([])

    useEffect(() => {
        fetch(API_url + `/shop/${sid}`)
        .then(res => res.json())
        .then(result => setShop(result))
    },[])
    return (
        <div>
            <Header />
            <h2>{shop.ShopName}</h2>
            <h4>{shop.shopLocation}</h4>
            <img src="" alt="" />
            <div className="contact-details">
                <h4>{shop.email}</h4>
                <h4>{shop.phone}</h4>
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
