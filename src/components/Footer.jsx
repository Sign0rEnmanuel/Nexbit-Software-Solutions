import logo from "../assets/nexbit-logo-pixel-dark.svg";
import gif from "../assets/donghastling.gif";
import "../styles/components/Footer.css";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <img className="footer-bg-logo" src={logo} aria-hidden="true" alt="" />
            <div className="footer-content">
                <div className="footer-info">
                    <img className="footer-logo" src={logo} alt="NEXBITSS" />
                    <p className="footer-text">
                        © 2026 NEXBITSS SOFTWARE SOLUTIONS.
                        <br />
                        {t.footer.rights}
                    </p>
                    <p className="footer-madewithlove">
                        {t.footer.madeBy}{" "}
                        <a
                            href="https://github.com/Sign0rEnmanuel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            DonGhastling
                        </a>
                    </p>
                </div>
                <div className="footer-gif-donghastling">
                    <img src={gif} alt="DonGhastling" />
                </div>
            </div>
        </footer>
    );
}
