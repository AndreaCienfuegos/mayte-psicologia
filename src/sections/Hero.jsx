import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">

        <div className="hero__content">

          <span className="section-label">
            PSICOLOGÍA · LOGOPEDIA
          </span>

          <h1 className="hero__title">
            Un espacio para
            <span>volver a ti.</span>
          </h1>

          <p className="hero__description">
            Un acompañamiento profesional, cercano y personalizado para
            ayudarte a comprenderte, cuidarte y avanzar.
          </p>

          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary">
              Solicitar cita
            </a>

            <a href="#servicios" className="btn btn--secondary">
              Descubrir cómo trabajo
            </a>
          </div>

        </div>

        <div className="hero__visual">

          <div className="hero__image-wrapper">

            <img
              src={`${import.meta.env.BASE_URL}mayte-hero.jpg`}
              alt="Mayte Cacharrón, psicóloga sanitaria y logopeda"
              className="hero__image"
            />

          </div>

          <div className="hero__badge">
            <span className="hero__badge-number">01</span>

            <span className="hero__badge-text">
              Psicología sanitaria
              <br />
              y logopedia
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;