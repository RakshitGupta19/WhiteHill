import React from "react";
import Slider from "react-slick";
import "./BrandSlider.css";

export default function BrandSlider() {
  const brands = [
    "/images/about/Musafa.png",
    "/images/about/SSTibar.png",
    "/images/about/RajaBeta.png",
    "/images/about/SwordRice.png",
    "/images/about/WhiteHill.png",
    "/images/about/DL1121.png",
    "/images/about/NayshaRice.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="brand-slider-section">
      <img src="/images/icon-crops.png" alt="Icon" className="brand-slider-icon" />
      <h2 className="slider-heading">Our Brands</h2>

      <div className="brand-slider-container">
        <Slider {...settings}>
          {brands.map((src, index) => (
            <div className="brand-slide" key={index}>
              <img src={src} alt={`Brand ${index + 1}`} className="brand-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
