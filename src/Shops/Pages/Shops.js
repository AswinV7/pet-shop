import React from 'react'
import '../../CSS/Shop/Shops.css'
import Button from '../../Shared/Components/Button'
import Header from '../../Shared/Components/Header'
import Image from '../../Images/profile1.png'
import { useHistory } from 'react-router'

const Shops = () => {
    const history = useHistory();
    return (
        <div className = "shop-overview">
            <Header />
            <div className = "shop-main">
                <Button text = "LOGIN" image = {Image} onClick = {() => {history.push(`/login`)}} />
                <Button text = "SIGNUP" image = {Image} onClick = {() => {history.push(`/signup`)}} />
            </div>
            
        </div>
    )
}

export default Shops
