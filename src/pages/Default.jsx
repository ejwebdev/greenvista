import Hero from "../components/hero-page/Hero.jsx";
import About from "../components/about-page/About.jsx";
import Properties from "../components/properties-page/Properties.jsx";
import Services from "../components/services-page/Services.jsx";

function DefaultPage() {
    return (
        <>
            <Hero />
            <About />
            <Properties />
            <Services />
        </>
    );
}

export default DefaultPage;
