import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.scss'
const Footer = function () {
  return (
    <footer className="footer">
      <h2>FOOOOOOOOOOOOOOOOOOOOTER</h2>
      <div className="footer__social-media">
        <SocialIcon url="https://facebook.com/olamanola"  />
        <SocialIcon url="https://instagram.com/olamanola" />
        <SocialIcon url="https://twitter.com/olamanola" />
        <SocialIcon url="https://youtube.com/olamanola" />
      </div>
      
    </footer>
  );
};

export default Footer;
