// src/components/Footer.js

import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section address">
                    <h2>Funiro.</h2>
                    <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                    <p>2023 funiro. All rights reserved</p>
                </div>
                <div className="footer-section links">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section help">
                    <h3>Help</h3>
                    <ul>
                        <li><a href="#">Payment Options</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Privacy Policies</a></li>
                    </ul>
                </div>
                <div className="footer-section newsletter">
                    <h3>Newsletter</h3>
                    <form>
                        <input type="email" placeholder="Enter Your Email Address" />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
