import SeccionInicial from "../components/SeccionInicial.jsx";
import SeccionServicios from "../components/SeccionServicios.jsx";

import "../styles/pages/Inicio.css";

export default function Inicio() {
    return (
        <main className="main">
            <SeccionInicial />
            <SeccionServicios />
        </main>
    );
}
