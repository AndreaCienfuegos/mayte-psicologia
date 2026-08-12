import "./Specialties.css";

const specialties = [
  {
    number: "01",
    title: "Psicología clínica",
    description:
      "Evaluación psicológica e intervención terapéutica adaptada a las necesidades de cada persona y a su momento vital.",
  },
  {
    number: "02",
    title: "Infancia y adolescencia",
    description:
      "Acompañamiento psicológico durante las diferentes etapas del desarrollo, trabajando también con la familia cuando es necesario.",
  },
  {
    number: "03",
    title: "Neurodesarrollo y TDAH",
    description:
      "Evaluación e intervención ante dificultades relacionadas con el neurodesarrollo y el TDAH, desde una mirada individualizada.",
  },
  {
    number: "04",
    title: "Dificultades del aprendizaje",
    description:
      "Evaluación e intervención ante dificultades del aprendizaje, incluyendo dislexia, disgrafía y disortografía.",
  },
  {
    number: "05",
    title: "Trauma y resiliencia",
    description:
      "Acompañamiento psicológico ante experiencias difíciles, favoreciendo la comprensión, la adaptación y el desarrollo de recursos personales.",
  },
  {
    number: "06",
    title: "Formación en Logopedia",
    description:
      "Formación especializada a través de un Máster en Logopedia, como complemento a su trayectoria profesional.",
  },
];

function Specialties() {
  return (
    <section
      className="specialties section"
      id="especialidades"
    >
      <div className="specialties__container">

        {/* CABECERA */}

        <div className="specialties__header">

          <div className="section-label">
            <span className="gold-line"></span>
            Áreas de trabajo
          </div>

          <h2 className="specialties__title">
            ¿En qué puedo
            <span>ayudarte?</span>
          </h2>

          <p className="specialties__intro">
            Cada persona y cada proceso son diferentes.
            Por eso, el acompañamiento comienza por
            comprender qué necesitas y encontrar el
            camino adecuado para ti.
          </p>

        </div>

        {/* TARJETAS */}

        <div className="specialties__grid">

          {specialties.map((specialty) => (
            <article
              className="specialty-card"
              key={specialty.number}
            >

              <div className="specialty-card__top">

                <span className="specialty-card__number">
                  {specialty.number}
                </span>

                <span className="specialty-card__arrow">
                  ↗
                </span>

              </div>

              <div className="specialty-card__content">

                <h3>
                  {specialty.title}
                </h3>

                <p>
                  {specialty.description}
                </p>

              </div>

              <div className="specialty-card__line"></div>

            </article>
          ))}

        </div>

        {/* CIERRE */}

        <div className="specialties__footer">

          <p>
            ¿No sabes exactamente qué necesitas?
          </p>

          <a
            href="#citas"
            className="specialties__cta"
          >
            Hablemos
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Specialties;