import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return <footer>
        <div className="footer__nombre">
            <h2>GASTÓN</h2>
        </div>
        <div className="footer__vinculos">
            <a href="https://github.com/Ikkitonga" target="_blank"><FaGithub /></a>

            <a href="https://www.linkedin.com/in/gastonezequielmacias" target="_blank"><FaLinkedin /></a>
        </div>
    </footer>
}

export default Footer;