import React from 'react'
import '../../CSS/Shop/OrderCards.css'

const OrdersCard = ({petName, petBreed, petPrice, userName, phone}) => {
    return (
        <div className = "Order-card">
            <div className = "order-card">
                <div className = "order-details">
                    <div className = "order-pet">
                        <img src="" alt="" />
                        <div>
                            <h2>Name : {petName}</h2>
                            <h2>Breed : {petBreed}</h2>
                        </div>
                    </div>
                    <div className = "order-status">
                        <h1>Status :</h1>
                        <h1 className = "pending">Pending</h1>
                    </div>
                </div>
                <div className = "custm-details">
                    <h1>Customer Details</h1>
                    <div>Ordered on :</div>
                </div>
            </div>
            <div className = "order-chat">
                <div>
                    <h2>Name : {userName}</h2>
                    <h2>Phone No : {phone}</h2>
                </div>
                <button>Chat</button>
            </div>
        </div>
    )
}

export default OrdersCard
