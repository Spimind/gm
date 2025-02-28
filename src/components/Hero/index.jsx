// src/components/Hero/index.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      title: "Experiencia y excelencia",
      subtitle: "jurídica en materia civil, mercantil y patrimonial.",
      cta: "No deje pasar más tiempo...",
      description: "Obtenga ahora una consulta sin costo y póngase en manos de nuestros expertos.",
      buttonText: "Consulta gratuita",
      bgImage: "/assets/images/hero-1.jpg"
    },
    {
      title: "Despacho Jurídico",
      subtitle: "Expertos en derecho civil y mercantil",
      cta: "No deje pasar más tiempo...",
      description: "Garantice su seguridad a través de contratos intgrales de acuerdo a sus necesidades",
      buttonText: "Contáctenos",
      bgImage: "/assets/images/hero-2.jpg"
    },
    {
      title: "GAMA Y ASOCIADOS",
      subtitle: "Más de 20 años de experiencia",
      cta: "No deje pasar más tiempo...",
      description: "Obtenga ahora una consulta sin costo y póngase en manos de nuestros expertos.",
      buttonText: "Agende una cita",
      bgImage: "/assets/images/hero-3.jpg"
    }
  ];

  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="hero-slide"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + slide.bgImage})` }}
            >
              <div className="hero-content">
                <h1>
                  {slide.title}
                  <span className="subtitle">{slide.subtitle}</span>
                </h1>
                <div className="hero-cta">
                  <p className="cta-text">{slide.cta}</p>
                  <p className="cta-description">{slide.description}</p>
                  <button className="cta-button">{slide.buttonText}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;