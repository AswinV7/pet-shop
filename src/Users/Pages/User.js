import React from 'react'
import Header from '../../Shared/Components/Header'
import Card from '../Components/Card'
import Card1 from '../Components/Card1'
import shops from '../../Data/shops'
import pets from '../../Data/pets'

const User = () => {
    return (
        <div>
            <Header />
            <h2>User</h2>
            {pets.map((pet) => { return <Card key = {pet.id} name = {pet.name} info = {pet.info}/>}) }
            <h2>Shop list</h2>
            {shops.map((shop) => { return <Card1 key = {shop.id} name = {shop.name} info = {shop.info}/>}) }
        </div>
    )
}

export default User
