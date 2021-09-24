import React from 'react'
import { useState } from 'react'

const Header = () => {
    const [location, setLocation] = useState("")
    return (
        <div className = "Header">
            <h1>Companion</h1>
            <input type="text" placeholder = "Enter Pin" value = {location} onChange = {(e) => {setLocation(e.target.value)}}/>
        </div>
    )
}

export default Header
