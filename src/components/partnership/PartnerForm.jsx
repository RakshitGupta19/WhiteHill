import React, { useState } from 'react';
import './PartnerForm.css';

export default function PartnerForm() {
  const [formType, setFormType] = useState('international');

  const isInternational = formType === 'international';

  return (
    <div className="container partner-form py-5">
      <div className="text-center mb-4">
        <img src="/images/icon-crops.png" alt="icon" className="icon-img mb-3" />
        <h2 className="main-heading">
          Become an International Buyer / Domestic Distributor Form
        </h2>
      </div>

      <div className="text-center mb-4">
        <button
          className={`btn mx-2 mb-4 ${formType === 'international' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setFormType('international')}
        >
          INTERNATIONAL BUYER
        </button>
        <button
          className={`btn mx-2 mb-4 ${formType === 'domestic' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setFormType('domestic')}
        >
          DOMESTIC DISTRIBUTOR
        </button>
      </div>

      <form className="form-box">
        <div className="row mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="First Name" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Company Name" />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Phone Number" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Website" />
          </div>
        </div>

        {isInternational ? (
          <>
            <div className="row mb-3">
              <div className="col-md-6">
                <select className="form-select">
                  <option>-Select Variety Preferred-</option>
                </select>
              </div>
              <div className="col-md-6">
                <select className="form-select">
                  <option>-Select Sub Variety-</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <select className="form-select">
                  <option>-Select Packaging Material-</option>
                </select>
              </div>
              <div className="col-md-6">
                <select className="form-select">
                  <option>-Select Packaging Type-</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <select className="form-select">
                  <option>-Select Packaging Size (if KG chosen)-</option>
                </select>
              </div>
              <div className="col-md-6">
                <select className="form-select">
                  <option>-Select Packaging Size (if LBS chosen)-</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Destination Port" />
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Any Additional Requirement" />
            </div>
          </>
        ) : (
          <>
            <div className="row mb-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Country" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="State" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Your Area of Distribution" />
              </div>
              <div className="col-md-6">
                <select className="form-select">
                  <option>-Select Brand Choice-</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Minimum Quantity Sold (Per Month)" />
            </div>
          </>
        )}

        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Subject" />
        </div>

        <div className="mb-3">
          <textarea className="form-control" rows="3" placeholder="Message"></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-5">Submit</button>
        </div>
      </form>
    </div>
  );
}
