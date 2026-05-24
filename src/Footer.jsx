function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Marca */}
                <div className="footer-brand">
                    <div className="brand">
                        <div className="dot"></div>
                        <h2>TecnoPill</h2>
                    </div>

                    <p>
                        Innovación tecnológica enfocada en mejorar tu día a día con soluciones inteligentes.
                    </p>

                    <div className="stores">
                        <button className="store-btn">App Store</button>
                        <button className="store-btn">Google Play</button>
                    </div>
                </div>

                {/* Columnas */}
                <div className="footer-columns">
                    <div>
                        <h4>Explora</h4>
                        <a href="#">Producto</a>
                        <a href="#">Funciones</a>
                        <a href="#">Precios</a>
                        <a href="#">Demo</a>
                    </div>

                    <div>
                        <h4>Más</h4>
                        <a href="#">Soporte</a>
                        <a href="#">Guías</a>
                        <a href="#">FAQ</a>
                        <a href="#">Blog</a>
                    </div>

                    <div>
                        <h4>Nosotros</h4>
                        <a href="#">Equipo</a>
                        <a href="#">Misión</a>
                        <a href="#">Contacto</a>
                    </div>
                </div>
            </div>

            {/* Línea */}
            <div className="divider"></div>

            {/* Bottom */}
            <div className="footer-bottom">

                {/* Newsletter */}
                <div className="newsletter">
                    <p className="p-footer">Newsletter</p>
                    <div className="newsletter-box">
                        <input type="email" placeholder="Tu correo" />
                        <button>Suscribirse</button>
                    </div>
                </div>

                {/* Redes */}
                <div className="social">
                    <p className="p-footer">Síguenos</p>
                    <div className="icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                    </div>
                </div>
            </div>

            <p className="copyright">
                © {new Date().getFullYear()} TecnoPill. Todos los derechos reservados.
            </p>
        </footer>
    );
}

export default Footer;