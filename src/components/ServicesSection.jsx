import React from 'react';
import './ServicesSection.css';  // Agregamos estilos

const ServicesSection = () => {
  return (
    <section className="services" id="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Desarrollo Web</h3>
          <p>Creamos sitios web modernos y responsivos para tu negocio.</p>
        </div>
        <div className="service-item">
          <h3>Marketing Digital</h3>
          <p>Impulsa tu negocio con nuestras estrategias de marketing online.</p>
        </div>
        <div className="service-item">
          <h3>Soporte Técnico</h3>
          <p>Ofrecemos soporte y mantenimiento técnico de calidad.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
