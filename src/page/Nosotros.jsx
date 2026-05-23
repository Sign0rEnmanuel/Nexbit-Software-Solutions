import PixelSnow from "../animations/PixelSnow/PixelSnow.jsx";
import "../styles/pages/Nosotros.css";

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
                            <div className="nosotros-grid-box"></div>
                            <div className="nosotros-grid-box"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
