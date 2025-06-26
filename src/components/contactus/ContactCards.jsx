import React from 'react';
import './ContactCards.css';

export default function ContactCards() {
  return (
    <div className="container my-5">
      <p className="intro-text text-center mx-auto">
        Our rice mill is situated in Haryana, India, within the esteemed basmati production belt of the country. Being in this prime location allows us to offer best quality India Rice at the most competitive price.
      </p>

      <div className="row text-center contact-cards mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-dark text-white">Address</div>
            <div className="card-body">
              <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
              <h6>Locate Us</h6>
              <p className="mb-0">
                Dand Kaithal Road, Village Kamoda,<br />
                District- Kurukshetra, Haryana, INDIA
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-dark text-white">Call Now</div>
            <div className="card-body">
              <i className="fas fa-phone fa-2x mb-3"></i>
              <h6>Call Us</h6>
              <p className="mb-0">+91 70278-70503</p>
              <p>+91 70278-70508</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-dark text-white">Email Us</div>
            <div className="card-body">
              <i className="fas fa-envelope fa-2x mb-3"></i>
              <h6>Info Services</h6>
              <p className="mb-0">Customercare@whitehillagro.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
