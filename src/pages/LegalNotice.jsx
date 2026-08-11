import "./LegalNotice.css";

function LegalNotice() {
  return (
    <main className="legal-page">

      <div className="legal-page__container">

        {/* HEADER */}
        <div className="legal-page__header">

          <div className="section-label">
            <span className="gold-line"></span>
            Información legal
          </div>

          <h1>
            Aviso
            <span>legal.</span>
          </h1>

          <p>
            Información general sobre las condiciones de acceso
            y utilización de este sitio web.
          </p>

        </div>


        {/* CONTENT */}
        <div className="legal-page__content">

          {/* 01 */}
          <section>

            <span className="legal-page__number">
              01
            </span>

            <div className="legal-page__section-content">

              <h2>
                Titular del sitio web
              </h2>

              <p>
                El presente sitio web es titularidad de Mayte
                Cacharrón, profesional de la psicología sanitaria
                y la logopedia.
              </p>

              <p>
                Los datos identificativos y profesionales completos
                de la titular serán incorporados a esta sección antes
                de la publicación definitiva del sitio web.
              </p>

            </div>

          </section>


          {/* 02 */}
          <section>

            <span className="legal-page__number">
              02
            </span>

            <div className="legal-page__section-content">

              <h2>
                Objeto
              </h2>

              <p>
                El presente sitio web tiene como finalidad ofrecer
                información sobre los servicios profesionales de
                Mayte Cacharrón, sus áreas de trabajo, espacios de
                consulta y formas de contacto.
              </p>

            </div>

          </section>


          {/* 03 */}
          <section>

            <span className="legal-page__number">
              03
            </span>

            <div className="legal-page__section-content">

              <h2>
                Condiciones de uso
              </h2>

              <p>
                El acceso y utilización de este sitio web implica
                la aceptación de las condiciones recogidas en este
                Aviso Legal.
              </p>

              <p>
                La persona usuaria se compromete a utilizar el sitio
                web de forma lícita, responsable y respetuosa con la
                legislación vigente y con los derechos de terceros.
              </p>

            </div>

          </section>


          {/* 04 */}
          <section>

            <span className="legal-page__number">
              04
            </span>

            <div className="legal-page__section-content">

              <h2>
                Propiedad intelectual
              </h2>

              <p>
                Los contenidos, textos, fotografías, elementos
                gráficos, diseño, estructura y demás elementos
                presentes en este sitio web están protegidos por la
                normativa aplicable en materia de propiedad
                intelectual e industrial.
              </p>

              <p>
                No se permite la reproducción, distribución,
                transformación o utilización de los contenidos sin
                la correspondiente autorización cuando esta resulte
                necesaria.
              </p>

            </div>

          </section>


          {/* 05 */}
          <section>

            <span className="legal-page__number">
              05
            </span>

            <div className="legal-page__section-content">

              <h2>
                Responsabilidad
              </h2>

              <p>
                La información publicada en este sitio web tiene
                carácter general y divulgativo y no sustituye una
                valoración profesional individualizada.
              </p>

              <p>
                La titular procurará mantener la información
                actualizada y accesible, sin perjuicio de que puedan
                producirse modificaciones, errores u omisiones
                involuntarias.
              </p>

            </div>

          </section>


          {/* 06 */}
          <section>

            <span className="legal-page__number">
              06
            </span>

            <div className="legal-page__section-content">

              <h2>
                Contacto
              </h2>

              <p>
                Para cualquier consulta relacionada con este sitio
                web, puedes utilizar los canales de contacto
                disponibles en la página.
              </p>

            </div>

          </section>

        </div>


        {/* BACK */}
        <div className="legal-page__back">

          <a href="/">
            ← Volver a la página principal
          </a>

        </div>

      </div>

    </main>
  );
}

export default LegalNotice;