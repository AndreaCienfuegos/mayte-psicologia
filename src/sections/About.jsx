import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__container">

        <div className="about__header">

          <span className="section-label">
            SOBRE MÍ
          </span>

          <h2 className="about__title">
            Acompañarte también
            <span>es escucharte.</span>
          </h2>

        </div>

        <div className="about__content">

          <div className="about__visual">

            <div className="about__image-frame">
              <img
                src={`${import.meta.env.BASE_URL}mayte-about.jpg`}
                alt="Mayte Cacharrón"
                className="about__image"
              />
            </div>

          </div>

          <div className="about__text">

            <p className="about__lead">
              Soy Mayte Cacharrón, psicóloga sanitaria y logopeda.
            </p>

            <p>
              Mi forma de trabajar parte de una idea sencilla: cada persona
              necesita ser escuchada y acompañada desde su propia historia,
              sus necesidades y su momento vital.
            </p>

            <p>
              Creo en una intervención cercana, profesional y personalizada,
              donde puedas sentirte comprendido/a y avanzar a tu propio ritmo.
            </p>

            <div className="about__signature">
              <span>Mayte Cacharrón</span>
              <small>
                Psicóloga sanitaria · Logopeda
              </small>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;