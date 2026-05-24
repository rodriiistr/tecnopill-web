import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    return (
        <header className="header">
            <div className="logo">TecnoPill</div>

            {/* BOTÓN HAMBURGUESA */}
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>

            {/* NAV */}
            <nav className={`nav ${open ? "active" : ""}`}>
                <Link to="/" onClick={closeMenu}>Inicio</Link>
                <Link to="/conocemas" onClick={closeMenu}>Conoce Más</Link>
                <Link to="/sobre" onClick={closeMenu}>Sobre Nosotros</Link>

                <Link to="/contacto" onClick={closeMenu}>
                    <button className="cta mobile-cta">Contacto</button>
                </Link>
            </nav>

            {/* CTA desktop */}
            <Link to="/contacto" className="desktop-cta">
                <button className="cta">Contacto</button>
            </Link>
        </header>
    );
}

export default Header;