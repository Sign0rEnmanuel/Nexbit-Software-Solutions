import "../styles/pages/Nosotros.css";
import { useLanguage } from "../context/LanguageContext";

import DonGastling from "../assets/ghastling.jpg";
import ReactIcon from "../assets/react.svg";
import ViteIcon from "../assets/vite.svg";
import NodeIcon from "../assets/nodejs.svg";
import ExpressIcon from "../assets/expressjs.svg";
import MongoIcon from "../assets/mongodb.svg";

export default function Nosotros() {
    const { t } = useLanguage();
    return (
        <main className="main-nosotros">
            <section className="nosotros-content">
                <div className="nosotros-label">
                    <span className="cursor"></span>
                    <span className="text">{t.about.label}</span>
                    <span className="nexbit">NEXBIT</span>
                </div>
                <div className="nosotros-grids">
                    <div className="nosotros-descriptions-left">
                        <h2>
                            {t.about.title.line1}
                            <br />
                            {t.about.title.line2}
                            <br />
                            {t.about.title.line3}
                            <br />
                            {t.about.title.line4}
                        </h2>
                        <p className="nosotros-description">{t.about.desc1}</p>
                        <p className="nosotros-description">{t.about.desc2}</p>
                        <div className="nosotros-final">
                            <p>{t.about.quote}</p>
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
                                    {t.about.team[0].position}
                                </p>
                                <p className="description">
                                    {t.about.team[0].desc}
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
