import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage/LandingPage";
import Feature from "./FeatureSection/Feature";
import Beneficios from "./Beneficios/Beneficios";
import ObtenerTecnopill from "./ObtenerTecnopill/ObtenerTecnopill";
import Footer from "./Footer"

// Elemento en Route 
import Contacto from "./pages/Contacto/Contacto"
import About from "./pages/About/About"
import ConoceMas from "./pages/ConoceMas/ConoceMas"

function Home() {
  return (
    <>
      <LandingPage />
      <Feature />
      <Beneficios />
      <ObtenerTecnopill />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/conocemas" element={<ConoceMas />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;