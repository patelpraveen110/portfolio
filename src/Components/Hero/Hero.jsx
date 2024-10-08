import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className="hero">
        <img src={profile_img} alt="" className='profile-image'/>
        <h1><span>I am Praveen Patel, </span> a Full stack Web Application developer.</h1>
        <p>I have 3 years of experience in building web applications as a full stack developer, currently i am working at CITIUSTECH in mumbai</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
