import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
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
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">PRODUCTS</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#">
                  WE SERVE
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/partnership">Partnership</Link></li>
                  <li><Link className="dropdown-item" to="/private-labelling">Private Labelling</Link></li>
                  <li><Link className="dropdown-item" to="/infrastructure">Infrastructure</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/ourbrands">OUR BRANDS</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#">
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
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
