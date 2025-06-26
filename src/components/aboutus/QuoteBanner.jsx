import React from "react";
import "./QuoteBanner.css";

export default function QuoteBanner() {
  return (
    <div className="quote-banner">
      <div className="quote-content">
        <img
          src="https://whitehillagro.com/images/main-slider/Handwithricegrain2.png"
          alt="Hand Holding Rice"
          className="hand-img"
        />
        <div className="quote-box">
          <p className="quote-text">
            Grains of excellence,<br />
            delivered with pride.
          </p>
        </div>
      </div>

      <div className="requirement-section">
        <p className="requirement-heading">Post your Requirement ?</p>
        <a href="/contact" className="tell-us-btn">Tell Us</a>
      </div>
    </div>
  );
}
