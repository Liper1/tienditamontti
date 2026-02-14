import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Acerca de Nosotros</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              En <strong>Tiendita Montti</strong>, nos especializamos en joyería de acero inoxidable 
              de la más alta calidad. Cada pieza está cuidadosamente seleccionada para 
              ofrecerte elegancia, durabilidad y un estilo único.
            </p>
            <p>
              Nuestras joyas de acero son hipoalergénicas, resistentes al agua y mantienen 
              su brillo por mucho más tiempo. Perfectas para el uso diario o para ocasiones 
              especiales.
            </p>
            <p>
              Nos comprometemos a ofrecer productos de calidad a precios accesibles, 
              porque creemos que todos merecen lucir elegantes y sentirse seguros con 
              sus accesorios.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <h3>✨ Calidad Premium</h3>
              <p>Acero inoxidable de grado quirúrgico</p>
            </div>
            <div className="feature">
              <h3>💎 Diseños Únicos</h3>
              <p>Colecciones minimalistas y elegantes</p>
            </div>
            <div className="feature">
              <h3>🌟 Durabilidad</h3>
              <p>Resistente al agua y al desgaste</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
