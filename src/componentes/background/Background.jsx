import "./background.css";

const Background = ({ imageUrl, children }) => {
    return <div className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
        {children}
    </div>
}

export default Background