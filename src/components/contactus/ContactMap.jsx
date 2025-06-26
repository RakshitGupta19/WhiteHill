import React from 'react';
import './ContactMap.css';

export default function ContactMap() {
  return (
    <div className="map-wrapper">
      <h2 className="map-heading">Locate Us</h2>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55298.009154814754!2d76.917896!3d29.975821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65319f46796e732a!2sWhite%20Hill%20Agro%20Products%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1613968009038!5m2!1sen!2sus" width="100%" height="700px" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
}
