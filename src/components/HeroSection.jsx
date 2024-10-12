import React from 'react';
import './HeroSection.css';  // Agregamos estilos

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bienvenido a Mi Sitio</h1>
        <p>Descubre nuestros servicios y soluciones para tu negocio.</p>
        <a href="#servicios" className="cta-button">Ver Servicios</a>  {/* Enlace a la sección de servicios */}
      </div>
    </section>
  );
};

export default HeroSection;
