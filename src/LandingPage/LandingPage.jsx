import './LandingPage.css'

function LandingPage() {
    return (
        <section className="hero">
            <div className="content">
                <p className='hero-text'>Dosis exactas, menos preocupaciones</p>
                <h1 className='hero-text hero-title'>Tecnología que cuida de tu salud: <br /> <span className='hero-title typh'>Tecnopill</span></h1>
            </div>
            <img
                className="hero-img"
                src="../assets/img/landing/hero_section.png"
                alt="producto"
            />
            <img
                className="hero-img-mobile"
                src="../assets/img/landing/hero-section-mobile.png"
                alt="producto"
            />
        </section>
    );
}

export default LandingPage;