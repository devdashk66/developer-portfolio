import React, { useState } from 'react';
import './Header.css';


const Header = () => {

    const [open, setOpen] = useState(false);



    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="/" className='nav-logo'>Raju</a>
                <div className={open ? 'nav-menu show-menu' : 'nav-menu'}>
                    <ul className='nav-list grid'>

                        <li className='nav-item'>
                            <a href="#home" className='nav-link active-link'>
                                <i class="uil uil-estate nav-icon"></i> Home
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a href="#about" className='nav-link'>
                                <i class="uil uil-user nav-icon"></i> About
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a href="#skills" className='nav-link'>
                                <i class="uil uil-file-alt nav-icon"></i> Skills
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a href="#services" className='nav-link'>
                                <i class="uil uil-briefcase-alt nav-icon"></i> Services
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a href="#portfolio" className='nav-link'>
                                <i class="uil uil-scenery nav-icon"></i> Portfolio
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a href="#contact" className='nav-link'>
                                <i class="uil uil-message nav-icon"></i> Contact Me
                            </a>
                        </li>

                    </ul>

                    <i
                        onClick={() => setOpen(!open)}
                        className="uil uil-times nav-close"></i>

                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className='nav-toggle'>
                    <i class="uil uil-apps"></i>
                </div>

            </nav>
        </header>
    );
};

export default Header;