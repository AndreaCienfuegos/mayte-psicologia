import "./Approach.css";

const steps = [
  {
    number: "01",
    title: "Te escucho",
    text:
      "El primer paso es comprender qué estás viviendo, qué necesitas y qué te ha llevado hasta aquí.",
  },
  {
    number: "02",
    title: "Evaluamos",
    text:
      "Cuando es necesario, realizamos una evaluación que permita comprender tu situación de forma individualizada.",
  },
  {
    number: "03",
    title: "Intervenimos",
    text:
      "A partir de lo que necesitas, planteamos un acompañamiento terapéutico adaptado a tu situación y a tus objetivos.",
  },
  {
    number: "04",
    title: "Acompañamos",
    text:
      "El proceso se construye contigo, revisando la evolución y adaptando la intervención cuando sea necesario.",
  },
];

function Approach() {
  return (
    <section
      className="approach section"
      id="como-trabajo"
    >
      <div className="approach__container">

        {/* INTRO */}
        <div className="approach__intro">

          <div className="section-label">
            <span className="gold-line"></span>
            Mi forma de acompañar
          </div>

          <h2 className="approach__title">
            No tienes que
            <span>saber por dónde empezar.</span>
          </h2>

          <p className="approach__description">
            Pedir ayuda no siempre es fácil. Por eso, el proceso comienza
            creando un espacio de confianza en el que puedas explicar qué
            está ocurriendo y sentirte escuchado.
          </p>

        </div>

        {/* PASOS */}
        <div className="approach__steps">

          {steps.map((step) => (
            <article
              className="approach__step"
              key={step.number}
            >

              <div className="approach__step-number">
                {step.number}
              </div>

              <div className="approach__step-content">

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </div>

              <div className="approach__step-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>

        {/* CIERRE */}
        <div className="approach__closing">

          <div className="approach__closing-mark">
            ✦
          </div>

          <p>
            Un acompañamiento cercano, individualizado
            y basado en las necesidades de cada persona.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Approach;