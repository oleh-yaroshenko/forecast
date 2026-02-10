import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/7forecast.png';
import userIcon from '../assets/usernav.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="7forest" className="logo-img" />
            </div>
            <nav className="header-nav-desktop">
                <div className="header-links">
                    <a href="" className="nav-link">Who we are</a>
                    <a href="" className="nav-link"> Contacts</a>
                    <a href="" className="nav-link">Menu</a>
                </div>

                <button className="signup-btn">Sign up</button>
                <img src={userIcon} alt="User" className="user-icon" />
            </nav>
            <div className="mobile-trigger" onClick={toggleMenu}>
                <span className="menu-label">Menu</span>
                <div className={`custom-arrow ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            <div className={`mobile-dropdown ${isMenuOpen ? 'show' : ''}`}>
                <div className="nav-links">
                    <a href="" className="nav-link-mobile">Who we are</a>
                    <a href="" className="nav-link-mobile">Contacts</a>
                    <a href="" className="nav-link-mobile">Menu</a>
                </div>
                <div className="toolbar">
                    <img src={userIcon} alt="User" className="user-icon" />
                    <button className="signup-btn">Sign up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;