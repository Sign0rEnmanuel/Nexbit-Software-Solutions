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
                    {t.projects.items.map((item, index) => (
                        <div className="projects-grid-box" key={index}>
                            <img
                                className="projects-grid-box-img"
                                src={item.src}
                                alt={item.alt}
                            />
                            <h3 className="projects-grid-box-title">
                                {item.title}
                            </h3>
                            <p className="projects-grid-box-desc">
                                {item.desc}
                            </p>
                            <a
                                className="projects-grid-box-link"
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.link.replace(/^https?:\/\//, "")}
                            </a>
                        </div>
                    ))}
                </div>
                <p className="projects-final">{t.projects.final}</p>
            </section>
        </main>
    );
}
