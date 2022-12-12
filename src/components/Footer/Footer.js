import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container container'>
                <h3 className='footer-title'>Raju</h3>

                <ul className='footer-list'>
                    <li>
                        <a href="#about" className='footer-link'>About</a>
                    </li>

                    <li>
                        <a href="#services" className='footer-link'>Services</a>
                    </li>

                    <li>
                        <a href="#skills" className='footer-link'>Skills</a>
                    </li>
                </ul>

                <div className='footer-social'>
                    <a href="https://www.linkedin.com/" className='footer-social-link' target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href="https://github.com/" className='footer-social-link' target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href="https://www.instagram.com/" className='footer-social-link' target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-instagram'></i>
                    </a>
                </div>

                <span className='footer-copy'>&#169; Raju Miah. All rigths reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;