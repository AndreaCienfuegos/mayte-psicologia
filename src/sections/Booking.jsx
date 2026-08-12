import "./Booking.css";

function Booking() {
  return (
    <section
      className="booking section"
      id="citas"
    >
      <div className="booking__container">

        {/* CABECERA */}
        <div className="booking__header">

          <div className="section-label">
            <span className="gold-line"></span>
            Reservar una cita
          </div>

          <h2 className="booking__title">
            Dar el primer paso
            <span>también es cuidarte.</span>
          </h2>

        </div>

        {/* CONTENIDO */}
        <div className="booking__content">

          {/* MENSAJE */}
          <div className="booking__message">

            <p className="booking__lead">
              Si estás pensando en empezar un proceso de
              acompañamiento, puedes ponerte en contacto conmigo.
            </p>

            <p className="booking__text">
              Cuéntame brevemente qué necesitas y encontraremos
              juntos la mejor forma de empezar.
            </p>

            <div className="booking__note">

              <span>✦</span>

              <p>
                La primera conversación también puede ser
                simplemente para resolver tus dudas.
              </p>

            </div>

          </div>

          {/* ACCIONES */}
          <div className="booking__actions">

            {/* LLAMAR */}
            <a
              href="tel:+34629221532"
              className="booking__action booking__action--primary"
            >

              <div className="booking__action-icon">
                ↗
              </div>

              <div className="booking__action-content">

                <span>
                  Primera opción
                </span>

                <h3>
                  Solicitar una cita
                </h3>

                <p>
                  Llámame directamente y hablamos.
                </p>

              </div>

              <span className="booking__action-arrow">
                →
              </span>

            </a>

            {/* CONSULTA PREVIA */}
            <a
              href="tel:+34629221532"
              className="booking__action"
            >

              <div className="booking__action-icon">
                ◌
              </div>

              <div className="booking__action-content">

                <span>
                  Antes de dar el paso
                </span>

                <h3>
                  Resolver una duda
                </h3>

                <p>
                  Puedes llamarme directamente y hablamos
                  sobre lo que necesitas.
                </p>

              </div>

              <span className="booking__action-arrow">
                →
              </span>

            </a>

          </div>

        </div>

        {/* INFORMACIÓN INFERIOR */}
        <div className="booking__footer">

          <div className="booking__footer-item">

            <span>
              01
            </span>

            <p>
              Atención personalizada
            </p>

          </div>

          <div className="booking__footer-item">

            <span>
              02
            </span>

            <p>
              Psicología y logopedia
            </p>

          </div>

          <div className="booking__footer-item">

            <span>
              03
            </span>

            <p>
              Madrid · Alcorcón
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Booking;