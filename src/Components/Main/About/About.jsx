import React from 'react'
import './About.css'
import profile from '../../../images/profile.png'

function About() {
    return (
        <div className="about ">
            <h1 className="heading mb-10 ml-2">About Me</h1>
            <div className="about-content ">
                <p className="mr-28 ml-2">I'm a Software Developer living in Pune, Maharashtra, India.
                    Currently I'm working as a Full Stack Developer (MEAN/MERN),
                    I love to design and code beautiful and simple things. <br />
                    <br />
                    Here are a few technologies I've been working with recently: JavaScript, React, TypeScript, Angular, Node.js
                </p>

                <img src={profile} alt="profile" className="profile mr-20" />
            </div>

        </div>
    )
}

export default About