import React from 'react';
import { useParallax } from '../hooks/useScrollAnimation';
import '../styles/animations.css';

function Hero() {
  const [parallaxRef, offset] = useParallax(0.3);

  const scrollToProducts = (e) => {
    e.preventDefault();
    const productsSection = document.getElementById('products');
    if (productsSection) {
      const targetPosition = productsSection.offsetTop - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <section id="home" className="hero" ref={parallaxRef}>
      {/* Fondo mejorado con múltiples capas */}
      <div className="hero-background" style={{ transform: `translateY(${offset}px)` }}>
        <div className="hero-gradient-animated"></div>
        <div className="hero-grid-pattern"></div>
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
      
      <div className="hero-content">
        {/* Título impactante */}
        <h1 className="hero-title-main">
          <span className="title-line">Tiendita</span>
          <span className="title-line title-accent">Montti</span>
        </h1>
        
        <p className="hero-tagline">
          Joyería de acero inoxidable premium
        </p>
        
        {/* Botón CTA principal */}
        <div className="hero-cta">
          <button className="btn-hero-primary" onClick={scrollToProducts}>
            <span>Explorar Colección</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Stats minimalistas */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">23+</span>
            <span className="stat-label">Productos</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Premium</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Categorías</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator mejorado */}
      <div className="scroll-indicator" onClick={scrollToProducts}>
        <span>Descubre</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
