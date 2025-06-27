import React from 'react'
import "./BrandSlider.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function BrandSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  const brands = [
    { id: 1, img: "/images/home/PyareMohan.png", alt: "Pyare Mohan" },
    { id: 2, img: "/images/home/DreamLine.png", alt: "Dream Line" },
    { id: 3, img: "/images/home/ShreeSidh.png", alt: "Shree Sidh" },
  ]

  return (
    <div className="BrandSlider">
         <div className="brand-icon-wrapper">
        <img src="/images/icon-crops.png" alt="Crops Icon" className="brand-icon" />
      </div>
      <h2 className="slider-heading">Our Brands</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id} className="brand-slide">
              <div className="brand-card">
                <img src={brand.img} alt={brand.alt} />
                <div className="brand-overlay">{brand.alt}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
