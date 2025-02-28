import React, { useState } from 'react';
import './styles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/"><img src="./images/logo_full.png" width="auto" height="65px" alt='Gama & Asociados Abogados'></img></a>
        </div>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Menú">
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`nav-wrapper ${isOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
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