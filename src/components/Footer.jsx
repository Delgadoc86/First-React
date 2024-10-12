import React from 'react';
import './Footer.css';  // Agregamos estilos para el footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Mi Sitio. Todos los derechos reservados.</p>
      <ul className="footer-links">
        <li><a href="/terminos">Términos y Condiciones</a></li>
        <li><a href="/privacidad">Política de Privacidad</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
