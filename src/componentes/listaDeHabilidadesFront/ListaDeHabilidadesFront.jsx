import "./listaDeHabilidadesFront.css";
import HabilidadesFront from "../habilidadesFront/HabilidadesFront"

let habilidades = [
    { habilidad: "HTML", porcentaje: "90%", icono: "fa-brands fa-html5"},
    { habilidad: "CSS", porcentaje: "85%", icono: "fa-brands fa-css3-alt" },
    { habilidad: "JAVASCRIPT", porcentaje: "70%", icono: "fa-brands fa-js" },
    { habilidad: "REACT", porcentaje: "80%", icono: "fa-brands fa-react" },
    { habilidad: "BOOTSTRAP", porcentaje: "65%", icono: "fa-brands fa-bootstrap" },
    { habilidad: "GITHUB", porcentaje: "75%", icono: "fa-brands fa-github" },
    { habilidad: "GITLAB", porcentaje: "55%", icono: "fa-brands fa-gitlab" },
    { habilidad: "FIGMA", porcentaje: "45%", icono: "fa-brands fa-figma" },
    { habilidad: "TRELLO", porcentaje: "45%", icono: "fa-brands fa-trello" }
];


const ListaDeHabilidadesFront = () => {
    return (
        <div className="lista_habilidades">
            {habilidades.map((item, index) => (
                <HabilidadesFront 
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

export default ListaDeHabilidadesFront;