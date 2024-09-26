import "./hero.css";

function Hero() {
    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const buttonLink = () => {
        smoothScroll("contact");
    };

    return (
        <section className="home" id="home">
            <div className="home-cntnr">
                <h1>Live Green, Dream in GreenVista</h1>
                <h3>
                    House and lot for every Filipino&apos;s dream of modern,
                    comfortable living.
                </h3>
                <button onClick={buttonLink}>INQUIRE NOW</button>
            </div>
        </section>
    );
}

export default Hero;
