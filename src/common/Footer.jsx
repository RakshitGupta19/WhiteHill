import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row">
          {/* Logo and Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-logo">
              <div className="logo-icon2">
                <img src="/images/logo.png" alt="Logo" />
              </div>
            </div>
          </div>

          {/* Pages Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Our Brands</a></li>
              <li><a href="#">Infrastructure</a></li>
              <li><a href="#">Private Labelling</a></li>
              <li><a href="#">Partnership</a></li>
              <li><a href="#">Contact</a></li>
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
                <span className="phone-numbers">+91 99919-99785</span>
                <span className="contact-value"> (or) </span>
                <span className="phone-numbers">+91 99913-33785</span>
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
            Created by: <a href="#" target="_blank" rel="noopener noreferrer">Pitamaas</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
