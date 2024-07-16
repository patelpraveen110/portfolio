import React from 'react'
import './About.css'
import theme_pattern from '../../assets/logo.png'
import profile_imaage from '../../assets/profile.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_imaage} alt="" className='about-image'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced full stack developer with more than 3 years of profesional expertise in the field. Througout my career
                        i have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                    </p>
                    <p>I am an experienced full stack developer with more than 3 years of profesional expertise in the field. </p> 
                </div>
                <div className="about-skills">
                   <div className="about-skill"><p>Java </p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>React Js </p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>HTML & CSS </p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Spring Boot</p> <hr style={{width:"70%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div><hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS WORKED ON</p>
            </div><hr/>
            <div className="about-achievement">
                <h1>3+</h1>
                <p>HAPPY CLIENTS</p>
            </div><hr/>
        </div>
    </div>
  )
}

export default About
