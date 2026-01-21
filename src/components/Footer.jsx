import React from 'react';
import './Footer.css';
import facebook from '../images/facebook.png';
import logo from '../images/logo.png';
import whatsapp from '../images/whatsapp.png';
import  instagram from '../images/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__logo-box">
          <img src={logo} alt="Company logo" className="footer__logo" />
        </div>

       <section className="footer__address-section">
  <h3 className="footer__title">Address</h3>
  <address className="footer__address-content">
    <a
      href="https://www.google.com/maps/search/Svobody+str.+35+Kyiv+Ukraine"
      className="footer__address-link"
    >
      Svobody str. 35
      <br />
    Kyiv<br />
    Ukraine
    </a>
    
  </address>
</section>

        <section className="footer-join">
          <h3 className="footer-join__title">Contact us</h3>
          <ul className="social-networks-list">
            
            <li className="social-networks-list__item">
              <a href="https://www.instagram.com/" className="social-networks-list__link">
                <img src={instagram} alt="WhatsApp" className="social-networks-list__icon" />

              </a>
            </li>

            <li className="social-networks-list__item">
              <a href="https://www.facebook.com/?locale=uk_UA" className="social-networks-list__link ">
                <img src={facebook} alt="WhatsApp" className="social-networks-list__icon" />

              </a>
            </li>

            <li className="social-networks-list__item">
              <a href="https://www.whatsapp.com/?lang=uk" className="social-networks-list__link ">
                <img src={whatsapp} alt="WhatsApp" className="social-networks-list__icon" />

              </a>
            </li>

          </ul>
        </section>

      </div>
    </footer>
  );
};

export default Footer;