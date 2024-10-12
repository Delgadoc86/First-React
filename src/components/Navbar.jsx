// src/components/Navbar.jsx
import React, { useState } from 'react';  // Importamos React y el hook useState una sola vez
import './Navbar.css';  // Importamos el archivo de estilos CSS


// Definimos un componente funcional llamado Navbar. Esto es una función de React que retorna JSX.
const Navbar = () => {
  // El return contiene el JSX, que es la estructura de lo que se verá en la página cuando este componente sea renderizado.
  return (
    // La etiqueta <nav> es el contenedor principal de la barra de navegación. Es un elemento semántico en HTML para la navegación.
    <nav className="navbar">
      {/* Dentro de la barra de navegación, tenemos un div con la clase "logo" que contiene el título del sitio web. */}
      <div className="logo">
        <h1>Mi Sitio</h1> {/* Este h1 representa el nombre o título del sitio web */}
      </div>
      
      {/* Este ul (lista desordenada) contiene los enlaces de navegación. Es común usar listas para los menús de navegación. */}
      <ul className="nav-links">
        {/* Cada li (elemento de lista) tiene un enlace dentro con href que apunta a diferentes secciones del sitio */}
        <li><a href="/inicio">Inicio</a></li>
        <li><a href="/servicios">Servicios</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      
      {/* Aquí tenemos un div que actuará como el "botón" del menú hamburguesa en pantallas pequeñas. */}
      <div className="menu-toggle">
        {/* Las tres líneas que forman el icono del menú hamburguesa, representadas por elementos <span>. */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

// Exportamos el componente Navbar para poder utilizarlo en otros archivos.
export default Navbar;

