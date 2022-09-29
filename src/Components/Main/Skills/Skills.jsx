import React from 'react'
import './Skills.css'
import skills from '../../../images/skills-no-repeat.png'

function Skills() {
    return (
        <div id="skills">
            <h1 className="heading mb-10 ml-2">Skills</h1>

            <div className="skills-content">
                <p className="mr-28 ml-2 mt-20">Experienced in in Web Development including technologies like
                    HTML5, CSS3, JAVASCRIPT, JQUERY, ANGULAR, REACT, TYPESCRIPT, BOOTSTRAP, GIT, NODEJS, MONGODB</p>

                <img src={skills} alt="skills" className="skills-img mr-20" />
            </div>

        </div>
    )
}

export default Skills