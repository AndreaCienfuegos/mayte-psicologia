import "./Contact.css";

function Contact() {
  return (
    <section
      className="contact section"
      id="contacto"
    >
      <div className="contact__container">

        {/* =====================================================
            CONTENIDO PRINCIPAL
            ===================================================== */}

        <div className="contact__main">

          <div className="section-label">
            <span className="gold-line"></span>
            Contacto
          </div>

          <h2 className="contact__title">
            Hablemos.
            <span>Estoy aquí.</span>
          </h2>

          <p className="contact__description">
            Si quieres dar el primer paso, tienes alguna duda
            o simplemente quieres saber si este espacio puede
            ser adecuado para ti, puedes ponerte en contacto conmigo.
          </p>

        </div>

        {/* =====================================================
            FORMAS DE CONTACTO
            ===================================================== */}

        <div className="contact__methods">

          {/* -----------------------------------------------------
              TELÉFONO
              ----------------------------------------------------- */}

          <a
            href="tel:+34629221532"
            className="contact__method"
            aria-label="Llamar al 629 22 15 32"
          >
            <span className="contact__method-number">
              01
            </span>

            <div>
              <span>
                Teléfono
              </span>

              <strong>
                629 22 15 32
              </strong>
            </div>

            <span className="contact__method-arrow">
              →
            </span>
          </a>

          {/* -----------------------------------------------------
              CONTACTO
              ----------------------------------------------------- */}

          <a
            href="#citas"
            className="contact__method"
            aria-label="Contactar con Mayte"
          >
            <span className="contact__method-number">
              02
            </span>

            <div>
              <span>
                Contacto
              </span>

              <strong>
                Resolver una duda
              </strong>
            </div>

            <span className="contact__method-arrow">
              →
            </span>
          </a>

          {/* -----------------------------------------------------
              CITA
              ----------------------------------------------------- */}

          <a
            href="#citas"
            className="contact__method"
            aria-label="Solicitar una cita"
          >
            <span className="contact__method-number">
              03
            </span>

            <div>
              <span>
                Citas
              </span>

              <strong>
                Solicitar una cita
              </strong>
            </div>

            <span className="contact__method-arrow">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;