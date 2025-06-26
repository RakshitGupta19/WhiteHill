import React from 'react';
import "./WeServe.css"

export default function WeServe() {
  return (
    <div className="weServe-container container">
      <div className="weServe-decorative-bg">
        <div className="weServe-bg-curve"></div>
        <div className="weServe-bg-curve"></div>
        <div className="weServe-bg-curve"></div>
      </div>

      <div className="weServe-content-wrapper">
        <div className="brand-icon-wrapper mb-4">
          <img src="/images/icon-crops.png" alt="Crops Icon" className="brand-icon" />
        </div>
        <div className="weServe-section-header">
          <h1 className='slider-heading'>We Serve</h1>
          <p>
            Delivering excellence across domestic and international markets with innovative rice
            processing and premium private labeling services.
          </p>
        </div>

        {sections.map((section, index) => (
          <div key={index} className={`weServe-business-section ${section.type}`}>
            <div className={`weServe-section-content ${index % 2 !== 0 ? 'weServe-reverse' : ''}`}>
              <div className="weServe-content-left">
                <div className="weServe-icon-container">{section.icon}</div>
                <h2 className="weServe-business-title">{section.title}</h2>
                <p className="weServe-business-description">{section.description}</p>
              </div>
              <div className="weServe-content-right">
                <div className="weServe-visual-element">
                  <div className="weServe-visual-content">
                    <div className="weServe-stats-rows">
                      {section.stats.map((stat, i) => (
                        <div key={i} className="weServe-stat-item">
                          <div className="weServe-stat-content">
                            <span className="weServe-stat-number">{stat.number}</span>
                            <span className="weServe-stat-label">{stat.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {index < sections.length - 1 && <div className="weServe-connecting-line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

const sections = [
  {
    type: 'domestic',
    icon: '🏠',
    title: 'Domestic Market',
    description:
      'Our PAN India network spans across more than 26 Indian states. With in-house milling, processing, and packaging, we deliver top-quality rice to our customers.',
    stats: [
      { number: '26+', label: 'States' },
      { number: '100%', label: 'Quality' },
      { number: '500+', label: 'Distributors' },
    ],
  },
  {
    type: 'export',
    icon: '🌍',
    title: 'Export Market',
    description:
      'Beyond India, our products are making waves in the Middle East, Madagascar, and New Zealand as we grow globally.',
    stats: [
      { number: '15+', label: 'Countries' },
      { number: '50+', label: 'Partners' },
      { number: 'ISO', label: 'Certified' },
    ],
  },
  {
    type: 'private',
    icon: '⭐',
    title: 'Private Labelling',
    description:
      'Our Private Label Program is designed for your brands needs. Elevate your brand with premium quality rice, tailored for you.',
    stats: [
      { number: '100+', label: 'Brands' },
      { number: '24/7', label: 'Support' },
      { number: 'Top', label: 'Quality' },
    ],
  },
];