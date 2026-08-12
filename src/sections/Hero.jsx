import "./Hero.css";

function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero__container">

        {/* =====================================================
            CONTENIDO
            ===================================================== */}

        <div className="hero__content">

          <div className="hero__label">
            <span className="gold-line"></span>
            Psicología sanitaria
          </div>

          <h1 className="hero__title">
            Un espacio para
            <span>volver a ti.</span>
          </h1>

          <p className="hero__description">
            Un acompañamiento cercano y profesional para comprender
            lo que estás viviendo, encontrar herramientas y avanzar
            a tu propio ritmo.
          </p>

          <div className="hero__actions">

            <a
              href="#citas"
              className="btn btn--primary"
            >
              Solicitar una cita
              <span>→</span>
            </a>

            <a
              href="#sobre-mi"
              className="btn btn--secondary"
            >
              Conóceme
            </a>

          </div>

          <div className="hero__trust">

            <span className="hero__trust-mark">
              ✦
            </span>

            <span>
              Atención individualizada
            </span>

            <span className="hero__trust-dot">
              ·
            </span>

            <span>
              Madrid · Alcorcón
            </span>

          </div>

        </div>

        {/* =====================================================
            IMAGEN
            ===================================================== */}

        <div className="hero__visual">

          <div className="hero__image-wrap">

            <img
              src={`${import.meta.env.BASE_URL}mayte-hero.jpg`}
              alt="Mayte Cacharrón, psicóloga sanitaria y con Máster en Logopedia"
              className="hero__image"
            />

          </div>

          <div
            className="hero__gold-detail"
            aria-hidden="true"
          ></div>

          <div className="hero__badge">

            <strong>
              +20
            </strong>

            <span>
              años de experiencia
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;