import React from 'react';
import './styles.css';
import {MessageCircle, MapPin, Mail, Phone} from 'lucide-react';

const Contacto = () => {
  return (
    <section className="contacto" id="contacto">
      <div className="contacto-container">
        {/* Columna izquierda - Información de contacto */}
        <div className="contacto-info">
          <h2>Contáctenos</h2>
          <p>No deje pasar más tiempo...</p>
          <p>Obtenga ahora una consulta sin costo y póngase en manos de nuestros expertos.</p>
          <div className="whatsapp-button">
              <a href="https://wa.me/525543400746" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} strokeWidth={3} color="#FFF" /> WhatsApp
              </a>
            </div>
          <div className="direccion">
            <h2><MapPin size={22} strokeWidth={2} color="#C5A572" /> Nuestra Dirección</h2>
            <p>Av. 5 de Febrero #1351, Edificio Roble, Piso 4, Interior 402</p>
            <p>Zona Industrial Benito Juárez, C.P. 76120</p>
            <p>Querétaro, Qro. México</p>
        </div>
        <div className="direccion">
            <h2><Phone size={22} strokeWidth={2} color="#C5A572" /> Teléfono</h2>
            <p>52 + (55) 4340-0746</p>
          </div>
        </div>

        {/* Columna derecha - Formulario */}
        <div className="contacto-form-container">
          <h2><Mail size={22} strokeWidth={2} color="#C5A572" /> Comentarios</h2>
          <p>Para nosotros, sus comentarios son muy importantes.</p>
          <form className="contacto-form">
            <div className="form-group">
              <input type="text" placeholder="Su Nombre:" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Correo:" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Teléfono:" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Comentarios:" required></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;