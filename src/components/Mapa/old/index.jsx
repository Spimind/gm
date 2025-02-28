import React from 'react';
import './styles.css';

const Mapa = () => {
  return (
    <section className="mapa-section">
      <div className="mapa-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.8876666661417!2d-100.3872!3d20.5923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b2975a8d68f%3A0x4c5c5f1c5f5c5f5c!2sAv.%20Bernardo%20Quintana%20134%2C%20Centro%20Sur%2C%2076090%20Santiago%20de%20Quer%C3%A9taro%2C%20Qro.!5e0!3m2!1ses!2smx!4v1625123456789!5m2!1ses!2smx"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Gama y Asociados"
          className="mapa-iframe"
        ></iframe>
      </div>
    </section>
  );
};

export default Mapa;
