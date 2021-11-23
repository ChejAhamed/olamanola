import React from 'react';
import { Link } from 'react-router-dom';

const Header = function () {
  return (
    <div className="header__nav-container">
      <h1>HEADEER</h1>
      <nav className="header__navegator">
        <Link className="header__nav-link" to="/">Dashboard</Link>
        <Link className="header__nav-link" to="/contactus">Contact Us</Link>
        <Link className="header__nav-link" to="/services">Services</Link>
        <Link className="header__nav-link" to="/gallery">Gallery</Link>
      </nav>
    </div>
  );
};

export default Header;
