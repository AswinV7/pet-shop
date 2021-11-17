import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../../Shared/Components/Header'
import Card from '../../Users/Components/Card'
import API_url from '../../Services/API_url'
import image1 from '../../Images/story1.png'
import '../../CSS/Shop/Shop.css'

const Shop = () => {
    const params = useParams()
    const sid = params.shopid
    const [shop, setShop] = useState([])
    const [pets, setPets] = useState([])

    useEffect(() => {
        fetch(API_url + `/shop/${sid}`)
        .then(res => res.json())
        .then(result => setShop(result))
    },[])

    useEffect(() => {
        fetch(API_url + `/shops/pet/${sid}`)
        .then(res => res.json())
        .then(result => setPets(result))
        
    },[])
    return (
        <div className = "Shop">
            <Header />
            {console.log(pets)}
            <h1 className = "heading">{shop.shopName}</h1>
            <div className = "shop-dtls">
                <div className="contact-details">
                    <h3>Location : {shop.shopLocation}</h3>
                    <h3>Email : {shop.email}</h3>
                    <h3>Phone No :{shop.phone}</h3>
                </div>
                <img src = {image1} alt = "" />
            </div>
            <div className="catagories-animals">
                <ul>
                    <li>dogs</li>
                    <li>cats</li>
                    <li>birds</li>
                </ul>
            </div>
            <div className = "shop-pets">
                {pets.map((pet) => <Card key = {pet._id}  name = {pet.petName} breed = {pet.petBreed} petid = {pet._id} price = {pet.petPrice} age = {pet.petAge} />) }
            </div>
        </div>
    )
}

export default Shop
