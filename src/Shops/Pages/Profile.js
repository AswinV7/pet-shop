import React, { useEffect, useState } from 'react'
import '../../CSS/Shop/Profile.css'
import { useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'
import API_url from '../../Services/API_url'

const Profile = () => {

    const history = useHistory()
    const [profile, setProfile] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => {
        fetch(API_url + `/profile`,{headers: {'authorization': `beerr ${token}`}})
        .then(res => res.json())
        .then(result => setProfile(result))
    },[])

    return (
        <div className = "Profile">
            <Header  />
            {console.log(profile)}
            <div className = "profile">
                <div className = "profile-button">
                    <div className = "shop-details">
                        <div className = "shop-pic"></div>
                        <h3>{profile.shopName}</h3>
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
                            <h2>NAME : {profile.shopName} </h2>
                            <h2>PHONE : {profile.phone} </h2>
                            <h2>EMAIL : {profile.email} </h2>
                            <h2>PIN : {profile.pin} </h2>
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
