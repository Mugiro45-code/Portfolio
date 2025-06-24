import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => setNavOpen(!navOpen);
  const handleNavLinkClick = () => setNavOpen(false);

  return (
    <header
      className="hero-section d-flex flex-column justify-content-center align-items-center text-white animate__animated animate__fadeInDown"
      style={{ paddingTop: 5 }}
    >
      <nav className="navbar navbar-expand-md navbar-dark w-100">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-3" to="/">MUGILAN S</Link>
          {/* Hamburger toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${navOpen ? ' show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-1 mb-lg-0 text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={handleNavLinkClick}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio" onClick={handleNavLinkClick}>Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" onClick={handleNavLinkClick}>Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={handleNavLinkClick}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hero-content text-center">
        <img
          src="/assets/MG-Logo.png"
          alt="MG Logo"
          style={{ height: "150px", width: "150px", display: "block", margin: "0 auto 10px auto" }}
        />
        <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInUp">
          Hi, I'm <span className="brand-underline">MUGILAN S</span>
        </h1>
        <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
          Software Engineer - Crafting Elegant Solutions with Code.
        </p>
        <a href="#portfolio" className="btn btn-primary btn-lg mt-3 shadow animate__animated animate__fadeInUp animate__delay-2s">
          View My Work
        </a>
      </div>
    </header>
  );
};

export default Header;