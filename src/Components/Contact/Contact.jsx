import React from 'react'
import './Contact.css'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Font Awesome icons

const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3b60c3b8-db8b-4e19-b059-f01d205ddc04");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            alert(data.message);
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Hey there feel free to reach out to me on the below details for any technical discussion</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p><FaEnvelope /></p>
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
                <form onSubmit={onSubmit} className="contact-right">
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
