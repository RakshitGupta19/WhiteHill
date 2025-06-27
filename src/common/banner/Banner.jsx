import React from 'react';
import { useLocation } from 'react-router-dom';
import './Banner.css';

export default function Banner() {
  const location = useLocation();

  const getBannerImage = () => {
    switch (location.pathname) {
      case '/':
        return '/images/banner/banner.jpg';
      case '/about':
        return '/images/banner/about-banner.jpg';
      case '/contact':
        return '/images/banner/contact-banner.jpg';
      case '/ourbrands':
        return '/images/banner/ourbrands-banner.jpg';
      case '/infrastructure':
        return '/images/banner/infrastructure-banner.jpg';
      case '/private-labelling':
        return '/images/banner/privatelabel-banner.jpg';
      case '/products':
        return '/images/banner/product-banner.jpg';
      default:
        return '/images/banner/banner.jpg';
    }
  };

  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${getBannerImage()})` }}
    ></div>
  );
}
