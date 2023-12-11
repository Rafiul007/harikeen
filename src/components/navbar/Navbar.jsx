import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className="nav-container">
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="nav-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contract">Contract</Link></li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Navbar