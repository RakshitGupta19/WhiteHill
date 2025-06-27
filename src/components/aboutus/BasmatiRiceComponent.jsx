import React from "react";
import Slider from "react-slick";
import "./BasmatiRiceComponent.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/images/about/about.png",
  "/images/about/about1.png",
  "/images/about/about2.png",
  "/images/about/about3.png",
];

export default function BasmatiRiceComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="basmati-container">
      <h2 className="slider-heading">
        Basmati Rice Manufacturer, Supplier and Exporter from India.
      </h2>
      <hr className="title-underline" />

      <p className="description">
        <span className="first-letter">W</span>e are Miller, Supplier and Exporters of Basmati Rice located in Haryana District- Kurukshetra (India). Since establishment, we have been serving our domestic and international buyers with the finest quality of Basmati in the form of Raw, Steam, Sella/Parboiled & Golden Sella rice.
      </p>

      <div className="slider-wrapper">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div className="image-box" key={index}>
              <img src={img} alt={`Factory ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <p className="description">
        We have a Milling unit with 100 metric tonnes daily production capacity and a sorting unit with 80 to 90 metric tonnes processing capacity.Our rice is put through quality tests by experts in a lab to make sure the best reaches our customers.
        </p>
    </div>
  );
}
