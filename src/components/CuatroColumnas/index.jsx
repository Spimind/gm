import React from 'react';
import './styles.css';

const CuatroColumnas = () => {
  return (
    <section className="cuatro-columnas">
      <div className="container">
        <div className="columnas-grid">
          {[1].map((item) => (
            <div key={item} className="columna">
              <div class='roundedImg'><div class='Iconimg1'></div></div>
              <h2>Pensiones Alimenticias</h2>
              <p>En Gama y Asociados, te ayudamos a reclamar la pensión alimenticia de forma legal, rápida y efectiva, garantizando el bienestar de tus hijos. Ellos merecen estabilidad, haz valer sus derechos.</p>
              <h3>Agenda una consulta gratuita hoy mismo.</h3>
              <a href='aa.hml'>[+] Más información</a>
            </div>
          ))}
          {[2].map((item) => (
            <div key={item} className="columna">
              <div class='roundedImg'><div class='Iconimg2'></div></div>
              <h2>Contratos de Arrendamiento</h2>
              <p>Redactamos y validamos contratos de arrendamiento sólidos y pólizas jurídicas que garantizan el cumplimiento de pagos y protección ante cualquier conflicto. No pongas en riesgo tu propiedad, protege tu inversión.</p>
              <h3>Consulta con un experto en contratos.</h3>
              <a href='aa.hml'>[+] Más información</a>
            </div>
          ))}
          {[3].map((item) => (
            <div key={item} className="columna">
              <div class='roundedImg'><div class='Iconimg3'></div></div>
              <h2>Garantías Patrimoniales</h2>
              <p>Te ayudamos a implementar estrategias legales que protejan tus activos, asegurando que tu patrimonio quede a salvo de embargos y disputas legales. Tu futuro y el de tu familia merecen seguridad.</p>
              <h3>Agenda una asesoría personalizada hoy.</h3>
              <a href='aa.hml'>[+] Más información</a>
            </div>
          ))}
          {[4].map((item) => (
            <div key={item} className="columna">
              <div class='roundedImg'><div class='Iconimg4'></div></div>
              <h2>Recuperación de Inmuebles</h2>
              <p>Gestionamos procesos legales de recuperación de inmuebles, asegurando que retomes el control de tu propiedad sin riesgos. Recupera tu propiedad de manera legal y efectiva.</p>
              <p><h3>Consulta a nuestros especialistas.</h3></p>
              <a href='aa.hml'>[+] Más información</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuatroColumnas;