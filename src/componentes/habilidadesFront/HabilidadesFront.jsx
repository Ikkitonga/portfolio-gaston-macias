import "./habilidadesFront.css";

const HabilidadesFront = () => {
    return <div className="contenedor__habilidades__front">
        <div className="habilidad">
            <p><span className="habilidad__titulo">HTML</span><i className="fa-brands fa-html5"></i></p>
            <div className="progreso" ></div>
        </div>

        <div className="habilidad">
            <p><span className="habilidad__titulo">CSS</span><i className="fa-brands fa-css3-alt"></i></p>
            <div className="progreso"></div>
        </div>

        <div className="habilidad">
            <p><span className="habilidad__titulo">JAVASCRIPT</span><i className="fa-brands fa-js"></i></p>
            <div className="progreso"></div>
        </div>

        <div className="habilidad">
            <p><span className="habilidad__titulo">React</span><i className="fa-brands fa-react"></i></p>
            <div className="progreso"></div>
        </div>

        <div className="habilidad">
            <p><span className="habilidad__titulo">Bootstrap</span><i className="fa-brands fa-bootstrap"></i></p>
            <div className="progreso"></div>
        </div>

        <div className="habilidad">
            <p><span className="habilidad__titulo">Github</span><i className="fa-brands fa-github"></i></p>
            <div className="progreso"></div>
        </div>

        <div className="habilidad">
            <p><span className="habilidad__titulo">Gitlab</span><i className="fa-brands fa-gitlab"></i></p>
            <div className="progreso"></div>
        </div>

        <div className="habilidad">
            <p><span className="habilidad__titulo">Figma</span><i className="fa-brands fa-figma"></i></p>
            <div className="progreso"></div>
        </div>

        <div className="habilidad">
            <p><span className="habilidad__titulo">Trello</span><i className="fa-brands fa-trello"></i></p>
            <div className="progreso"></div>
        </div>
    </div>
}

export default HabilidadesFront

