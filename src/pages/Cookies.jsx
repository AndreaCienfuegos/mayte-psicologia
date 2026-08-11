import "./Cookies.css";

function Cookies() {
  return (
    <main className="cookies-page">

      <div className="cookies-page__container">

        {/* HEADER */}
        <div className="cookies-page__header">

          <div className="section-label">
            <span className="gold-line"></span>
            Información legal
          </div>

          <h1>
            Política de
            <span>cookies.</span>
          </h1>

          <p>
            Información sobre el uso de cookies y tecnologías
            similares en este sitio web.
          </p>

        </div>


        {/* CONTENT */}
        <div className="cookies-page__content">

          {/* 01 */}
          <section>

            <span className="cookies-page__number">
              01
            </span>

            <div className="cookies-page__section-content">

              <h2>
                ¿Qué son las cookies?
              </h2>

              <p>
                Las cookies son pequeños archivos que pueden
                almacenarse en el dispositivo de la persona usuaria
                cuando visita un sitio web.
              </p>

              <p>
                Permiten, entre otras funciones, recordar determinadas
                preferencias, facilitar la navegación y obtener
                información sobre el funcionamiento del sitio web.
              </p>

            </div>

          </section>


          {/* 02 */}
          <section>

            <span className="cookies-page__number">
              02
            </span>

            <div className="cookies-page__section-content">

              <h2>
                Cookies utilizadas en este sitio web
              </h2>

              <p>
                En su configuración actual, este sitio web está
                diseñado para funcionar sin utilizar cookies de
                publicidad comportamental ni cookies de analítica
                que requieran el consentimiento de la persona usuaria.
              </p>

              <p>
                Podrán utilizarse aquellas cookies o tecnologías
                estrictamente necesarias para garantizar el
                funcionamiento técnico y la seguridad del sitio web.
              </p>

            </div>

          </section>


          {/* 03 */}
          <section>

            <span className="cookies-page__number">
              03
            </span>

            <div className="cookies-page__section-content">

              <h2>
                Cookies de terceros
              </h2>

              <p>
                Determinados servicios externos incorporados en el
                sitio web podrían utilizar sus propias cookies o
                tecnologías similares.
              </p>

              <p>
                En caso de incorporarse servicios de terceros que
                requieran consentimiento, esta política será
                actualizada y se habilitará el correspondiente
                mecanismo de gestión de preferencias.
              </p>

            </div>

          </section>


          {/* 04 */}
          <section>

            <span className="cookies-page__number">
              04
            </span>

            <div className="cookies-page__section-content">

              <h2>
                Gestión de cookies
              </h2>

              <p>
                La persona usuaria puede configurar las opciones de
                privacidad y cookies disponibles en su navegador.
              </p>

              <p>
                Cuando el sitio web utilice cookies que requieran
                consentimiento, se ofrecerá una herramienta que
                permita aceptar, rechazar o configurar dichas cookies
                antes de su instalación.
              </p>

            </div>

          </section>


          {/* 05 */}
          <section>

            <span className="cookies-page__number">
              05
            </span>

            <div className="cookies-page__section-content">

              <h2>
                Actualización
              </h2>

              <p>
                Esta política podrá actualizarse cuando se produzcan
                cambios en las cookies utilizadas, en los servicios
                integrados en el sitio web o en la normativa aplicable.
              </p>

            </div>

          </section>

        </div>


        {/* BACK */}
        <div className="cookies-page__back">

          <a href="/">
            ← Volver a la página principal
          </a>

        </div>

      </div>

    </main>
  );
}

export default Cookies;