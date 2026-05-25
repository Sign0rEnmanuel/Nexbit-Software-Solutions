import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./page/Inicio";
import Proyectos from "./page/Proyectos";
import Nosotros from "./page/Nosotros";
import { LanguageProvider } from "./context/LanguageContext";
import PixelSnow from "./animations/PixelSnow/PixelSnow.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <LanguageProvider>
            <div className="app-bg">
                <PixelSnow
                    color="#9aa0a8"
                    flakeSize={0.01}
                    minFlakeSize={1.25}
                    pixelResolution={200}
                    speed={0.1}
                    density={0.75}
                    direction={220}
                    brightness={2.5}
                    depthFade={8}
                    farPlane={20}
                    gamma={0.4545}
                    variant="square"
                />
            </div>
            <Router>
                <div className="app-content">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/projects" element={<Proyectos />} />
                        <Route path="/aboutus" element={<Nosotros />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </LanguageProvider>
    );
}
