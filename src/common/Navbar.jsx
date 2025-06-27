import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  
  // Function to check if current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to check if current path is within a dropdown section
  const isDropdownActive = (paths) => {
    return paths.some(path => location.pathname === path);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="logo-icon">
              <img src="/images/logo.png" alt="Logo" />
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
                  to="/about"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/products') ? 'active' : ''}`} 
                  to="/products"
                >
                  PRODUCTS
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link 
                  className={`nav-link dropdown-toggle ${isDropdownActive(['/partnership', '/private-labelling', '/infrastructure']) ? 'active' : ''}`} 
                  to="#"
                >
                  WE SERVE
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link 
                      className={`dropdown-item ${isActive('/partnership') ? 'active' : ''}`} 
                      to="/partnership"
                    >
                      Partnership
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className={`dropdown-item ${isActive('/private-labelling') ? 'active' : ''}`} 
                      to="/private-labelling"
                    >
                      Private Labelling
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className={`dropdown-item ${isActive('/infrastructure') ? 'active' : ''}`} 
                      to="/infrastructure"
                    >
                      Infrastructure
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/ourbrands') ? 'active' : ''}`} 
                  to="/ourbrands"
                >
                  OUR BRANDS
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle" 
                  to="#"
                >
                  CATALOGS
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/catalogs/nysha.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Naysha
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/catalogs/sword.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sword
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}