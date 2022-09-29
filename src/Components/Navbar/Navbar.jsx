import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />

            <ul className="nav-list">
                {/* <li className="nav-item"><a href="#home">Home</a></li> */}
                <li className="nav-item"><a href="#about">About</a></li>
                <li className="nav-item"><a href="#skills">Skills</a></li>
                <li className="nav-item"><a href="#exp">Experience</a></li>
                <li className="nav-item"><a href="#education">Education</a></li>
                <li className="nav-item"><a href="#projects">Projects</a></li>
                <li className="nav-item"><a href="#ach">Achievments</a></li>
                <li className="nav-item"><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    )
}

export default Navbar