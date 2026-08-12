import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* =====================================================
            PARTE PRINCIPAL
        ===================================================== */}

        <div className="footer__main">

          {/* MARCA */}

          <div className="footer__brand">

            <a
              href={import.meta.env.BASE_URL}
              className="footer__logo"
              aria-label="Mayte Cacharrón — Inicio"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo-mark-white.svg`}
                alt=""
                className="footer__mark"
                aria-hidden="true"
              />

              <span className="footer__brand-text">

                <span className="footer__name">
                  Mayte
                </span>

                <span className="footer__surname">
                  CACHARRÓN
                </span>

                <span className="footer__descriptor">
                  PSICÓLOGA SANITARIA · MÁSTER EN LOGOPEDIA
                </span>

              </span>
            </a>

            <p className="footer__tagline">
              Un espacio para comprenderte,
              cuidarte y avanzar.
            </p>

          </div>

          {/* NAVEGACIÓN */}

          <div className="footer__column">

            <h3 className="footer__column-title">
              Navegación
            </h3>

            <nav className="footer__nav">

              <a href="#inicio">
                Inicio
              </a>

              <a href="#sobre-mi">
                Sobre mí
              </a>

              <a href="#especialidades">
                Especialidades
              </a>

              <a href="#como-trabajo">
                Cómo trabajo
              </a>

              <a href="#consulta">
                Dónde encontrarme
              </a>

              <a href="#preguntas">
                Preguntas frecuentes
              </a>

              <a href="#contacto">
                Contacto
              </a>

            </nav>

          </div>

          {/* CONTACTO */}

          <div className="footer__column">

            <h3 className="footer__column-title">
              Contacto
            </h3>

            <div className="footer__contact">

              <a
                href="tel:+34629221532"
                aria-label="Llamar al 629 22 15 32"
              >
                629 22 15 32
              </a>

              <span>
                Madrid · Alcorcón
              </span>

              <a
                href="#citas"
                className="footer__contact-link"
              >
                Solicitar una cita
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

        {/* FRASE CENTRAL */}

        <div className="footer__statement">

          <span
            className="footer__statement-mark"
            aria-hidden="true"
          >
            ✦
          </span>

          <p>
            Un acompañamiento cercano para
            <span>volver a ti.</span>
          </p>

        </div>

        {/* PARTE INFERIOR */}

        <div className="footer__bottom">

          <p className="footer__copyright">
            © {new Date().getFullYear()} Mayte Cacharrón.
            Todos los derechos reservados.
          </p>

          <div className="footer__legal">

            <a href="#aviso-legal">
              Aviso legal
            </a>

            <a href="#privacidad">
              Privacidad
            </a>

            <a href="#cookies">
              Cookies
            </a>

          </div>

          <button
            type="button"
            className="footer__top"
            onClick={scrollToTop}
            aria-label="Volver arriba"
          >
            ↑
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;