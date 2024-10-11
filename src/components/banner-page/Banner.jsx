import { useNavigate } from "react-router-dom";
import "./banner.css";

function Banner() {
    const navigate = useNavigate();
    const orderNowClick = () => {
        navigate("/house-and-lot");
        window.scrollTo(0, 0);
    };

    return (
        <section className="banner">
            <div className="banner-cntnr">
                <h2>Own Your GreenVista Home Today</h2>
                <p>
                    Open the gateway to your ideal home and begin your journey
                    to fulfillment. Explore our house and lot properties now to
                    find the home you deserve.
                </p>
                <button onClick={orderNowClick}>EXPLORE HOMES</button>
            </div>
        </section>
    );
}

export default Banner;
