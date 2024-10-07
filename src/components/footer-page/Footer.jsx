import "./footer.css";

const footerTopLinks = [
    {
        title: "Company",
        links: [
            { href: "", name: "Brand History" },
            { href: "", name: "Careers" },
            { href: "", name: "Testimonials" },
        ],
    },
    {
        title: "Explore Homes",
        links: [
            { href: "", name: "Lifescapes" },
            { href: "", name: "House and Lot" },
            { href: "", name: "Condominium" },
        ],
    },
    {
        title: "Useful Links",
        links: [
            { href: "#aboutus", name: "About Us" },
            { href: "#properties", name: "Properties" },
            {
                href: "https://forms.gle/2qitqHSL12dKCgcBA",
                target: "_blank",
                name: "Seller's Guide",
            },
        ],
    },
    {
        title: "Social Media",
        links: [
            {
                href: "https://www.facebook.com/",
                target: "_blank",
                name: "Facebook",
            },
            {
                href: "https://www.tiktok.com/",
                target: "_blank",
                name: "Tiktok",
            },
            {
                href: "https://www.instagram.com/",
                target: "_blank",
                name: "Instagram",
            },
        ],
    },
];

function Footer() {
    // Smooth scroll
    const smoothScroll = (event, href) => {
        if (href.startsWith("#")) {
            event.preventDefault();
            const targetElement = document.getElementById(href.substring(1));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <section className="footer">
            <div className="footer-cntnr">
                <div className="footer-top">
                    {footerTopLinks.map((section, index) => (
                        <div key={index}>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            target={link.target || "_self"}
                                            rel="noopener noreferrer"
                                            onClick={(e) =>
                                                smoothScroll(e, link.href)
                                            }
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="footer-bottom">
                    <p>&copy; 2024 Enrico Jay Sison</p>
                    <ul>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Terms of Service</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;