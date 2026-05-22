import "../styles/components/SeccionProceso.css";
import PixelSnow from "../animations/PixelSnow/PixelSnow.jsx";

export default function SeccionProceso() {
    return (
        <section className="main-section-process">
            <div className="main-section-back">
                <PixelSnow
                    color="#7c3aed"
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
            <div className="process-content">
                <div className="process-label">
                    <span className="process-marker">›</span>
                    <span className="process-text">PROCESO</span>
                </div>
                <h2 className="process-title">
                    ASÍ TRABAJAMOS
                    <br />
                    CONTIGO
                </h2>
                <p className="process-description">
                    Simple, transparente y sin sorpresas.
                </p>
                <div className="process-flex">
                    <div className="process-flex-box">
                        <span className="process-number">01</span>
                        <h3 className="process-step-title">CONVERSAMOS</h3>
                        <p className="process-step-desc">
                            Nos cuentas sobre tu negocio y lo que necesitas. Sin
                            tecnicismos.
                        </p>
                    </div>
                    <span className="process-arrow">›</span>
                    <div className="process-flex-box">
                        <span className="process-number">02</span>
                        <h3 className="process-step-title">PLANIFICAMOS</h3>
                        <p className="process-step-desc">
                            Propuesta clara: qué hacemos, cuánto cuesta y en
                            cuánto tiempo.
                        </p>
                    </div>
                    <span className="process-arrow">›</span>
                    <div className="process-flex-box">
                        <span className="process-number">03</span>
                        <h3 className="process-step-title">CONSTRUIMOS</h3>
                        <p className="process-step-desc">
                            Desarrollamos tu sitio con actualizaciones
                            frecuentes.
                        </p>
                    </div>
                    <span className="process-arrow">›</span>
                    <div className="process-flex-box">
                        <span className="process-number">04</span>
                        <h3 className="process-step-title">LANZAMOS</h3>
                        <p className="process-step-desc">
                            Publicamos y te enseñamos a usarlo. Seguimos contigo
                            después.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
