import React from "react";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const data = [
    { text: "Rice Mill", image: "/images/ricemill.png" },
    { text: "Quality Rice", image: "/images/ricemill.png" },
    { text: "Active Management", image: "/images/ricemill.png" },
    { text: "Strong Infrastructure", image: "/images/ricemill.png" },
    { text: "Packaging Plant", image: "/images/ricemill.png" },
    { text: "Large Warehouses", image: "/images/ricemill.png" },
    { text: "Quality Testing Labs", image: "/images/ricemill.png" },
    { text: "Dedicated Team", image: "/images/ricemill.png" },
    
  ];

  return (
    <div className="why-choose-wrapper">
      <div className="why-intro">
        <p>
          Welcome to <strong>Our Private Label Rice Program</strong><br />
          At White Hill Agro, we understand the importance of offering
          high-quality products under your own brand. That's why we're thrilled
          to introduce our <strong>Private Label Rice</strong> Program, designed
          to meet the unique needs of your brand and customers. <br />
          Elevate your brand with our premium quality rice, tailored to your specifications:
        </p>
      </div>

      <div className="why-heading">
        <img src="/images/icon-crops.png" alt="icon" className="why-icon" />
        <h2 className="why-title">Why Choose Us</h2>
      </div>

      <div className="why-choose-section">
        {data.map((item, index) => (
          <div
            key={index}
            className={`why-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="why-image">
              <img src={item.image} alt={item.text} />
            </div>
            <div className="why-text">
              <h3>{item.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
