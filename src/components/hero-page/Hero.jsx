import { useNavigate } from "react-router-dom";
import "./hero.css";

function Hero() {
    const navigate = useNavigate();
    const contactClick = () => {
        navigate("/contact");
        window.scrollTo(0, 0);
    };

    return (
        <section className="home">
            <div className="home-cntnr">
                <h1>Live Green, Dream in GreenVista</h1>
                <p>
                    House and lot for every Filipino&apos;s dream of modern,
                    comfortable living, designed for families seeking style,
                    functionality, and affordability in homes.
                </p>
                <button onClick={contactClick}>INQUIRE NOW</button>
            </div>
        </section>
    );
}

export default Hero;
