import "./contactus.css";
import React from "react";
import 'boxicons/css/boxicons.min.css'; 

const Contactus = () => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`${text} copied to clipboard`);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <div className="contain-contact">
            <div className="contact-address">
                <div className="Ema-git">
                    <div className="ema-git-div" onClick={() => copyToClipboard('fasugbeoluwaseyi@gmail.com')}>
                    <i className='bx bx-envelope'></i>
                    </div>
                    <span className="e-sp">fasugbeoluwaseyi@gmail.com</span>
                </div>
                <div className="Ema-git">
                    <div className="ema-git-div" onClick={() => copyToClipboard('https://github.com/seyifash')}>
                    <i className='bx bxl-github'></i> 
                    </div>
                    <span className="g-sp">https://github.com/seyifash"</span>
                </div>
            </div>
            <div className="form-sect">
                <form action="https://getform.io/f/paoxpzob" method="POST" encType="multipart/form-data" className="form">
                    <div className="name">
                        <input type="text" name="firstName" id="firstName" placeholder="First Name"/>
                        <input type="text" name="lastName" id="lastName"  placeholder="Last Name"/>
                    </div>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <textarea rows="6" name="message" id="message" placeholder="Type your message here"/>
                    <button type="submit" className="btn-2">Send</button>
                </form>
            </div>
        </div>
        </div>
    )
}
export default Contactus;