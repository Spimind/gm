// src/components/Mapa/index.jsx
import React from 'react';
import './styles.css';

const Mapa = () => {
  return (
    <section className="mapa-seccion" id="mapa-seccion">
      <div className="mapa-wrapper">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3734.2863904993883!2d-100.42575972426347!3d20.617180201786677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAv.%205%20de%20Febrero%20%231351%2C%20Edificio%20Roble%2C%20Piso%204%2C%20Interior%20402%20%20Zona%20Industrial%20Benito%20Ju%C3%A1rez%2C%20C.P.%2076120%20%20Quer%C3%A9taro%2C%20Qro.%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1740687027950!5m2!1ses-419!2smx"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Gama y Asociados"
        />
      </div>
    </section>
  );
};

export default Mapa;