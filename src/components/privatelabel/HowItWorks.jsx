import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    {
      title: "Consultation",
      description:
        "We'll start by understanding your brand's vision, target market, and packaging requirements.",
      image: "/images/seeds.png", // Use your own image paths
    },
    {
      title: "Sampling",
      description:
        "Once we have a clear understanding of your needs, we'll provide you with samples of our rice products for evaluation.",
      image: "/images/seeds.png",
    },
    {
      title: "Customization",
      description:
        "Work closely with our design team to create packaging that reflects your brand's identity and resonates with your target audience",
      image: "/images/seeds.png",
    },
    {
      title: "Production",
      description:
        "Upon finalizing the design and product specifications, we'll commence production, ensuring timely delivery of your private label rice.",
      image: "/images/seeds.png",
    },
    {
      title: "Timely Delivery",
      description:
        "Following multiple quality checks, we are dedicated to ensuring that all aspects of our products meet the highest standards before prompt delivery to our customers.",
      image: "/images/seeds.png",
    },
    {
      title: "Support",
      description:
        "Our dedicated team will be available to assist you throughoul the process, from initial consolation to postproduction support.",
      image: "/images/seeds.png",
    },
  ];

  return (
    <div className="how-wrapper">
      <div className="how-heading">
        <img src="/images/icon-crops.png" alt="icon" className="how-icon" />
        <h2 className="how-title">How it Works</h2>
      </div>

      <div className="how-steps">
        {steps.map((step, index) => (
          <div key={index} className={`how-step ${index % 2 !== 0 ? "reverse" : ""}`}>
            <div className="how-img">
              <img src={step.image} alt={step.title} />
            </div>
            <div className="how-content">
              <h3><strong>{step.title}:</strong> {step.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
