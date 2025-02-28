// src/components/Navbar/index.jsx
import React, { useState } from 'react';
import './styles.css';
// Importar el logo desde la ubicación correcta en src/assets/images
import logo from './logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* Si el logo está en la carpeta public, usa la ruta pública */}
          <img 
            src={process.env.PUBLIC_URL + './logo.png'} 
            alt="GAMA Y ASOCIADOS" 
          />
        </div>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;