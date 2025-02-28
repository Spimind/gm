import React from 'react';

const HeroSlide = ({ data }) => {
  return (
    <div 
      className="hero-carousel__slide"
      style={{ backgroundImage: `url(${data.bgImage})` }}
    >
      <div className="hero-carousel__overlay" />
      <div className="hero-carousel__content">
        <h1 className="hero-carousel__title">
          {data.title}
          <span className="hero-carousel__subtitle">{data.subtitle}</span>
        </h1>
        <p className="hero-carousel__description">{data.description}</p>
        <p className="hero-cta">{data.cta}</p>
        <a href="#contacto" className="hero-button">
          Consulta gratuita
        </a>
      </div>
    </div>
  );
};

export default HeroSlide;