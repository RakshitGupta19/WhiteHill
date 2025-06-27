import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-logo">
              <div className="logo-icon2">
                <Link to="/">
                  <img src="/images/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pages Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/ourbrands">Our Brands</Link></li>
              <li><Link to="/infrastructure">Infrastructure</Link></li>
              <li><Link to="/private-labelling">Private Labelling</Link></li>
              <li><Link to="/partnership">Partnership</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Keep in Touch Section */}
          <div className="col-lg-5 col-md-12 mb-4">
            <h3 className="footer-section-title">Keep in Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Address :</span>
                <span className="contact-value">Village Sirsama Ladwa Road, Kurukshetra, Haryana India</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone :</span>
                <a href="tel:+919991999785" className="phone-numbers">+91 99919-99785</a>
                <span className="contact-value"> (or) </span>
                <a href="tel:+919991333785" className="phone-numbers">+91 99913-33785</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email :</span>
                <a href="mailto:customercare@whitehillagro.com" className="email-link">
                  customercare@whitehillagro.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-section">
          <p className="copyright-text">
            © Copyright White Hill Agro Products Pvt. Ltd. — All Rights Reserved
          </p>
          <p className="created-by">
            Created by: <a href="https://www.pitamaas.com/" target="_blank" rel="noopener noreferrer">Pitamaas</a>
          </p>
        </div>
      </div>
    </footer>
  );
}