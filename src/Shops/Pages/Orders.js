import React from 'react'
import '../../CSS/Shop/Order.css'
import { useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'
import OrdersCard from '../Components/OrdersCard'

const Orders = () => {

    const history = useHistory()

    return (
        <div className = "Orders">
            <Header />
            <div className = "orders">
                <div className = "profile-button">
                    <div className = "shop-details">
                        <div className = "shop-pic"></div>
                        <h3>shopname</h3>
                    </div>
                    <div className = "options">
                        <button onClick = {() => history.push(`/profile`)} >PROFILE</button>
                        <button onClick = {() => history.push(`/mypets`)}>MY PETS</button>
                        <button className = "bt" >MY ORDERS</button>
                    </div>
                    
                </div>
                <div className = "orders-details">
                    <h1 className ="order-h">ORDERS</h1>
                    <div className = "orders-card">
                        <OrdersCard />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Orders
