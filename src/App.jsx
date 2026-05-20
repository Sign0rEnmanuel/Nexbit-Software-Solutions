import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Inicio</h1>} />
                <Route path="/projects" element={<h1>Proyectos</h1>} />
                <Route path="/aboutus" element={<h1>Sobre Nosotros</h1>} />
            </Routes>
        </Router>
    );
}
