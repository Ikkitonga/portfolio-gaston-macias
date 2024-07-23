import HabilidadesFront from "../habilidadesFront/HabilidadesFront";
import HabilidadesTesting from "../habilidadesTesting/HabilidadesTesting";
import "./habilidades.css";

const Habilidades = () => {
    return <section className="seccion__habilidades">
        <h2>HABILIDADES</h2>
        <div className="contenedor__habilidades">
        
            <div className="habilidades__front">
                <h3>FRONTEND</h3>
                <div className="front">
                    <HabilidadesFront />
                </div>
            </div>

            <div className="habilidades__testing">
                <h3>TESTING</h3>
                <div className="testing">
                    <HabilidadesTesting />
                </div>
            </div>
        </div>
    </section>
}

export default Habilidades