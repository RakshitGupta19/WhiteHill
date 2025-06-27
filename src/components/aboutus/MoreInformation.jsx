import React from "react";
import "./MoreInformation.css";

export default function MoreInformation() {
  const data = [
    ["Nature of Business", "Manufacture, Processor & Exporter"],
    ["Year of Establishment", "2018"],
    ["Products", "Basmati & Non Basmati Rice"],
    ["Factory Address", "Kamoda-136119, District-Kurukshetra, Haryana(India)"],
    ["Production Line", "03 (Automatic)"],
    ["Production Capacity", "3,000 Metric Tons Monthly"],
    ["No. of Warehouse", "06"],
    ["Warehouse Capacity", "25,000 Metric Tons"],
    ["Annual Turnover", "Rs.100 Crore"],
    ["Main Overseas Market", "New Zealand, Middle East, Russia & Madagascar"],
    ["Nearest Port", "Mundra Port, Gujarat(India)"],
    ["Ownership Type", "Private Limited"],
  ];

  return (
    <div className="more-info-section">
      <img src="/images/icon-crops.png" alt="wheat icon" className="top-icon" />
      <h2 className="slider-heading">More Information</h2>

      <div className="info-table">
        {data.map(([label, value], index) => (
          <div className="row" key={index}>
            <div className="cell label">{label}</div>
            <div
              className="cell value"
              style={{ backgroundImage: `url('/images/bgabout.png')` }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
