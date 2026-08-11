import "./Privacy.css";

function Privacy() {
  return (
    <main className="privacy-page">
      <div className="privacy-page__container">

        {/* HEADER */}
        <div className="privacy-page__header">

          <div className="section-label">
            <span className="gold-line"></span>
            Información legal
          </div>

          <h1>
            Política de
            <span>privacidad.</span>
          </h1>

          <p>
            Información sobre el tratamiento y protección de los
            datos personales de las personas usuarias de este sitio web.
          </p>

        </div>

        {/* CONTENT */}
        <div className="privacy-page__content">

          <section>
            <span className="privacy-page__number">01</span>

            <div>
              <h2>Responsable del tratamiento</h2>

              <p>
                El responsable del tratamiento de los datos personales
                será la persona física o entidad que determine los fines
                y medios del tratamiento de los datos obtenidos a través
                de este sitio web.
              </p>

              <div className="privacy-page__pending">
                <strong>Datos pendientes de completar antes de publicar:</strong>

                <ul>
                  <li>Nombre completo o razón social.</li>
                  <li>NIF.</li>
                  <li>Domicilio profesional.</li>
                  <li>Correo electrónico profesional.</li>
                  <li>Información profesional o colegial que corresponda.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <span className="privacy-page__number">02</span>

            <div>
              <h2>Datos que pueden tratarse</h2>

              <p>
                Dependiendo de los servicios y canales de contacto
                habilitados, podrán tratarse datos identificativos y
                de contacto, como nombre, teléfono o correo electrónico.
              </p>

              <p>
                Si una persona facilita voluntariamente información
                relacionada con su situación personal o de salud,
                dichos datos podrán estar sujetos a una protección
                especialmente reforzada conforme a la normativa
                aplicable.
              </p>
            </div>
          </section>

          <section>
            <span className="privacy-page__number">03</span>

            <div>
              <h2>Finalidades</h2>

              <p>
                Los datos podrán ser tratados, según corresponda, para
                atender solicitudes de información, gestionar contactos
                y solicitudes de cita, prestar los servicios profesionales
                solicitados y mantener la comunicación necesaria con las
                personas usuarias.
              </p>
            </div>
          </section>

          <section>
            <span className="privacy-page__number">04</span>

            <div>
              <h2>Base jurídica</h2>

              <p>
                La base jurídica aplicable dependerá de la finalidad
                concreta del tratamiento y de la relación existente
                con la persona interesada.
              </p>

              <p>
                En el ámbito de la asistencia sanitaria, el tratamiento
                de determinados datos de salud puede estar amparado por
                las bases jurídicas previstas en la normativa de
                protección de datos y no necesariamente por el
                consentimiento para cada tratamiento asistencial.
              </p>
            </div>
          </section>

          <section>
            <span className="privacy-page__number">05</span>

            <div>
              <h2>Conservación de los datos</h2>

              <p>
                Los datos se conservarán durante el tiempo necesario
                para cumplir la finalidad para la que fueron recogidos
                y durante los plazos que puedan resultar exigibles por
                la normativa aplicable.
              </p>
            </div>
          </section>

          <section>
            <span className="privacy-page__number">06</span>

            <div>
              <h2>Destinatarios</h2>

              <p>
                Los datos no serán comunicados a terceros salvo cuando
                exista una base jurídica que lo permita o resulte
                necesario para la prestación del servicio solicitado.
              </p>

              <p>
                Cuando resulte necesario utilizar proveedores externos
                que accedan a datos personales por cuenta del responsable,
                se adoptarán las garantías y acuerdos que correspondan.
              </p>
            </div>
          </section>

          <section>
            <span className="privacy-page__number">07</span>

            <div>
              <h2>Derechos</h2>

              <p>
                La persona interesada puede ejercer, cuando proceda,
                sus derechos de acceso, rectificación, supresión,
                oposición, limitación del tratamiento y portabilidad,
                así como otros derechos reconocidos por la normativa
                aplicable.
              </p>

              <p>
                Para ejercer estos derechos deberá utilizar los datos
                de contacto que se indiquen en la versión definitiva
                de esta política.
              </p>
            </div>
          </section>

          <section>
            <span className="privacy-page__number">08</span>

            <div>
              <h2>Reclamaciones</h2>

              <p>
                Si la persona interesada considera que el tratamiento
                de sus datos no se ajusta a la normativa, puede presentar
                una reclamación ante la Agencia Española de Protección
                de Datos o ante la autoridad de control competente.
              </p>
            </div>
          </section>

          <section>
            <span className="privacy-page__number">09</span>

            <div>
              <h2>Actualización</h2>

              <p>
                Esta política podrá actualizarse cuando cambien los
                tratamientos realizados, los servicios disponibles,
                los proveedores utilizados o la normativa aplicable.
              </p>
            </div>
          </section>

        </div>

        <div className="privacy-page__back">
          <a href="/">
            ← Volver a la página principal
          </a>
        </div>

      </div>
    </main>
  );
}

export default Privacy;