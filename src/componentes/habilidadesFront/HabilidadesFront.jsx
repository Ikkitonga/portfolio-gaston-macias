import "./habilidadesFront.css";

const HabilidadesFront = ({habilidad, porcentaje, icono}) => {
    return <div className="contenedor__habilidades__front">
        <div className="habilidad-item">
            <div className="habilidad-info">
                <p>{habilidad}</p>
                <span className={icono}></span>
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: {porcentaje} }} aria-valuenow={porcentaje} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
}

export default HabilidadesFront

