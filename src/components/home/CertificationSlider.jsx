import React from 'react';
import Slider from 'react-slick';
import './CertificationSlider.css';

export default function CertificationSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const certificates = [
    '/images/home/fssai.png',
    '/images/home/ISO.png',
    '/images/home/HACCP.png',
    '/images/home/GMP.png',
    '/images/home/APEDA.png',
  ];

  return (
    <div className="container text-center my-5">
      <div className="brand-icon-wrapper">
        <img src="/images/icon-crops.png" alt="icon" className="brand-icon" />
      </div>
      <h2 className="slider-heading">Our Certifications</h2>

      <div className="slider-container">
        <Slider {...settings}>
          {certificates.map((img, index) => (
            <div key={index} className="certificate-slide">
              <img src={img} alt={`Certificate ${index + 1}`} className="img-fluid cert-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
