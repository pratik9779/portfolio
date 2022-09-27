import React from 'react'
import './Main.css'
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Education from './Education/Education'
import Projects from './Projects/Projects'
import Achievements from './Achievements/Achievements'
import Contact from './Contact/Contact'


function Main() {
    return (
        <div className="main">
            <Home />
            <About />
            <Skills />
            {/* <Experience />
            <Education />
            <Projects />
            <Achievements />
            <Contact /> */}
        </div>
    )
}

export default Main