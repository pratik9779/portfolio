import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'

function Navbar() {
    return (
        <div className="navbar mt-2">
            <img src={logo} alt="logo" className="logo" />

            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Skills</li>
                <li className="nav-item">Experience</li>
                <li className="nav-item">Education</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Achievments</li>
                <li className="nav-item">Contact Me</li>
            </ul>
        </div>
    )
}

export default Navbar