import { Link } from "react-router-dom";

import PixelSnow from "../animations/PixelSnow/PixelSnow.jsx";
import "../styles/components/SeccionInicial.css";

export default function SeccionInicial() {
    return (
        <section className="main-section-initial">
            <div className="main-section-back">
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
            <div className="initial-content">
                <div className="initial-left">
                    <div className="hero-label">
                        <span className="cursor"></span>
                        <span className="blink_">SISTEMA ONLINE</span>
                        <span className="nexbit">
                            // [ NEXBIT SOFTWARE SOLUTIONS ]
                        </span>
                    </div>
                    <h1>
                        TU NEGOCIO
                        <br />
                        <span className="initial-h1-span">MERECE ESTAR</span>
                        <br />
                        <span className="initial-h1-span animation">
                            EN INTERNET.
                        </span>
                    </h1>
                    <p className="hero-content">
                        En NEXTBITSS desarrollamos soluciones digitales a medida
                        para impulsar tu negocio en el mundo online. Desde
                        sitios web atractivos hasta aplicaciones personalizadas,
                        estamos aquí para ayudarte a destacar en la era digital.
                    </p>
                    <div className="hero-actions">
                        <Link to="/projects">
                            <button className="btn btn-primary">
                                Ver Proyectos
                            </button>
                        </Link>
                        <Link to="/aboutus">
                            <button className="btn btn-secondary">
                                Sobre Nosotros
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="initial-right">
                    <div className="nss-logo">
                        <span className="nss-letter nss-n">N</span>
                        <span className="nss-letter nss-s1">S</span>
                        <span className="nss-letter nss-s2">S</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
