import React from 'react'
import './Contact.css'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Font Awesome icons

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Hey there feel free to reach out to me on the below details for any technical discussion</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p><FaEnvelope/></p>
                            <p>patelpraveen110@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <p><FaPhoneAlt /></p>
                            <p>+91 7693986267</p>
                        </div>
                        <div className="contact-detail">
                            <p><FaMapMarkerAlt /></p>
                            <p>Mumbai, India</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">write your message here</label>
                    <textarea name="message" rows="4" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
