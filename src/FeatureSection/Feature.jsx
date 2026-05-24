import "./Feature.css";

function Feature() {
    return (
        <section className="problema">
            <div className="problema-container">

                {/* Lado izquierdo */}
                <div className="problema-left">
                    <h2>
                        Tomar tus medicamentos <br />
                        no debería ser complicado
                    </h2>

                    <p>
                        Muchas personas enfrentan problemas diarios al intentar llevar un control adecuado
                        de sus tratamientos, lo que puede afectar directamente su salud.
                    </p>

                    <div className="problema-icons">
                        <div>
                            <i className="fa-solid fa-clock"></i>
                            <p>Olvidos constantes</p>
                        </div>

                        <div>
                            <i className="fa-solid fa-circle-question"></i>
                            <p>Dudas en dosis</p>
                        </div>
                    </div>
                </div>

                {/* Lado derecho */}
                <div className="problema-right">
                    <div className="card">
                        <div className="card-img">
                            <i className="fa-solid fa-clock"></i>
                        </div>
                        <div>
                            <h4>Olvidas tus medicamentos</h4>
                            <p>
                                Entre el día a día, es fácil olvidar una dosis importante.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <i className="fa-solid fa-circle-question"></i>
                        </div>
                        <div>
                            <h4>No sabes si ya la tomaste</h4>
                            <p>
                                La falta de seguimiento genera confusión y riesgo.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <i className="fa-solid fa-calendar-days"></i>
                        </div>
                        <div>
                            <h4>Horarios complicados</h4>
                            <p>
                                Múltiples medicamentos con horarios diferentes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature;