import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* Logo */}
        <a href="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__name">Mayte</span>
          <span className="navbar__surname">Cacharrón</span>
        </a>

        {/* Navegación desktop */}
        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>
            Inicio
          </a>

          <a href="#sobre-mi" onClick={closeMenu}>
            Sobre mí
          </a>

          <a href="#especialidades" onClick={closeMenu}>
            Especialidades
          </a>

          <a href="#como-trabajo" onClick={closeMenu}>
            Cómo trabajo
          </a>

          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>

        {/* Acción principal */}
        <a
          href="#citas"
          className="navbar__cta"
          onClick={closeMenu}
        >
          Reservar cita
        </a>

        {/* Menú móvil */}
        <button
          className={`navbar__toggle ${
            menuOpen ? "navbar__toggle--active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
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