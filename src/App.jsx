import Navbar from "./components/Navbar";
import Inicio from "./page/Inicio";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/projects" element={<h1>Proyectos</h1>} />
                <Route path="/aboutus" element={<h1>Sobre Nosotros</h1>} />
            </Routes>
        </Router>
    );
}
