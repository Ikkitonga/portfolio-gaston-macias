import "./formularioContacto.css";
import React, { useState } from "react";


const FormularioContacto = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
    };

    return <form className="seccion__formulario" onSubmit={handleSubmit}>

        <label htmlFor="nombre">Nombre:</label>
        <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
        />

        <label htmlFor="">Email:</label>
        <input type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
        />


        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
        />

        <button type="submit">ENVIAR</button>

    </form>
}

export default FormularioContacto;