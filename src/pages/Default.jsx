import Header from "../components/header-page/Header.jsx";
import Hero from "../components/hero-page/Hero.jsx";
import About from "../components/about-page/About.jsx";
import Properties from "../components/properties-page/Properties.jsx";
import Contact from "../components/contact-page/Contact.jsx";
import Footer from "../components/footer-page/Footer.jsx";

function Default() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Properties />
            <Contact />
            <Footer />
        </>
    );
}

export default Default;
