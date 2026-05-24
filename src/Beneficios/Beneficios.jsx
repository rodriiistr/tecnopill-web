import "./Beneficios.css";

function Beneficios() {
    return (
        <section className="beneficios">
            <div className="beneficios-text">
                <h2> Más control, menos preocupación <br /> en tu tratamiento </h2>
                <p>TecnoPill te ayuda a mantener un seguimiento claro, preciso y automático
                de tus medicamentos.</p>
            </div>

            <div className="beneficios-grid">
                <div className="box tall img-1">
                    <h4>Recordatorios inteligentes</h4>
                    <p>No vuelvas a olvidar una dosis importante.</p>
                </div>
                <div className="box medium img-2">
                    <h4>Seguimiento en tiempo real</h4>
                    <p>Controla tu medicación desde cualquier lugar.</p>
                </div>
                <div className="box tall img-3">
                    <h4>Almacenamiento amplio</h4>
                    <p>Almacenamiento amplio de dosis para mayor autonomía y menos recargas frecuentes.</p>
                </div>
                <div className="box medium img-4">
                    <h4>Integración completa</h4>
                    <p>En donde sea que te encuentres</p>
                </div>
            </div>
        </section>
    );
}

export default Beneficios;