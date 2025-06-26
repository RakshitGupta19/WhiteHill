import React from 'react';
import { Link } from 'react-router-dom';
import './GetStarted.css';

export default function GetStarted() {
  return (
    <div className="get-started-wrapper d-flex justify-content-center">
      <Link to="/contact" className="btn custom-btn">
        Get Started
      </Link>
    </div>
  );
}
