import "../styles/components/SeccionServicios.css";
import { useLanguage } from "../context/LanguageContext";

export default function SeccionServicios() {
    const { t } = useLanguage();

    return (
        <section className="main-section-services">
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
