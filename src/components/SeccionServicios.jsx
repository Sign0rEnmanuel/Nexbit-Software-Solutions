import PixelBlast from "../animations/PixelBlast/PixelBlast.jsx";
import "../styles/components/SeccionServicios.css";
import { useLanguage } from "../context/LanguageContext";

export default function SeccionServicios() {
    const { t } = useLanguage();

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
                    <span className="services-blink">{t.services.label}</span>
                    <span className="services-nexbit">NEXBIT</span>
                </div>
                <h2>
                    {t.services.title.line1}
                    <br />
                    {t.services.title.line2}
                </h2>
                <p className="services-description">{t.services.desc}</p>
                <div className="services-grid">
                    {t.services.items.map((item, i) => (
                        <div className="services-grid-box" key={i}>
                            <p className="emogi">{item.emoji}</p>
                            <h3 className="mini-title">{item.title}</h3>
                            <p className="paragraph">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
