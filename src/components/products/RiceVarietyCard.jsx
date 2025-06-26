import React from 'react';
import { Link } from 'react-router-dom';
import './RiceVarietyCard.css';

export default function RiceVarietyCard({ name, features, forms }) {
  return (
    <div className="rice-card-container">
      <div className="rice-image">
        <img src="/images/riceimage.png" alt="Rice Bowl" />
      </div>

      <div className="rice-details">
        <h2>{name}</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index}><strong>{feature}</strong></li>
          ))}
        </ul>
        <div className="available-forms">
          {forms.map((form, index) => (
            <p key={index}>{form}</p>
          ))}
        </div>
      </div>

      <div className="enquire-button">
        <Link to="/contact">
          <button>Enquire Now</button>
        </Link>
      </div>
    </div>
  );
}
