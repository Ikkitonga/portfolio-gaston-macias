import "./navbar.css";


const Navbar = () => {
    return <nav className="navbar__contenedor">
        <div className="navbar__nombre">
            <h2>GASTÓN</h2>
        </div>
        <ul className="navbar__lista">
            <li className="lista__item"><a href="">Home</a></li>
            <li className="lista__item"><a href="">Habilidades</a></li>
            <li className="lista__item"><a href="">Educacion</a></li>
            <li className="lista__item"><a href="">Contacto</a></li>
        </ul>
    </nav>
}

export default Navbar;