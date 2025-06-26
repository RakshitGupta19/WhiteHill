import React from 'react';
import { useLocation } from 'react-router-dom';
import './Banner.css';

export default function Banner() {
  const location = useLocation();

  const getBannerImage = () => {
    switch (location.pathname) {
      case '/':
        return '/images/banner.jpg';
      case '/about':
        return '/images/banner.jpg';
      case '/contact':
        return '/images/banner.jpg';
      case '/ourbrands':
        return '/images/banner.jpg';
      case '/infrastructure':
        return '/images/banner.jpg';
      case '/private-labelling':
        return '/images/banner.jpg';
      case '/products':
        return '/images/product-banner.jpg';
      default:
        return '/images/banner.jpg';
    }
  };

  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${getBannerImage()})` }}
    ></div>
  );
}
