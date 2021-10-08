import React from 'react'
import Header from '../../Shared/Components/Header'
import Card from '../Components/Card'
import ShopCard from '../../Shops/Components/ShopCard'
import shops from '../../Data/shops'
import pets from '../../Data/pets'

const User = () => {
    return (
        <div className = "User">
            <Header />
            <h2 className = "featured-title" >Featured Pets</h2>
            <div className="cards-pets">
                {pets.map((pet) => (pet.isFeatured) && <Card key = {pet.id} name = {pet.name} breed = {pet.breed} petid = {pet.id} />) }
            </div>
            <h2 className = "shop-title">Our Shops</h2>
            <div className="cards-shops">
                {shops.map((shop) => (shop.pin === 546546) && <ShopCard key = {shop.id} name = {shop.name} info = {shop.info} location = {shop.location} shopid = {shop.id}/>) }
            </div>
            
        </div>
    )
}

export default User
