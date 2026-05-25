import React from "react";
import "../styles/components/SeccionProceso.css";
import { useLanguage } from "../context/LanguageContext";

export default function SeccionProceso() {
    const { t } = useLanguage();

    return (
        <section className="main-section-process">
            <div className="process-content">
                <div className="process-label">
                    <span className="process-marker">›</span>
                    <span className="process-text">{t.process.label}</span>
                </div>
                <h2 className="process-title">
                    {t.process.title.line1}
                    <br />
                    {t.process.title.line2}
                </h2>
                <p className="process-description">{t.process.desc}</p>
                <div className="process-flex">
                    {t.process.steps.map((step, i) => (
                        <React.Fragment key={step.num}>
                            <div className="process-flex-box">
                                <span className="process-number">{step.num}</span>
                                <h3 className="process-step-title">{step.title}</h3>
                                <p className="process-step-desc">{step.desc}</p>
                            </div>
                            {i < t.process.steps.length - 1 && (
                                <span className="process-arrow">›</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
