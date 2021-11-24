import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
const Header = function () {
  return (
    <header className="header">
       
          
          
          <div className="header__logo"> 
          
          </div>
          
          <nav className="header__navegator">
            <Link className="header__nav-link" to="/">Dashboard</Link>
            <Link className="header__nav-link" to="/contactus">Contact Us</Link>
            <Link className="header__nav-link" to="/services">Services</Link>
            <Link className="header__nav-link" to="/gallery">Gallery</Link>
          </nav>
        
    </header>
  );
};

export default Header;
