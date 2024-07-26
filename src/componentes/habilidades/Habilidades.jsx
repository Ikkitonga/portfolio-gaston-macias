
import ListaDeHabilidadesFront from "../listaDeHabilidadesFront/ListaDeHabilidadesFront";
import ListaDeHabilidades from "../listaDeHabilidadesTesting/ListaDeHabilidadesTesting";
import "./habilidades.css";



const Habilidades = () => {
    return <section className="seccion__habilidades">
        <h2>HABILIDADES</h2>
        <div className="contenedor__habilidades">
        
            <div className="habilidades__front">
                <h3>FRONTEND</h3>
                <div>
                    <ListaDeHabilidadesFront />
                </div>
            </div>

            <div className="habilidades__testing">
                <h3>TESTING</h3>
                <div>
                    <ListaDeHabilidades />
                </div>
            </div>
        </div>
    </section>
}

export default Habilidades