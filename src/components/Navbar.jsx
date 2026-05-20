import { Link } from "react-router-dom";

import logo from "../assets/nexbit-logo-pixel-dark.svg";
import "../styles/components/Navbar.css";

export default function Navbar() {
    return (
        <header className="header">
            <img className="header-logo" src={logo} alt="NexBitSS" />
            <nav className="header-nav-link">
                <Link to="/">
                    <button className="nav-button">Inicio</button>
                </Link>
                <Link to="projects">
                    <button className="nav-button">Proyectos</button>
                </Link>
                <Link to="aboutus">
                    <button className="nav-button">Sobre Nosotros</button>
                </Link>
            </nav>
            <nav className="header-nav-lw">
                <select name="languaje" id="languaje-select">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                </select>
                <a
                    href="https://wa.me/5541984376816"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="wht-button">WhatsApp</button>
                </a>
            </nav>
        </header>
    );
}
