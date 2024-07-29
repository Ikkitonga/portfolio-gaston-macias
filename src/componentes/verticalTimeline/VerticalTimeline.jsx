import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaUserGraduate } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const LineaDeTiempo = () => {
    return <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            // date="2023 - present"
            iconStyle={{ background: 'rgb(138, 43, 226)', color: '#fff' }}
            icon={<FaUserGraduate />}
        >
            <h3 className="vertical-timeline-element-title">Desarrollo Frontend</h3>
            <h4 className="vertical-timeline-element-subtitle">Certificado</h4>
            <p>
                (Alura-Oracle) Curso Online con certificación en REACT.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="2021 - 2023"
            iconStyle={{ background: 'rgb(138, 43, 226)', color: '#fff' }}
            icon={<FaUserGraduate />}
        >
            <h3 className="vertical-timeline-element-title">Desarrollo Frontend</h3>
            <h4 className="vertical-timeline-element-subtitle">Certificado</h4>
            <p>
                (MINDHUB) Curso online con certificación en HTML, CSS, Js y diseño responsivo.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="2020 - 2021"
            iconStyle={{ background: 'rgb(138, 43, 226)', color: '#fff' }}
            icon={<FaUserGraduate />}
        >
            <h3 className="vertical-timeline-element-title">Desarrollo frontend</h3>
            <h4 className="vertical-timeline-element-subtitle">Certificado</h4>
            <p>
                (freeCodeCamp) Curso online con certificación HTML, CSS, Js y diseño responsivo.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="2020 - 2021"
            iconStyle={{ background: 'rgb(138, 43, 226)', color: '#fff' }}
            icon={<FaUserGraduate />}
        >
            <h3 className="vertical-timeline-element-title">Tester QA</h3>
            <h4 className="vertical-timeline-element-subtitle">Certificado</h4>
            <p>
                (MINDHUB) Curso online con certificación.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            // date="2000 - 2003"
            iconStyle={{ background: 'rgb(138, 43, 226)', color: '#fff' }}
            icon={<FaUserGraduate />}
        >
            <h3 className="vertical-timeline-element-title">Secundaria Tecnica</h3>
            <h4 className="vertical-timeline-element-subtitle">Certificado</h4>
            <p>
                Titulo de Técnico Electronico orientado a las telecomunicaciones dado por INSTITUTO MADERO
            </p>
        </VerticalTimelineElement>
        
        
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaStar />}
        />
    </VerticalTimeline>
}

export default LineaDeTiempo;
