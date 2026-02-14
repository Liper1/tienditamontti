import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contacto</h2>
        <p className="section-description">
          ¿Tienes preguntas? Estamos aquí para ayudarte
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📱 WhatsApp</h3>
              <p>Contáctanos directamente</p>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                Enviar mensaje
              </a>
            </div>
            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>contacto@tienditamontti.com</p>
            </div>
            <div className="contact-item">
              <h3>📍 Ubicación</h3>
              <p>Ciudad de México, México</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Envíanos un mensaje</h3>
            <form>
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu email" required />
              <textarea placeholder="Tu mensaje" rows="5" required></textarea>
              <button type="submit" className="btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
