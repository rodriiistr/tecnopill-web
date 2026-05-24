import './ObtenerTecnopill.css'

function ObtenerTecnopill() {
    return (
        <section className="obtener-tp">
            <div className="content">
                <p className='hero-text'>Consigue tu dispositivo</p>
                <h1 className='hero-text hero-title obtener-tp-h1'>
                    Lleva el control de tu medicación <br />
                    <span className='hero-title typh'>con Tecnopill</span>
                </h1>

                <button className="tp-btn">Obtener ahora</button>
            </div>

            <img
                className="obtener-tp-img"
                src="../assets/img/obtener-tecnopill/obtener-tecnopill.png"
                alt="producto"
            />
        </section>
    );
}

export default ObtenerTecnopill;