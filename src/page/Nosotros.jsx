import PixelSnow from "../animations/PixelSnow/PixelSnow.jsx";
import "../styles/pages/Nosotros.css";

import DonGastling from "../assets/ghastling.jpg";
import ReactIcon from "../assets/react.svg";
import ViteIcon from "../assets/vite.svg";
import NodeIcon from "../assets/nodejs.svg";
import ExpressIcon from "../assets/expressjs.svg";
import MongoIcon from "../assets/mongodb.svg";

export default function Nosotros() {
    return (
        <main className="main-nosotros">
            <div className="main-section-back">
                <PixelSnow
                    variant="round"
                    pixelSize={5}
                    color="#9aa0a8"
                    patternScale={4.5}
                    patternDensity={1.45}
                    pixelSizeJitter={1.95}
                    enableRipples={false}
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid={false}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={2.1}
                    edgeFade={0.25}
                    transparent
                />
            </div>
            <section className="nosotros-content">
                <div className="nosotros-label">
                    <span className="cursor"></span>
                    <span className="text">NOSOTROS</span>
                    <span className="nexbit">NEXBIT</span>
                </div>
                <div className="nosotros-grids">
                    <div className="nosotros-descriptions-left">
                        <h2>
                            JOVENES,
                            <br />
                            APASIONADOS
                            <br />
                            Y ENFOCADOS
                            <br />
                            EN RESULTADOS
                        </h2>
                        <p className="nosotros-description">
                            NexBit nació con una misión clara: ayudar a los
                            negocios locales a crecer en el mundo digital sin
                            gastar una fortuna ni perderse en tecnicismos.
                        </p>
                        <p className="nosotros-description">
                            Somos un equipo joven que combina creatividad con
                            tecnología de punta. Tu negocio nos importa tanto
                            como a ti — no somos solo proveedores, somos tu
                            socio digital.
                        </p>
                        <div className="nosotros-final">
                            <p>
                                "Cada negocio local merece tener la misma
                                presencia digital que las grandes marcas."
                            </p>
                        </div>
                    </div>
                    <div className="nosotros-descriptions-right">
                        <div className="nosotros-grid">
                            <div className="nosotros-grid-box">
                                <div className="logo">
                                    <img
                                        src={DonGastling}
                                        alt="Logo de DonGhastling"
                                    />
                                </div>
                                <h2 className="name">DonGhastling</h2>
                                <p className="position">
                                    Desarrollador Principal
                                </p>
                                <p className="description">
                                    Desarrollador web full stack MERN. Construyo
                                    soluciones digitales que generan impacto
                                    real.
                                </p>
                                <div className="technologies">
                                    <div className="technology">
                                        <span className="icon">
                                            <img src={ReactIcon} alt="React" />
                                        </span>
                                        <span className="name">React</span>
                                    </div>
                                    <div className="technology">
                                        <span className="icon">
                                            <img src={ViteIcon} alt="Vite" />
                                        </span>
                                        <span className="name">Vite</span>
                                    </div>
                                    <div className="technology">
                                        <span className="icon">
                                            <img src={NodeIcon} alt="Node.js" />
                                        </span>
                                        <span className="name">Node.js</span>
                                    </div>
                                    <div className="technology">
                                        <span className="icon">
                                            <img
                                                src={ExpressIcon}
                                                alt="Express.js"
                                            />
                                        </span>
                                        <span className="name">Express.js</span>
                                    </div>
                                    <div className="technology">
                                        <span className="icon">
                                            <img
                                                src={MongoIcon}
                                                alt="MongoDB"
                                            />
                                        </span>
                                        <span className="name">MongoDB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="nosotros-grid-box"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
