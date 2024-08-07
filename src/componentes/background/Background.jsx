import "./background.css";

const Background = ({ imageUrl, children }) => {

    // la constante isMobile es para cambiar el fondo de pantalla para la media query de moviles a partir de los 430px

    const isMobile = window.innerWidth <= 430;
    const mobileImageUrl = "https://i.pinimg.com/736x/62/c2/30/62c230e25c6239c33d2954641b9f5467.jpg"

    return <div className="background" style={{backgroundImage: `url(${isMobile ? mobileImageUrl : imageUrl})`}}>
        {children}
    </div>
}

export default Background