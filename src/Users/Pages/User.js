import React, { useEffect, useState } from 'react'
import '../../CSS/User/User.css'
import Header from '../../Shared/Components/Header'
import Card from '../Components/Card'
import ShopCard from '../../Shops/Components/ShopCard'
import shops from '../../Data/shops'
import API_url from '../../Services/API_url'

const User = () => {

    const [pets, setPets] = useState([])
    
    useEffect(() => {
        fetch(API_url + '/shop/pets')
        .then(res => res.json())
        .then(result => setPets(result))
    }, [])

    return (
        <div className = "User">
            <Header />
            <h2 className = "featured-title" >Featured Pets</h2>
            <div className="cards-pets">
                {pets.map((pet) => <Card key = {pet._id} name = {pet.petName} breed = {pet.petBreed} petid = {pet._id} price = {pet.petPrice} age = {pet.petAge} />) }
            </div>
            <h2 className = "shop-title">Our Shops</h2>
            <div className="cards-shops">
                {shops.map((shop) => (shop.pin === 546546) && <ShopCard key = {shop.id} name = {shop.name} info = {shop.info} location = {shop.location} shopid = {shop.id}/>) }
            </div>
            
        </div>
    )
}

export default User
