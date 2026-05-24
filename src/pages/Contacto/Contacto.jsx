import "./Contacto.css";

function Contact() {
    return (
        <section className="contact">
            <div className="contact-container">
                {/* Izquierda */}
                <div className="contact-form">
                    <h1>Contáctanos</h1>

                    <div className="row">
                        <div className="input-group">
                            <label>Nombre</label>
                            <input type="text" placeholder="Mauricio" />
                        </div>

                        <div className="input-group">
                            <label>Apellidos</label>
                            <input type="text" placeholder="Gómez Pérez" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-group">
                            <label>Correo</label>
                            <input type="email" placeholder="mauricio@correo.com" />
                        </div>

                        <div className="input-group">
                            <label>Teléfono</label>
                            <input type="text" placeholder="9611234567" />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Mensaje</label>
                        <textarea placeholder="Escribe tu mensaje"></textarea>
                    </div>

                    <button className="btn">Enviar</button>
                </div>

                {/* RIGHT */}
                <div className="contact-side">
                    <div className="shape"></div>
                </div>

            </div>
        </section>
    );
}

export default Contact;