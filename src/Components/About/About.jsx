import React from 'react'
import './About.css'
import theme_pattern from '../../assets/logo.png'
import profile_imaage from '../../assets/profile.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_imaage} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>details1 for portfolio user</p>
                    <p>details2 for portfolio user</p> 
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML $ CSS <hr style={{width:"50%"}}></hr></p>
                    </div>
                    <div className="about-skill"><p>React Js <hr style={{width:"60%"}}></hr></p>
                    </div>
                    <div className="about-skill"><p>Java<hr style={{width:"80%"}}></hr></p>
                    </div>
                    <div className="about-skill"><p>Spring Boot<hr style={{width:"70%"}}></hr></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
