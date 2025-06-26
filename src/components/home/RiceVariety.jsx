import React, { useState } from 'react';
import './RiceVariety.css';

export default function RiceVariety() {
  const [category, setCategory] = useState('Basmati');

  const basmatiRices = [
    { id: 1, name: '1121 Basmati Rice', image: '/images/riceimage.png' },
    { id: 2, name: '1509 Basmati Rice', image: '/images/riceimage.png' },
    { id: 3, name: '1401 Basmati Rice', image: '/images/riceimage.png' },
  ];

  const nonBasmatiRices = [
    { id: 4, name: 'Sona Masoori Rice', image: '/images/riceimage.png' },
    { id: 5, name: 'Kolam Rice', image: '/images/riceimage.png' },
    { id: 6, name: 'IR 64 Rice', image: '/images/riceimage.png' },
  ];

  const riceList = category === 'Basmati' ? basmatiRices : nonBasmatiRices;

  return (
    <div className="container text-center my-5">
      <div className="brand-icon-wrapper">
        <img src="/images/icon-crops.png" alt="Crops Icon" className="brand-icon" />
      </div>
      <h2 className="slider-heading">Indian Rice Varieties We Offer</h2>

      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn btn-category ${category === 'Basmati' ? 'active' : ''}`}
          onClick={() => setCategory('Basmati')}
        >
          Basmati
        </button>
        <button
          className={`btn btn-category ms-3 ${category === 'Non-Basmati' ? 'active' : ''}`}
          onClick={() => setCategory('Non-Basmati')}
        >
          Non-Basmati
        </button>
      </div>

      <div className="border rounded p-4 rice-container">
        <div className="row justify-content-center">
          {riceList.map((rice) => (
            <div key={rice.id} className="col-md-4 mb-4">
              <img
                src={rice.image}
                alt={rice.name}
                className="img-fluid rice-image"
              />
              <p className="mt-3 rice-name">{rice.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
