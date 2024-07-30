import FormularioContacto from "../formularioContacto/FormularioContacto";
import "./contacto.css";


const Contacto = () => {
    return <section className="seccion__contacto" id="contacto">
        <h2>CONTACTO</h2>
        <div className="contenedor__formulario">
            <FormularioContacto />
        </div>
    </section>
}


export default Contacto;