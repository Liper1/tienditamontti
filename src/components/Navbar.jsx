import React from 'react';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <h2>Tiendita Montti</h2>
        </div>
        <ul className="nav-menu">
          <li><a onClick={() => scrollToSection('home')}>Inicio</a></li>
          <li><a onClick={() => scrollToSection('products')}>Productos</a></li>
          <li><a onClick={() => scrollToSection('about')}>Acerca de</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
