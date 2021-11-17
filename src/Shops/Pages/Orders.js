import React, { useEffect, useState } from 'react'
import '../../CSS/Shop/Order.css'
import { useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'
import OrdersCard from '../Components/OrdersCard'
import API_url from '../../Services/API_url'

const Orders = () => {

    const history = useHistory()
    const token = localStorage.getItem('token')
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(API_url + `/myorders`, {headers: {'authorization': `Bearer ${token.split(' ')[1]}`}})
        .then(res => res.json())
        .then(result => setOrders(result))
        
    },[])

    const logOut = () =>{
        localStorage.removeItem("token");
        history.push("/login");
    }

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
                    <button className = "lg-bt" onClick = {logOut} >LOGOUT</button>
                </div>
                <div className = "orders-details">
                    <h1 className ="order-h">ORDERS</h1>
                    <div className = "orders-card">
                        {orders.map((order) => <OrdersCard key = {order._id} petName = {order.petName} petBreed = {order.petBreed}   petPrice = {order.petPrice} userName = {order.userName} phone = {order.phone} />) }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Orders
