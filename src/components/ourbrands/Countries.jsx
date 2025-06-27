import React from 'react';
import './Countries.css';

export default function Countries() {
  const countries = [
    { name: 'MADAGASCAR', image: '/images/ourbrands/madagascar.png' },
    { name: 'NEW ZEALAND', image: '/images/ourbrands/newzealand.png' },
    { name: 'MIDDLE EAST', image: '/images/ourbrands/middleeast.png' }
  ];

  return (
    <div className="countries-wrapper">
      {/* Header */}
      <div className="countries-header">
        <img src="/images/icon-crops.png" alt="Wheat Logo" className="countries-icon" />
        <h2 className="countries-title">Countries We Export</h2>
      </div>

      {/* Image Grid Inside Container */}
      <div className="countries-grid-container">
        <div className="countries-grid">
          {countries.map((country, index) => (
            <div key={index} className="country-card">
              <img src={country.image} alt={country.name} className="country-img" />
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="countries-description">
        Lead the rice export market with complete processing and packaging solutions,
        serving as the premier destination for our clients' needs
      </p>
    </div>
  );
}
