import React from 'react';
import './styles.css';
import {PhoneCall} from 'lucide-react';

const TresColumnas = () => {
  return (
    <section className="tres-columnas" id="servicios">
      <div className="container">
        <div className="columnas-grid">
          {[1].map((item) => (
            <div key={item} className="columna">
              <img class='img' src='./images/_triple-0.jpg' alt='Derecho Civil'></img>
              <h2>Derecho Civil</h2>
              <p>Somos especialistas en la resolución de conflictos familiares y patrimoniales, nuestro equipo de abogados expertos le brindará el apoyo necesario para proteger sus intereses. Con más de 15 años de experiencia en divorcios, pensiones alimenticias, custodia de menores y sucesiones.</p>
              <div class='pGold_button'><a href="Tel:525543400746" class='Gold_button' target="_blank" rel="noopener noreferrer"><PhoneCall size={15} strokeWidth={3} color="#FFF" /> Llamar a un experto</a></div>
            </div>
          ))}
            {[2].map((item) => (
            <div key={item} className="columna">
               <img class='img' src='./images/_triple-1.jpg' alt='Derecho Mercantil'></img>
              <h2>Derecho Mercantil</h2>
              <p>Proteja su negocio con asesoría legal especializada en contratos mercantiles, sociedades comerciales y resolución de controversias empresariales. Nuestro despacho cuenta con amplia experiencia en negociaciones comerciales, fusiones, adquisiciones y reestructuraciones corporativas.</p>
              <p class='pGold_button'><a href="Tel:525543400746" class='Gold_button' target="_blank" rel="noopener noreferrer"><PhoneCall size={15} strokeWidth={3} color="#FFF" /> Llamar a un experto</a></p>
            </div>
          ))}
           {[3].map((item) => (
            <div key={item} className="columna">
              <img class='img' src='./images/_triple-3.jpg' alt='Derecho Mercantil'></img>
              <h2>Derecho Patrimonial</h2>
              <p>Protección legal en materia patrimonial, con un equipo experto en estrategias para la preservación y defensa de bienes. Ofrecemos asesoría especializada y representación en disputas legales, asegurando la seguridad jurídica de su patrimonio y la prevención de riesgos financieros.</p>
              <p class='pGold_button'><a href="Tel:525543400746" class='Gold_button' target="_blank" rel="noopener noreferrer"><PhoneCall size={15} strokeWidth={3} color="#FFF" /> Llamar a un experto</a></p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default TresColumnas;