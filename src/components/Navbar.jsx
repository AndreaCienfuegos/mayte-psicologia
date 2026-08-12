import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* =====================================================
            MARCA
        ===================================================== */}

        <a
          href={import.meta.env.BASE_URL}
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Mayte Cacharrón — Inicio"
        >
          <img
            src={`${import.meta.env.BASE_URL}logo-mark.svg`}
            alt=""
            className="navbar__mark"
            aria-hidden="true"
          />

          <span className="navbar__brand-text">
            <span className="navbar__name">
              Mayte
            </span>

            <span className="navbar__surname">
              Cacharrón
            </span>
          </span>
        </a>

        {/* =====================================================
            NAVEGACIÓN
        ===================================================== */}

        <nav
          id="main-navigation"
          className={`navbar__nav ${
            menuOpen ? "navbar__nav--open" : ""
          }`}
          aria-label="Navegación principal"
        >
          <a
            href="#inicio"
            onClick={closeMenu}
          >
            Inicio
          </a>

          <a
            href="#sobre-mi"
            onClick={closeMenu}
          >
            Sobre mí
          </a>

          <a
            href="#especialidades"
            onClick={closeMenu}
          >
            Especialidades
          </a>

          <a
            href="#como-trabajo"
            onClick={closeMenu}
          >
            Cómo trabajo
          </a>

          <a
            href="#contacto"
            onClick={closeMenu}
          >
            Contacto
          </a>

          <a
            href="#citas"
            className="navbar__mobile-cta"
            onClick={closeMenu}
          >
            Reservar cita
          </a>
        </nav>

        {/* =====================================================
            CTA DESKTOP
        ===================================================== */}

        <a
          href="#citas"
          className="navbar__cta"
          onClick={closeMenu}
        >
          Reservar cita
        </a>

        {/* =====================================================
            MENÚ MÓVIL
        ===================================================== */}

        <button
          type="button"
          className={`navbar__toggle ${
            menuOpen ? "navbar__toggle--active" : ""
          }`}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;