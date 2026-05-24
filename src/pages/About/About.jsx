import "./About.css";

function About() {
    return (
        <section className="sobre">
            <div className="sobre-container">
                <div className="sobre-text">
                    <p className="tag">Sobre Nosotros</p>
                    <h2>
                        Tecnología que cuida de ti,
                        <br /> sin complicaciones
                    </h2>

                    <p className="desc">
                        En <strong>TecnoPill</strong>, desarrollamos soluciones inteligentes
                        para ayudarte a llevar un control preciso y automático de tus medicamentos.
                        Nuestro objetivo es reducir olvidos y mejorar la calidad de vida de las personas.
                    </p>

                    <p className="desc">
                        Combinamos innovación, diseño y accesibilidad para crear
                        un dispositivo confiable tanto para pacientes como para sus familias.
                    </p>

                    <button 
                        className="btn" 
                        id="conocer-mas"
                        onClick={() => {
                            document.getElementById("info-extra").scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Conocer más
                    </button>
                </div>
                <div className="sobre-img">
                    <img src="./assets/img/about/sobre-nosotros.png" alt="TecnoPill dispositivo" />
                </div>
            </div>

            <div className="info-extra" id="info-extra">
                <h3>Nuestro propósito</h3>
                <p>
                    Queremos que ninguna persona vuelva a preocuparse por olvidar
                    sus medicamentos. TecnoPill nace para brindar tranquilidad,
                    control y bienestar en el día a día.
                </p>

                <p>
                    Sabemos que seguir un tratamiento correctamente puede ser complicado,
                    especialmente cuando se manejan múltiples horarios o medicamentos.
                    Por eso diseñamos una solución que automatiza el proceso y reduce
                    errores humanos.
                </p>

                <p>
                    Nuestro enfoque no solo está en la tecnología, sino en las personas.
                    Buscamos mejorar la calidad de vida de pacientes y también dar
                    seguridad a sus familias, permitiéndoles estar informados y tranquilos.
                </p>

                <p>
                    TecnoPill es el resultado de combinar innovación, empatía y accesibilidad,
                    creando una herramienta que se adapta a la vida diaria sin complicarla.
                </p>

                <div className="valores">
                    <h3>Nuestros valores</h3>

                    <div className="valores-list">
                        <div className="valores-card">
                            <div className="icono">
                                <i className="fa-solid fa-lightbulb"></i>
                            </div>
                            <h4>Innovación</h4>
                            <p>Mejoramos constantemente con tecnología.</p>
                        </div>

                        <div className="valores-card">
                            <div className="icono">
                                <i className="fa-solid fa-universal-access"></i>
                            </div>
                            <h4>Accesibilidad</h4>
                            <p>Diseñado para ser fácil de usar.</p>
                        </div>

                        <div className="valores-card">
                            <div className="icono">
                                <i className="fa-solid fa-shield-heart"></i>
                            </div>
                            <h4>Confianza</h4>
                            <p>Tu salud es nuestra prioridad.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="equipo">
                <h3>El equipo detrás de TecnoPill</h3>

                <div className="equipo-list">
                    <div className="miembro">
                        <div className="avatar">A</div>
                        <h4>Alejandro Gutiérrez Núñez</h4>
                        <p>Hardware y prototipo | App Móvil</p>
                    </div>

                    <div className="miembro">
                        <div className="avatar">D</div>
                        <h4>Deiver Roque Rodas Torres</h4>
                        <p>Hardware y prototipo</p>
                    </div>

                    <div className="miembro">
                        <div className="avatar">X</div>
                        <h4>Xiomara Berenice Gómez Pérez</h4>
                        <p>Gestión de proyecto y análisis de costos</p>
                    </div>

                    <div className="miembro">
                        <div className="avatar">N</div>
                        <h4>Maricela Naomi Mayorga Espinosa</h4>
                        <p>Gestión de proyecto y análisis de costos</p>
                    </div>

                    <div className="miembro">
                        <div className="avatar">R</div>
                        <h4>Rodrigo González López</h4>
                        <p>Desarrollo Web y App Móvil</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;