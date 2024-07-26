import "./home.css";

const Home = () => {
    return <section className="home__contenedor">
        <div className="presentacion_vinculos">
            <div className="home__presentacion">
                <h1>Hola, soy <span className="resalte">Gaston</span> y este es mi Portfolio</h1>

                <p className="home__parrafo">Desarrollador <span className="resalte">FRONTEND</span> Y <span className="resalte">Tester QA</span></p>
                <p className="home__parrafo">Ademas soy <span className="resalte">Técnico ELECTRONICO</span> orientado a las telecomunicaciones</p>
            </div>

            <div className="home__vinculos">
                <a href="https://github.com/Ikkitonga" target="_blank"><i className="fa-brands fa-square-github"></i></a>

                <a href="https://www.linkedin.com/in/gastonezequielmacias" target="_blank"><i
                    className="fa-brands fa-linkedin"></i></a>

                <a href="./CURRICULUM/Gaston Ezequiel Macias.pdf" className="curriculum" target="_blank">CV para descarga</a>
            </div>
        </div>
    </section>
}

export default Home;