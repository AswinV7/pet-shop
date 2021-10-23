import React from 'react'
import '../../CSS/Shop/MyPets.css'
import { useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'

const MyPets = () => {

    const history = useHistory()

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
                    
                </div>
                <div className = "mypets-details">
                    <div className = "mypets-h">
                        <h1>MY PETS</h1>
                        <button onClick = {() => history.push(`/add-pet`)} >Add Pets</button>
                    </div>
                    <div className = "mypets-card">
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MyPets