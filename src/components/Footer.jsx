import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__logo-box">
          <div className="logo">
          </div>
        </div>

        <section className="footer__address-section">
          <h3 className="footer__title">Address</h3>
          <address className="footer__address-content" href="https://www.google.com/maps/search/+Svobody+str.+35+++++++++++++Kyiv+++++++++++++Ukraine/@50.4413976,30.5218932,7691m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D">
            Svobody str. 35
            Kyiv
            Ukraine
          </address>
        </section>

        <section className="footer-join">
          <h3 className="footer-join__title">Contact us</h3>
          <ul className="social-networks-list">
            
            <li className="social-networks-list__item">
              <a href="#" className="social-networks-list__link">
                <svg className="social-networks-list__icon">
                  <use href="."></use>
                </svg>
              </a>
            </li>

            <li className="social-networks-list__item">
              <a href="#" className="social-networks-list__link ">
                <svg className="social-networks-list__icon">
                  <use href="."></use>
                </svg>
              </a>
            </li>

            <li className="social-networks-list__item">
              <a href="#" className="social-networks-list__link ">
                <svg className="social-networks-list__icon">
                  <use href="."></use>
                </svg>
              </a>
            </li>

          </ul>
        </section>

      </div>
    </footer>
  );
};

export default Footer;