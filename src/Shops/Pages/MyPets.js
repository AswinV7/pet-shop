import React, { useEffect, useState } from 'react'
import '../../CSS/Shop/MyPets.css'
import { useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'
import API_url from '../../Services/API_url'
import Card from '../../Users/Components/Card'

const MyPets = () => {

    const history = useHistory()
    const token = localStorage.getItem('token')
    const [pets, setPets] = useState([])

    useEffect(() => {
        fetch(API_url + `/mypets`, {headers: {'authorization': `Bearer ${token.split(' ')[1]}`}})
        .then(res => res.json())
        .then(result => setPets(result))
        
    },[])

    const logOut = () =>{
        localStorage.removeItem("token");
        history.push("/login");
    }

    return (
        <div className = "Mypets">
            <Header />
            <div className = "mypets">
                <div className = "profile-button">
                    <div className = "shop-details">
                        <div className = "shop-pic"></div>
                        <h3>shopname</h3>
                    </div>
                    <div className = "options">
                        <button onClick = {() => history.push(`/profile`)} >PROFILE</button>
                        <button className = "bt" >MY PETS</button>
                        <button onClick = {() => history.push(`/orders`)}>MY ORDERS</button>
                    </div>
                    <button className = "lg-bt" onClick = {logOut} >LOGOUT</button>
                </div>
                <div className = "mypets-details">
                    <div className = "mypets-h">
                        <h1>MY PETS</h1>
                        <button onClick = {() => history.push(`/add-pet`)} >Add Pets</button>
                    </div>
                    <div className = "mypets-card">
                        {pets.map((pet) => <Card key = {pet._id} name = {pet.petName} breed = {pet.petBreed} petid = {pet._id} price = {pet.petPrice} age = {pet.petAge} />) }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MyPets