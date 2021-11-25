import React from 'react'
import '../../CSS/Shared/Header.css'
import { useState } from 'react'
import Menu from './Menu'

const Header = ({shopName, shopImage}) => {

   
    const [open, setOpen] = useState(false);

    const call = () => {
        setOpen(!open)
    }

    return (
        <div className = "Header">
            <div  className = {open? "z" :"m"} onClick = {call}> 
                <Menu isOpen = {open} shopName = {shopName} shopImage = {shopImage} />
            </div>
            <h1>Companion</h1>
            
        </div>
    )
    
}


export default Header
