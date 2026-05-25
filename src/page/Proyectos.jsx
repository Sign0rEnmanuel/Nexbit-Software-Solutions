import "../styles/pages/Proyectos.css";
import { useLanguage } from "../context/LanguageContext";

export default function Proyectos() {
    const { t } = useLanguage();
    return (
        <main className="main-projects">
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
