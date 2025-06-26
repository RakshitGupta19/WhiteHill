import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <div className="form-page-wrapper">
      {/* Logo and Heading */}
      <div className="text-center logo-heading-wrapper">
        <img src="/images/icon-crops.png" alt="icon" className="form-icon" />
        <h2 className="form-heading">Fill Your Requirement</h2>
      </div>

      {/* Form Section */}
      <div className="form-section-wrapper">
        <div className="form-container">
          <form className="contact-form">
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <input type="text" className="form-control large-input" placeholder="Name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control large-input" placeholder="Email" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-2 mb-3 mb-md-0">
                <input type="text" className="form-control large-input" value="+91" disabled />
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <input type="text" className="form-control large-input" placeholder="Mobile" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control large-input" placeholder="City" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <input type="text" className="form-control large-input" placeholder="Country" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control large-input" placeholder="Organization" />
              </div>
            </div>

            <div className="mb-3 dropdown-wrapper">
              <select className="form-select large-input orange-select">
                <option>Additional Details (Optional)</option>
                <option>Bulk Order</option>
                <option>Export Inquiry</option>
                <option>Pricing Information</option>
              </select>
            </div>

            <div className="mb-4">
              <textarea className="form-control textarea-box" placeholder="Your message here"></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}