import "./About.css";

function About() {
  return (
    <section className="about section" id="sobre-mi">
      <div className="about__container">

        {/* CABECERA */}
        <div className="about__header">

          <div className="section-label">
            <span className="gold-line"></span>
            Sobre mí
          </div>

          <h2 className="about__title">
            Acompañarte también
            <span>es escucharte.</span>
          </h2>

        </div>

        {/* CONTENIDO */}
        <div className="about__content">

          {/* IMAGEN */}
          <div className="about__visual">

            <div className="about__image-frame">
              <img
                src={`${import.meta.env.BASE_URL}mayte-about.jpg`}
                alt="Mayte Cacharrón"
                className="about__image"
              />
            </div>

            {/* DETALLE DORADO */}
            <div
              className="about__gold-detail"
              aria-hidden="true"
            ></div>

            {/* EXPERIENCIA */}
            <div className="about__experience">
              <strong>+20</strong>

              <span>
                años de experiencia
              </span>
            </div>

          </div>

          {/* TEXTO */}
          <div className="about__text">

            <p className="about__lead">
              Soy Mayte Cacharrón, psicóloga sanitaria y logopeda.
            </p>

            <p>
              Mi forma de trabajar parte de una idea sencilla:
              cada persona necesita ser escuchada y acompañada
              desde su propia historia, sus necesidades y su
              momento vital.
            </p>

            <p>
              Creo en una intervención cercana, profesional y
              personalizada, donde puedas sentirte comprendido/a
              y avanzar a tu propio ritmo.
            </p>

            {/* FIRMA */}
            <div className="about__signature">

              <span className="about__signature-line"></span>

              <div>
                <strong>
                  Mayte Cacharrón
                </strong>

                <span>
                  Psicóloga sanitaria · Logopeda
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* CREDENCIALES */}
        <div className="about__credentials">

          <div className="about__credential">

            <span>01</span>

            <div>
              <strong>
                Psicóloga sanitaria
              </strong>

              <p>
                Atención psicológica individualizada.
              </p>
            </div>

          </div>

          <div className="about__credential">

            <span>02</span>

            <div>
              <strong>
                Logopeda
              </strong>

              <p>
                Evaluación e intervención logopédica.
              </p>
            </div>

          </div>

          <div className="about__credential">

            <span>03</span>

            <div>
              <strong>
                Atención personalizada
              </strong>

              <p>
                Cada proceso se adapta a cada persona.
              </p>
            </div>

          </div>

          <div className="about__credential">

            <span>04</span>

            <div>
              <strong>
                Acompañamiento cercano
              </strong>

              <p>
                Un espacio de confianza y escucha.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;