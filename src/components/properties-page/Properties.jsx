import { Link } from "react-router-dom";
import properties1 from "../../assets/properties1.webp";
import properties2 from "../../assets/properties2.webp";
import properties3 from "../../assets/properties3.webp";
import "./properties.css";

const properties = [
    {
        img: properties1,
        title: "GreenVista Porac",
        loc: "Porac, Pampanga",
        desc: "Experience modern living in Porac, Pampanga with spacious and durable homes.",
        link: "price-lists",
    },
    {
        img: properties2,
        title: "GreenVista Balanga",
        loc: "Balanga, Bataan",
        desc: "Modern homes in Balanga, Bataan with comfort and convenience.",
        link: "price-lists",
    },
    {
        img: properties3,
        title: "GreenVista Bamban",
        loc: "Bamban, Tarlac",
        desc: "Modern homes in Bamban, Tarlac offering comfort, convenience, and tranquility.",
        link: "price-lists",
    },
];

function Properties() {
    return (
        <section className="properties" id="properties">
            <div className="properties-cntnr">
                <h3>Properties</h3>
                <h2>House and Lot</h2>
                <p>
                    Explore our exclusive collection of thoughtfully designed
                    house and lot options at GreenVista Homes, offering the
                    perfect blend of comfort, quality, and value for Filipino
                    families.
                </p>
                <div className="properties-grid">
                    {properties.map((properties, index) => (
                        <div key={index}>
                            <img
                                src={properties.img}
                                alt="GreenVista Properties"
                                draggable="false"
                            />
                            <div className="properties-grid-texts">
                                <h3>{properties.title}</h3>
                                <div>
                                    <span className="material-symbols-rounded">
                                        location_on
                                    </span>
                                    <p>{properties.loc}</p>
                                </div>
                                <p>{properties.desc}</p>
                                <Link
                                    to={properties.link}
                                    className="properties-grid-link"
                                >
                                    <span className="material-symbols-rounded">
                                        arrow_outward
                                    </span>
                                    <p>View More</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Properties;
