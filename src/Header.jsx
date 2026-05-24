import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="logo">TecnoPill</div>

            <nav className="nav">
                <Link to="/">Inicio</Link>
                <Link to="/conocemas">Conoce Más</Link>
                <Link to="/sobre">Sobre Nosotros</Link>
            </nav>

            <Link to="/contacto">
                <button className="cta">Contacto</button>
            </Link>
        </header>
    );
}

export default Header;