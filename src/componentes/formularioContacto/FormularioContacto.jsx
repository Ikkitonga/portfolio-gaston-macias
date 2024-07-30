import "./formularioContacto.css";

const FormularioContacto = () => {
    return <form className="formulario">
        <div className="">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" />
            <label htmlFor="">Apellido</label>
            <input type="text" />
        </div>
    </form>
}

export default FormularioContacto;