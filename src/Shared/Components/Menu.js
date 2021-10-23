import React from 'react'
import '../../CSS/Shared/Menu.css'
import { useHistory } from 'react-router'

const Menu = ({isOpen }) => {
    const history = useHistory()
    return (
        <div className = { isOpen ? "MenuClose": "MenuOpen"}>
            <div className = "menu-details">
                <div className = "menu-pic"></div>
                <h3>shopname</h3>
            </div>
            <div className = "menu-options">
                <button onClick = {() => history.push(`/profile`)} >PROFILE</button>
                <button onClick = {() => history.push(`/mypets`)}>MY PETS</button>
                <button onClick = {() => history.push(`/orders`)} >MY ORDERS</button>
            </div>
        </div>
    )
}


export default Menu
