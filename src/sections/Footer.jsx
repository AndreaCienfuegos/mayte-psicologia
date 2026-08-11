import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

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
              href="/"
              className="footer__logo"
            >
              Mayte
              <span>Cacharrón</span>
            </a>

            <p className="footer__profession">
              Psicóloga Sanitaria · Logopeda
            </p>

            <p className="footer__tagline">
              Un espacio para comprenderte,
              cuidarte y avanzar.
            </p>

          </div>


          {/* NAVEGACIÓN */}
          <div className="footer__column">

            <span className="footer__column-title">
              Explorar
            </span>

            <nav className="footer__nav">

              <a href="/#inicio">
                Inicio
              </a>

              <a href="/#sobre-mi">
                Sobre Mayte
              </a>

              <a href="/#especialidades">
                Especialidades
              </a>

              <a href="/#como-trabajo">
                Cómo trabajo
              </a>

              <a href="/#consulta">
                Dónde encontrarme
              </a>

              <a href="/#preguntas">
                Preguntas frecuentes
              </a>

            </nav>

          </div>


          {/* CONTACTO */}
          <div className="footer__column">

            <span className="footer__column-title">
              Contacto
            </span>

            <div className="footer__contact">

              <a href="tel:+34629221532">
                629 22 15 32
              </a>

              <span>
                Madrid · Alcorcón
              </span>

              <a
                href="/#citas"
                className="footer__contact-link"
              >
                Solicitar una cita
                <span>→</span>
              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            FRASE CENTRAL
            ===================================================== */}

        <div className="footer__statement">

          <span className="footer__statement-mark">
            ✦
          </span>

          <p>
            A veces, dar el primer paso
            <span>
              empieza simplemente por hablar.
            </span>
          </p>

        </div>


        {/* =====================================================
            PARTE INFERIOR
            ===================================================== */}

        <div className="footer__bottom">

          <div className="footer__copyright">
            © {currentYear} Mayte Cacharrón.
            Todos los derechos reservados.
          </div>

          <div className="footer__legal">

            <a href="/aviso-legal">
              Aviso legal
            </a>

            <a href="/privacidad">
              Privacidad
            </a>

            <a href="/cookies">
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;