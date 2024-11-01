import { Link } from "react-router-dom";
import services1 from "../../assets/services1.webp";
import services2 from "../../assets/services2.webp";
import "./services.css";

const services = [
    {
        img: services1,
        title: "For Our Buyers",
        desc: "Buying a property is exciting journey yet complex. Our guide simplifies the process, offering valuable insights for a smoother experience.",
        linkTitle: "Buyer's Guide",
        link: "/contact",
    },
    {
        img: services2,
        title: "For Our Sellers",
        desc: "Enhance your success and profitability as a partner. Use best practices, leverage your network, and offer exceptional service for effective sales.",
        linkTitle: "Seller's Guide",
        link: "https://forms.gle/2qitqHSL12dKCgcBA",
    },
];

function Services() {
    return (
        <section className="services">
            <div className="services-cntnr">
                <h3>Services</h3>
                <h2>Our Property Solutions</h2>
                <p>
                    We provide comprehensive services for buying and selling
                    properties, including expert consultations, market analysis,
                    and dedicated support to ensure a seamless real estate
                    experience.
                </p>
                <div className="services-grid">
                    {services.map((services, index) => (
                        <div key={index}>
                            <img
                                src={services.img}
                                alt="GreenVista Services"
                                draggable="false"
                            />
                            <div className="services-grid-texts">
                                <h3>{services.title}</h3>
                                <p>{services.desc}</p>
                                {services.title === "For Our Buyers" ? (
                                    <Link
                                        to={services.link}
                                        className="services-grid-link"
                                    >
                                        <span className="material-symbols-rounded">
                                            arrow_outward
                                        </span>
                                        <p>{services.linkTitle}</p>
                                    </Link>
                                ) : (
                                    <a
                                        href={services.link}
                                        className="services-grid-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="material-symbols-rounded">
                                            arrow_outward
                                        </span>
                                        <p>{services.linkTitle}</p>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
