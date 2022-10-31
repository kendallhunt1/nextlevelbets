import React from 'react';
import "../Styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="linksWrapper">
                <div className="links">
                    <a href="#">About</a>
                    <a href="#">Membership</a>
                    <a href="#">Sign Up</a>
                    <a href="#">Login</a>
                </div>
            </div>
            <div className="logoWrapper">
                <div className="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/0/85.png" alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default Footer;