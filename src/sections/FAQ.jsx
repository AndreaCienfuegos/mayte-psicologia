import { useState } from "react";
import "./FAQ.css";

const questions = [
  {
    question: "¿Cómo sé si es el momento de pedir ayuda?",
    answer:
      "No es necesario esperar a encontrarte mal para pedir ayuda. Si existe algo que te preocupa, está afectando a tu día a día o sientes que necesitas comprender mejor lo que te ocurre, podemos hablarlo y valorar juntas el camino más adecuado.",
  },
  {
    question: "¿Cómo es la primera sesión?",
    answer:
      "La primera sesión es, sobre todo, un espacio para conocernos, escuchar qué está ocurriendo y comprender qué necesitas. A partir de ahí podremos valorar los siguientes pasos y plantear el acompañamiento más adecuado.",
  },
  {
    question: "¿Trabajas con niños y adolescentes?",
    answer:
      "Sí. La trayectoria profesional de Mayte incluye el trabajo con infancia y adolescencia, así como la orientación y el acompañamiento a sus familias.",
  },
  {
    question: "¿También atiendes a adultos?",
    answer:
      "Sí. Mayte trabaja con personas de diferentes etapas vitales, adaptando la evaluación y la intervención a las necesidades de cada persona.",
  },
  {
    question: "¿Psicología y logopedia pueden abordarse conjuntamente?",
    answer:
      "En determinados casos, ambas áreas pueden complementarse. La valoración individual de cada situación permite determinar qué tipo de intervención puede resultar más adecuada.",
  },
  {
    question: "¿Dónde realizas las sesiones?",
    answer:
      "Actualmente Mayte pasa consulta en Alcorcón y Madrid. Puedes consultar los centros y sus direcciones en la sección «Dónde encontrarme».",
  },
  {
    question: "¿Cómo puedo solicitar una cita?",
    answer:
      "Puedes ponerte en contacto con Mayte a través de los canales disponibles en la web para consultar disponibilidad y encontrar el momento más adecuado para comenzar.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section
      className="faq section"
      id="preguntas"
    >
      <div className="faq__container">

        {/* CABECERA */}
        <div className="faq__header">

          <div className="section-label">
            <span className="gold-line"></span>
            Preguntas frecuentes
          </div>

          <h2 className="faq__title">
            Antes de
            <span>empezar.</span>
          </h2>

          <p className="faq__intro">
            Es normal tener preguntas antes de dar el primer paso.
            Aquí encontrarás algunas de las más habituales.
          </p>

        </div>

        {/* PREGUNTAS */}
        <div className="faq__list">

          {questions.map((item, index) => {

            const isOpen =
              activeIndex === index;

            return (
              <div
                className={`faq__item ${
                  isOpen
                    ? "faq__item--open"
                    : ""
                }`}
                key={item.question}
              >

                <button
                  type="button"
                  className="faq__question"
                  onClick={() =>
                    toggleQuestion(index)
                  }
                  aria-expanded={isOpen}
                >

                  <span className="faq__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq__question-text">
                    {item.question}
                  </span>

                  <span
                    className="faq__icon"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                </button>

                <div
                  className="faq__answer"
                  aria-hidden={!isOpen}
                >
                  <p>
                    {item.answer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* CIERRE */}
        <div className="faq__footer">

          <div>

            <span className="faq__footer-label">
              ¿No encuentras lo que buscas?
            </span>

            <h3>
              Puedes preguntarme directamente.
            </h3>

          </div>

          <a
            href="#citas"
            className="faq__cta"
          >
            Contactar
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default FAQ;