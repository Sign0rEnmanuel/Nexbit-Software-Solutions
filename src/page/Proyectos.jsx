import PixelBlast from "../animations/PixelBlast/PixelBlast.jsx";
import "../styles/pages/Proyectos.css";
import { useLanguage } from "../context/LanguageContext";

export default function Proyectos() {
    const { t } = useLanguage();
    return (
        <main className="main-projects">
            <div className="main-section-back">
                <PixelBlast
                    variant="square"
                    pixelSize={5}
                    color="#9b9aa8"
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
            <section className="projects-content">
                <div className="projects-label">
                    <span className="cursor"></span>
                    <span className="text">{t.projects.label}</span>
                    <span className="nexbit">NEXBIT</span>
                </div>
                <h2>
                    {t.projects.title.line1}
                    <br />
                    {t.projects.title.line2}
                </h2>
                <p className="projects-description">{t.projects.desc}</p>
                <div className="projects-grid">
                    <div className="projects-grid-box"></div>
                    <div className="projects-grid-box"></div>
                    <div className="projects-grid-box"></div>
                    <div className="projects-grid-box"></div>
                    <div className="projects-grid-box"></div>
                    <div className="projects-grid-box"></div>
                </div>
            </section>
        </main>
    );
}
