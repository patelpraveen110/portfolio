import React from 'react'
import './Footer.css'
import logo from '../../assets/logo1.png'
import java from '../../assets/java.png'
import mysql from '../../assets/mysql.png'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import springboot from '../../assets/spring-boot.png'
import linux from '../../assets/linux.png'
import kafka from '../../assets/kafka.png'
import jenkins from '../../assets/jenkins.png'
import docker from '../../assets/docker.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" className='logo-image' />
                    {/* <p>cbeh cneqjfek cssnejf dbqejjf bqejkfbk qfbhj cbeh cneqjfek cssnejf dbqejjf bqejkfbk qfbhj</p> */}
                </div>
                <div className="footer-top-right">
                <img src={java} alt="" className='tech-logo' />
                <img src={springboot} alt="" className='tech-logo' />
                <img src={mysql} alt="" className='tech-logo' />
                <img src={html} alt="" className='tech-logo' />
                <img src={css} alt="" className='tech-logo' />
                <img src={react} alt="" className='tech-logo' />
                <img src={docker} alt="" className='tech-logo' />
                <img src={linux} alt="" className='tech-logo' />
                <img src={kafka} alt="" className='tech-logo' />
                <img src={jenkins} alt="" className='tech-logo' />
                </div>
            </div>
            <hr />  
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Praaveen PAtel. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
