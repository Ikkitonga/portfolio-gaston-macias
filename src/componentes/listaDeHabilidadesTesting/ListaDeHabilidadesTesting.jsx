import "./listaDeHabilidadesTesting.css";
import HabilidadesTesting from "../habilidadesTesting/HabilidadesTesting";

let habilidades = [
    { habilidad: "Historias de usuario", porcentaje: "90%", icono: "fa-solid fa-bookmark" },
    { habilidad: "Casos de prueba", porcentaje: "85%", icono: "fa-regular fa-bookmark" },
    { habilidad: "Ejecucion de pruebas", porcentaje: "70%", icono: "fa-solid fa-bookmark" },
    { habilidad: "Testing de Accesibilidad", porcentaje: "80%", icono: "fa-regular fa-bookmark" },
    { habilidad: "JMeter", porcentaje: "65%", icono: "fa-solid fa-thermometer" },
    { habilidad: "Jira-Zephyr", porcentaje: "75%", icono: "fa-brands fa-jira" },
    { habilidad: "Selenium", porcentaje: "55%", icono: "fa-regular fa-circle-user" },
    { habilidad: "Postman", porcentaje: "45%", icono: "fa-solid fa-paper-plane" }
];


const ListaDeHabilidadesTesting = () => {
    return (
        <div className="lista_habilidades">
            {habilidades.map((item, index) => (
                <HabilidadesTesting
                    key={index}
                    habilidad={item.habilidad}
                    porcentaje={item.porcentaje}
                    icono={item.icono}
                />
            ))
            }
        </div>
    )
}

export default ListaDeHabilidadesTesting;