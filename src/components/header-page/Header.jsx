import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import "./header.css";

const headerContact = [
    {
        icon: "location_on",
        desc: "Floridablanca, Pampanga",
        link: "",
    },
    {
        icon: "call",
        desc: "+63977-434-5155",
        link: "tel:09774345155",
    },
];

function Header() {
    // Scroll-based Header Position
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHeaderTop, setIsHeaderTop] = useState(true);

    useEffect(() => {
        const handleScroll = debounce(() => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (window.scrollY === 0) {
                setIsHeaderTop(true);
            } else {
                setIsHeaderTop(false);
            }
        }, 50);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const refreshPage = () => {
        window.location.href = "";
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const location = useLocation();
    const header =
        location.pathname === "/" ? (isScrolled ? "fixed" : "fixed") : "sticky";

    // Event Listener
    const pageLinks = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <header className={`header ${header}`}>
            <div
                className={`header-contact ${
                    isHeaderTop ? "visible" : "hidden"
                }`}
            >
                <div className="nav-top">
                    {headerContact.map((headerContact, index) => (
                        <a key={index} href={headerContact.link}>
                            <span className="material-symbols-rounded">
                                {headerContact.icon}
                            </span>
                            <p>{headerContact.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
            <nav className="nav">
                <h3 onClick={refreshPage}>GreenVista</h3>
                <ul className={isMenuOpen ? "left-0" : "-left-[200%]"}>
                    <li>
                        <Link to="/" onClick={pageLinks}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutus" onClick={pageLinks}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown();
                            }}
                        >
                            Explore Homes
                            <span className="material-symbols-rounded">
                                keyboard_arrow_down
                            </span>
                        </a>
                        <ul
                            className={`dropdown ${
                                isDropdownOpen ? "open" : "hidden"
                            }`}
                        >
                            <li>
                                <Link to="/properties" onClick={pageLinks}>
                                    Properties
                                </Link>
                            </li>
                            <li>
                                <Link to="/house-and-lot" onClick={pageLinks}>
                                    House and Lot
                                </Link>
                            </li>
                        </ul>
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
                        <Link to="/contact" onClick={pageLinks}>
                            Contact
                        </Link>
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
