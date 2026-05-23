import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./page/Inicio";
import Proyectos from "./page/Proyectos";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/projects" element={<Proyectos />} />
                <Route path="/aboutus" element={<h1>Sobre Nosotros</h1>} />
            </Routes>
            <Footer />
        </Router>
    );
}
