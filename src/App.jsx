import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/header-section/Header.jsx";
import Main from "./pages/Main.jsx";
import About from "./pages/About.jsx";
import Properties from "./pages/Properties.jsx";
import HouseAndLot from "./components/houseandlot-section/Houseandlot.jsx";
import Contact from "./components/contact-section/Contact.jsx";
import Banner from "./components/banner-section/Banner.jsx";
import Footer from "./components/footer-section/Footer.jsx";

function App() {
    // Scroll to Top when route change
    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    return (
        <>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/aboutus" element={<About />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/house-and-lot" element={<HouseAndLot />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Banner />
            <Footer />
        </>
    );
}

export default App;
