import "./Locations.css";

const locations = [
  {
    number: "01",
    city: "Alcorcón",
    name: "Centro Sanitario Salud Método Avanzado",
    address: "Av. Cantarranas, 1",
    postalCode: "28921 Alcorcón, Madrid",
    description:
      "Actualmente puedes encontrar a Mayte en este centro sanitario multidisciplinar de Alcorcón.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Centro+Sanitario+Salud+Método+Avanzado+Av.+Cantarranas+Alcorcón",
  },
  {
    number: "02",
    city: "Madrid",
    name: "Centro Médico Vía Carpetana",
    address: "C. Vía Carpetana, 201",
    postalCode: "28047 Madrid",
    description:
      "Actualmente puedes encontrar a Mayte en este centro sanitario de Carabanchel.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Centro+Médico+Vía+Carpetana+201+Madrid",
  },
];

function Locations() {
  return (
    <section className="locations section" id="consulta">
      <div className="locations__container">

        {/* CABECERA */}
        <div className="locations__header">
          <div className="section-label">
            <span className="gold-line"></span>
            Dónde encontrarme
          </div>

          <h2 className="locations__title">
            Un espacio
            <span>para ti.</span>
          </h2>

          <p className="locations__intro">
            Actualmente puedes encontrarme en distintos espacios
            de consulta en la Comunidad de Madrid, donde trabajo
            de forma cercana e individualizada con cada persona.
          </p>
        </div>

        {/* UBICACIONES */}
        <div className="locations__grid">
          {locations.map((location) => (
            <article
              className="location-card"
              key={location.number}
            >

              {/* PARTE SUPERIOR */}
              <div className="location-card__top">
                <span className="location-card__number">
                  {location.number}
                </span>

                <span className="location-card__city">
                  {location.city}
                </span>
              </div>

              {/* CONTENIDO */}
              <div className="location-card__content">
                <div className="location-card__pin">
                  ⌖
                </div>

                <span className="location-card__type">
                  Consulta actual
                </span>

                <h3>
                  {location.name}
                </h3>

                <p className="location-card__address">
                  {location.address}

                  {location.postalCode && (
                    <>
                      <br />
                      {location.postalCode}
                    </>
                  )}
                </p>

                <p className="location-card__description">
                  {location.description}
                </p>
              </div>

              {/* MAPA */}
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="location-card__link"
              >
                Cómo llegar
                <span>↗</span>
              </a>

            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="locations__cta">
          <div>
            <span className="locations__cta-label">
              ¿Tienes dudas?
            </span>

            <h3>
              Estoy aquí para ayudarte.
            </h3>
          </div>

          <a
            href="#citas"
            className="btn btn--primary"
          >
            Solicitar una cita
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Locations;