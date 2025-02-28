import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { swiperConfig } from '../../config/swiperConfig';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

const Hero = () => {
  return (
    <section className="hero">
      <Swiper
        {...swiperConfig}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className="hero-slide">
            <div className="hero-content">
              <h1>
                Experiencia y excelencia
                <span>jurídica en materia civil, mercantil y penal.</span>
              </h1>
              <p>No deje pasar más tiempo...</p>
              <p>Obtenga ahora una consulta sin costo y póngase en manos de nuestros expertos.</p>
              <a href="#contacto" className="hero-button">Consulta gratuita</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slide">
            <div className="hero-content">
              <h1>Servicios Legales Especializados</h1>
              <p>Asesoría jurídica profesional en todas las áreas del derecho</p>
              <a href="#servicios" className="hero-button">Conoce más</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slide">
            <div className="hero-content">
              <h1>Consulta Gratuita</h1>
              <p>Primera asesoría sin costo para evaluar tu caso</p>
              <a href="#contacto" className="hero-button">Agenda ahora</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
