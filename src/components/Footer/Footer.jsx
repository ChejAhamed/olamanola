import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.scss'
const Footer = function () {
  return (
    <footer className="footer">
      <div className="footer__topfooter">
       <div className="footer__topfooter__policy">
         Private Policy
       </div>
        <div className="footer__topfooter__social-media">
          <h4>Share with Us</h4>
          <SocialIcon url="https://facebook.com/olamanola"  />
          <SocialIcon url="https://instagram.com/olamanola" />
          <SocialIcon url="https://twitter.com/olamanola" />
          <SocialIcon url="https://youtube.com/olamanola" />
        </div>
      </div>
      <div className="footer__bottomfooter">
      © 2021 Olamanola | Site by CH13 Desing
      </div>

      
    </footer>
  );
};

export default Footer;
