import './ObtenerTecnopill.css'

function ObtenerTecnopill() {
    return (
        <section className="obtener-tp">
            <div className="content-tp">
                <p className='hero-text-tp'>Consigue tu dispositivo</p>
                <h1 className='hero-text-tp hero-title-tp obtener-tp-h1'>
                    Lleva el control de tu medicación <br />
                    <span className='hero-title-tp typh-tp'>con Tecnopill</span>
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