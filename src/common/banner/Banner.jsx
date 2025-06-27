import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Banner.css';

export default function Banner() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 575);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBannerImage = () => {
    const path = location.pathname;
    const mobileSuffix = isMobile ? '-mobile' : '';

    switch (path) {
      case '/':
        return `/images/banner/banner${mobileSuffix}.jpg`;
      case '/about':
        return `/images/banner/about-banner${mobileSuffix}.jpg`;
      case '/contact':
        return `/images/banner/contact-banner${mobileSuffix}.jpg`;
      case '/ourbrands':
        return `/images/banner/ourbrands-banner${mobileSuffix}.jpg`;
      case '/infrastructure':
        return `/images/banner/infrastructure-banner${mobileSuffix}.jpg`;
      case '/private-labelling':
        return `/images/banner/privatelabel-banner${mobileSuffix}.jpg`;
      case '/products':
        return `/images/banner/product-banner${mobileSuffix}.jpg`;
      default:
        return `/images/banner/banner${mobileSuffix}.jpg`;
    }
  };

  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${getBannerImage()})` }}
    ></div>
  );
}
