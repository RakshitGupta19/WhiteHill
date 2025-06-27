import React from 'react';
import './Parallax.css';

export default function Parallax() {
  return (
    <div className="parallax-section">
      <div className="content-box container">
        <h2 className="parallax-text">
          "Your Path to Premium Rice Starts Here."
        </h2>
        <img src="/images/home/seedimage.png" alt="Seed" className="seed-image" />
      </div>
    </div>
  );
}
