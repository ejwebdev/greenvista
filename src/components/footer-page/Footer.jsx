import { Link } from "react-router-dom";
import "./footer.css";

const footerTopLinks = [
    {
        title: "Company",
        link1: {
            page: "details",
            name: "Brand History",
        },
        link2: {
            page: "details",
            name: "Careers",
        },
        link3: {
            page: "details",
            name: "Testimonials",
        },
    },
    {
        title: "Explore Homes",
        link1: {
            page: "details",
            name: "Lifescapes",
        },
        link2: {
            page: "details",
            name: "House and Lot",
        },
        link3: {
            page: "details",
            name: "Condominium",
        },
    },
    {
        title: "Useful Links",
        link1: {
            href: "#aboutus",
            name: "About Us",
        },
        link2: {
            href: "#properties",
            name: "Properties",
        },
        link3: {
            href: "https://forms.gle/2qitqHSL12dKCgcBA",
            target: "_blank",
            name: "Seller's Guide",
        },
    },
    {
        title: "Social Media",
        link1: {
            href: "https://www.facebook.com/",
            target: "_blank",
            name: "Facebook",
        },
        link2: {
            href: "https://www.tiktok.com/",
            target: "_blank",
            name: "Tiktok",
        },
        link3: {
            href: "https://www.instagram.com/",
            target: "_blank",
            name: "Instagram",
        },
    },
];

function Footer() {
    return (
        <section className="footer">
            <div className="footer-cntnr">
                <div className="footer-top">
                    {footerTopLinks.map((footerTopLinks, index) => (
                        <div key={index}>
                            <h3>{footerTopLinks.title}</h3>
                            <ul>
                                {footerTopLinks.link1.href && (
                                    <li>
                                        <a
                                            href={footerTopLinks.link1.href}
                                            target={footerTopLinks.link1.target}
                                            rel="noopener noreferrer"
                                        >
                                            {footerTopLinks.link1.name}
                                        </a>
                                    </li>
                                )}
                                {footerTopLinks.link2.href && (
                                    <li>
                                        <a
                                            href={footerTopLinks.link2.href}
                                            target={footerTopLinks.link2.target}
                                            rel="noopener noreferrer"
                                        >
                                            {footerTopLinks.link2.name}
                                        </a>
                                    </li>
                                )}
                                {footerTopLinks.link3.href && (
                                    <li>
                                        <a
                                            href={footerTopLinks.link3.href}
                                            target={footerTopLinks.link3.target}
                                            rel="noopener noreferrer"
                                        >
                                            {footerTopLinks.link3.name}
                                        </a>
                                    </li>
                                )}
                                {footerTopLinks.link1.page && (
                                    <li>
                                        <Link to={footerTopLinks.link1.page}>
                                            {footerTopLinks.link1.name}
                                        </Link>
                                    </li>
                                )}
                                {footerTopLinks.link2.page && (
                                    <li>
                                        <Link to={footerTopLinks.link2.page}>
                                            {footerTopLinks.link2.name}
                                        </Link>
                                    </li>
                                )}
                                {footerTopLinks.link3.page && (
                                    <li>
                                        <Link to={footerTopLinks.link3.page}>
                                            {footerTopLinks.link3.name}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="footer-bottom">
                    <p>&copy; 2024 Enrico Jay Sison</p>
                    <ul>
                        <li>
                            <Link to="details">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="details">Terms of Service</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;
