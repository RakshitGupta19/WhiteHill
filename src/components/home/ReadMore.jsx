import React from 'react';
import "./ReadMore.css"

export default function ReadMore() {
  return (
    <>
      {/* ReadMore Section */}
      <div className='ReadMore'>
        <div className="container">
          <div className="ReadMore-content">
            <div className="ReadLeft">
              <img src="/images/home/3sec.png" alt="Farmer with rice" className="farmer-illustration" />
            </div>
            <div className="ReadRight">
              <p className="company-text">
                <span className="company-name">White Hill Agro</span> is the Miller, Supplier & Exporter of Basmati Rice located in 
                Haryana District- Kurukshetra (India). Since establishment, we have been serving our 
                domestic and international buyers with the finest quality of Basmati in the form of 
                Raw, Steam, Sella/Parboiled & Golden Sella rice.
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}