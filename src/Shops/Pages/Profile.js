import React from 'react'
import '../../CSS/Shop/Profile.css'
import { useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'

const Profile = () => {
    const history = useHistory()
    return (
        <div className = "Profile">
            <Header  />
            <div className = "profile">
                <div className = "profile-button">
                    <div className = "shop-details">
                        <div className = "shop-pic"></div>
                        <h3>shopname</h3>
                    </div>
                    <div className = "options">
                        <button className = "bt" >PROFILE</button>
                        <button onClick = {() => history.push(`/mypets`)}>MY PETS</button>
                        <button onClick = {() => history.push(`/orders`)} >MY ORDERS</button>
                    </div>
                    
                </div>
                <div className = "profile-details">
                    <div className = "details">
                        <h1>PROFILE</h1>
                        <h2 className = "basic-details">BASIC DETAILS</h2>
                        <div className = "details-shop">
                           <div>
                            <h2>NAME : SHOP NAME </h2>
                            <h2>PHONE : 9745773603 </h2>
                            <h2>EMAIL :HELLO@GMAIL.COM </h2>
                            <h2>PIN : 890900</h2>
                           </div>
                           <button>EDIT</button>
                        </div>
                    </div>
                    <div className = "profile-image">
                        <div className = "image"></div>
                        <button>Change photo</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
