import "./About.css";

function About() {
  return (
    <section className="about section" id="sobre-mi">
      <div className="about__container">

        {/* CABECERA */}
        <div className="about__header">
          <div className="section-label">
            <span className="gold-line"></span>
            <span>Sobre Mayte</span>
          </div>

          <h2 className="about__title">
            Más que una
            <span>profesión.</span>
          </h2>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="about__content">

          {/* IMAGEN */}
          <div className="about__visual">

            <div className="about__image-frame">
<div className="about__image-frame">
  <img
    src="/mayte-about.jpg"
    alt="Mayte Cacharrón, psicóloga sanitaria y logopeda"
    className="about__image"
  />
</div>
            </div>

            <div className="about__gold-detail"></div>

            <div className="about__experience">
              <strong>+20</strong>

              <span>
                años de
                <br />
                experiencia
              </span>
            </div>

          </div>

          {/* TEXTO */}
          <div className="about__text">

            <p className="about__lead">
              Soy Mayte Cacharrón, psicóloga sanitaria y logopeda,
              y desde hace más de 20 años acompaño a personas y
              familias en sus procesos de cambio.
            </p>

            <p>
              Mi trayectoria profesional se ha desarrollado en
              diferentes ámbitos clínicos, educativos y sociosanitarios,
              trabajando con personas de distintas etapas vitales.
            </p>

            <p>
              A lo largo de estos años he centrado especialmente mi
              trabajo en la evaluación psicológica y la intervención
              terapéutica, así como en el acompañamiento de dificultades
              relacionadas con el neurodesarrollo, el TDAH, el trauma
              y las dificultades de aprendizaje.
            </p>

            <p>
              También considero fundamental el trabajo con las familias
              y la coordinación con otros profesionales cuando la
              situación lo requiere.
            </p>

            {/* FIRMA */}
            <div className="about__signature">

              <span className="about__signature-line"></span>

              <div>
                <strong>Mayte Cacharrón</strong>

                <span>
                  Psicóloga Sanitaria · Logopeda
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* CREDENCIALES */}
        <div className="about__credentials">

          {/* 01 */}
          <div className="about__credential">

            <span>01</span>

            <div>
              <strong>Psicología</strong>

              <p>
                Licenciada en Psicología
              </p>
            </div>

          </div>

          {/* 02 */}
          <div className="about__credential">

            <span>02</span>

            <div>
              <strong>Logopedia</strong>

              <p>
                Máster en Logopedia
              </p>
            </div>

          </div>

          {/* 03 */}
          <div className="about__credential">

            <span>03</span>

            <div>
              <strong>Formación clínica</strong>

              <p>
                EMDR · Nivel I
              </p>
            </div>

          </div>

          {/* 04 */}
          <div className="about__credential">

            <span>04</span>

            <div>
              <strong>Docencia universitaria</strong>

              <p>
                Profesora-tutora · UNED
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;