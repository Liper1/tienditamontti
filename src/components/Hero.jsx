import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Tiendita Montti</h1>
        <p className="hero-subtitle">Joyería de Acero Inoxidable</p>
        <p className="hero-description">
          Descubre nuestra colección de joyas de acero de alta calidad. 
          Elegancia, durabilidad y estilo que perdura.
        </p>
        <a 
          href="#products" 
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Ver Productos
        </a>
      </div>
    </section>
  );
}

export default Hero;
