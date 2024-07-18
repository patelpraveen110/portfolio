import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'

const Hero = () => {
  return (
    <div className="hero">
        <img src={profile_img} alt="" className='profile-image'/>
        <h1><span>I'm Praveen Patel,</span> full stack developer based in India.</h1>
        <p>I have 3 years of experience in building web applications as a full stack developer, i am currently working at citiustech in mumbai</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
