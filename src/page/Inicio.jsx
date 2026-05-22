import SeccionInicial from "../components/SeccionInicial.jsx";
import SeccionServicios from "../components/SeccionServicios.jsx";
import SeccionProceso from "../components/SeccionProceso.jsx";

import "../styles/pages/Inicio.css";

export default function Inicio() {
    return (
        <main className="main">
            <SeccionInicial />
            <SeccionServicios />
            <SeccionProceso />
        </main>
    );
}
