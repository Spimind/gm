import React from 'react';
import './styles.css';

const DosColumnas = () => {
  return (
    <section className="dos-columnas" id="experiencia">
      <div className="container">
        <div className="columnas-grid">
          {[1, 2].map((item) => (
            <div key={item} className="columna">
              <h2>No deje pasar más tiempo...</h2>
              <p>Obtenga ahora una consulta sin costo y póngase en manos de nuestros expertos.</p>
              <a href='#contacto'>Más detalles</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DosColumnas;