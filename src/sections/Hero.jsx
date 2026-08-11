import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__background"></div>

      <div className="hero__container">

        {/* CONTENIDO */}
        <div className="hero__content">

          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line"></span>
            <span>Psicología · Logopedia</span>
          </div>

          <h1 className="hero__title">
            Un espacio para
            <span>comprenderte,</span>
            <span>cuidarte y avanzar.</span>
          </h1>

          <p className="hero__description">
            Soy Mayte Cacharrón, psicóloga sanitaria y logopeda,
            y llevo más de 20 años acompañando a personas y familias
            en sus procesos de cambio.
          </p>

          {/* BOTONES */}
          <div className="hero__actions">

            <a href="#citas" className="btn btn--primary">
              Reservar una cita
              <span>→</span>
            </a>

            <a href="#sobre-mi" className="hero__secondary-link">
              Conocer a Mayte
              <span>↓</span>
            </a>

          </div>

          {/* DATOS */}
          <div className="hero__credentials">

            <div className="hero__credential">
              <strong>+20</strong>
              <span>
                años de
                <br />
                experiencia
              </span>
            </div>

            <div className="hero__credential-divider"></div>

            <div className="hero__credential">
              <strong>2</strong>
              <span>
                espacios
                <br />
                de consulta
              </span>
            </div>

          </div>

        </div>

        {/* IMAGEN */}
        <div className="hero__visual">

          <div className="hero__image-frame">

            <img
              src="/mayte-hero.jpg"
              alt="Mayte Cacharrón, psicóloga sanitaria y logopeda"
            />

          </div>

          {/* DETALLE DORADO */}
          <div className="hero__gold-detail"></div>

          {/* TARJETA FLOTANTE */}
          <div className="hero__floating-card">

            <span className="hero__floating-icon">
              ✦
            </span>

            <div>
              <strong>Psicología cercana</strong>
              <span>Un espacio para ti</span>
            </div>

          </div>

        </div>

      </div>

      {/* INDICADOR DE SCROLL */}
      <div className="hero__scroll">

        <span>Descubre más</span>

        <div className="hero__scroll-line"></div>

      </div>

    </section>
  );
}

export default Hero;