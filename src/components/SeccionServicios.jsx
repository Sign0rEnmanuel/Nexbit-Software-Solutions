import PixelBlast from "../animations/PixelBlast/PixelBlast.jsx";
import "../styles/components/SeccionServicios.css";

export default function SeccionServicios() {
    return (
        <section className="main-section-services">
            <div className="main-section-back">
                <PixelBlast
                    variant="square"
                    pixelSize={5}
                    color="#2351a0"
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
            <div className="services-content">
                <div className="services-label">
                    <span className="services-cursor"></span>
                    <span className="services-blink">SERVICIOS</span>
                    <span className="services-nexbit">NEXBIT</span>
                </div>
                <h2>
                    Lo que hacemos
                    <br />
                    por tu negocio.
                </h2>
                <p className="services-description">
                    Ofrecemos soluciones integrales para impulsar el crecimiento
                    de tu empresa en el entorno digital.
                </p>
                <div className="services-grid">
                    <div className="services-grid-box">
                        <p className="emogi">🌐</p>
                        <h3 className="mini-title">Sitio Web Profesional</h3>
                        <p className="paragraph">
                            Diseñamos y desarrollamos sitios web modernos y
                            funcionales que reflejan la identidad de tu marca.
                        </p>
                    </div>
                    <div className="services-grid-box">
                        <p className="emogi">🛒</p>
                        <h3 className="mini-title">E-commerce</h3>
                        <p className="paragraph">
                            Creamos tiendas online funcionales y atractivas que
                            aumentan las ventas y mejoran la experiencia del
                            cliente.
                        </p>
                    </div>
                    <div className="services-grid-box">
                        <p className="emogi">📱</p>
                        <h3 className="mini-title">Diseño Responsive</h3>
                        <p className="paragraph">
                            Creamos diseños que se adaptan perfectamente a
                            cualquier dispositivo, garantizando una experiencia
                            óptima para todos los usuarios.
                        </p>
                    </div>
                    <div className="services-grid-box">
                        <p className="emogi">🔍</p>
                        <h3 className="mini-title">Optimización SEO</h3>
                        <p className="paragraph">
                            Mejoramos la visibilidad de tu sitio web en los
                            motores de búsqueda, aumentando el tráfico orgánico
                            y la exposición de tu marca.
                        </p>
                    </div>
                    <div className="services-grid-box">
                        <p className="emogi">⚙️</p>
                        <h3 className="mini-title">Desarrollo de Software</h3>
                        <p className="paragraph">
                            Creamos aplicaciones personalizadas que se adaptan a
                            las necesidades específicas de tu negocio, mejorando
                            la eficiencia y la productividad.
                        </p>
                    </div>
                    <div className="services-grid-box">
                        <p className="emogi">🛠️</p>
                        <h3 className="mini-title">Soporte Post-Entrega</h3>
                        <p className="paragraph">
                            Ofrecemos servicios de soporte técnico y
                            mantenimiento para garantizar el correcto
                            funcionamiento de tus soluciones digitales (tiempo
                            limitado).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
