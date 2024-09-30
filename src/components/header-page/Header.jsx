import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";

const headerContact = [
    {
        icon: "location_on",
        desc: "Floridablanca, Pampanga",
    },
    {
        icon: "call",
        desc: "+63977-434-5155",
    },
];

function Header() {
    const refreshPage = () => {
        window.location.href = "";
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navigate = useNavigate();
    const location = useLocation();

    // Event Listener
    const navTopLinks = () => {
        smoothScroll("contact");
    };

    const links = (id, event) => {
        event.preventDefault();
        setIsMenuOpen(false);

        if (location.pathname === "/") {
            smoothScroll(id);
        } else {
            navigate("/", { replace: true });
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "auto" });
                }
            }, 0);
        }
    };

    // Detect Scrolling
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsHeaderVisible(true);
            } else {
                setIsHeaderVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <div
                className={`header-contact ${
                    isHeaderVisible ? "visible" : "hidden"
                }`}
            >
                <div className="nav-top">
                    {headerContact.map((headerContact, index) => (
                        <div key={index} onClick={navTopLinks}>
                            <span className="material-symbols-rounded">
                                {headerContact.icon}
                            </span>
                            <p>{headerContact.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <nav className="nav">
                <h3 onClick={refreshPage}>GreenVista</h3>
                <ul className={isMenuOpen ? "left-0" : "-left-[200%]"}>
                    <li>
                        <a href="#home" onClick={(e) => links("home", e)}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#aboutus" onClick={(e) => links("aboutus", e)}>
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#properties"
                            onClick={(e) => links("properties", e)}
                        >
                            Properties
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://forms.gle/2qitqHSL12dKCgcBA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Seller&apos;s Guide
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => links("contact", e)}>
                            Contact
                        </a>
                    </li>
                </ul>
                <span className="material-symbols-rounded" onClick={toggleMenu}>
                    {isMenuOpen ? "close" : "segment"}
                </span>
            </nav>
        </header>
    );
}

export default Header;
