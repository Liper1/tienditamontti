import React, { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollAnimation';
import '../styles/animations.css';

function Navbar() {
  const scrolled = useScrollPosition(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled || mobileMenuOpen ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="nav-brand">
            <img src={`${import.meta.env.BASE_URL}assets/logo.svg`} alt="Tiendita Montti" className="brand-logo" />
            <h2>Tiendita Montti</h2>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-menu desktop-menu">
            <li><a onClick={() => scrollToSection('home')}>Inicio</a></li>
            <li><a onClick={() => scrollToSection('products')}>Productos</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contacto</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a onClick={() => scrollToSection('home')}>Inicio</a></li>
            <li><a onClick={() => scrollToSection('products')}>Productos</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
