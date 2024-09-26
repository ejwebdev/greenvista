import aboutImg from "../../assets/about-img.webp";
import "./about.css";

const aboutRight = [
    {
        icon: "security",
        title: "Safety and Security",
        desc: "Gated entrance with 24/7 security",
    },
    {
        icon: "map",
        title: "Convenience and Accessibility",
        desc: "Close to essential amenities and attractions",
    },
    {
        icon: "cases",
        title: "Wise Investment",
        desc: "Properties that appreciate and generate income",
    },
];

function About() {
    return (
        <section className="about" id="aboutus">
            <div className="about-cntnr">
                <img
                    src={aboutImg}
                    alt="GreenVista About Image"
                    draggable="false"
                />
                <div className="about-right">
                    <h3>About Us</h3>
                    <h2>Our Mission and Vision</h2>
                    <p>
                        To be the leading real estate developer in the
                        Philippines, providing quality homes in vibrant
                        communities that enhance lives, ensure safety, and
                        foster wise investments for Filipino families.
                    </p>
                    <div className="about-right-grid">
                        {aboutRight.map((aboutRight, index) => (
                            <div key={index}>
                                <span className="material-symbols-rounded">
                                    {aboutRight.icon}
                                </span>
                                <div>
                                    <h3>{aboutRight.title}</h3>
                                    <p>{aboutRight.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
