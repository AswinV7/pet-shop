import React from 'react'
import '../../CSS/Shared/Header.css'
import { useState } from 'react'
import Menu from './Menu'

const Header = () => {

    const [location, setLocation] = useState("")
    const [open, setOpen] = useState(false);

    const call = () => {
        setOpen(!open)
    }

    return (
        <div className = "Header">
            <div  className = {open? "z" :"m"} onClick = {call}> 
                <Menu isOpen = {open}/>
            </div>
            <h1>Companion</h1>
            <input type="text" placeholder = "Enter Pin" value = {location} onChange = {(e) => {setLocation(e.target.value)}}/>
        </div>
    )
    
}


export default Header
