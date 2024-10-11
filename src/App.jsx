import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header-page/Header.jsx";
import Default from "./pages/Default.jsx";
import About from "./pages/About.jsx";
import Properties from "./pages/Properties.jsx";
import HouseAndLot from "./components/houseandlot-page/Houseandlot.jsx";
import Contact from "./components/contact-page/Contact.jsx";
import Banner from "./components/banner-page/Banner.jsx";
import Footer from "./components/footer-page/Footer.jsx";

function App() {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Default />} />
                <Route path="/aboutus" element={<About />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/house-and-lot" element={<HouseAndLot />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Banner />
            <Footer />
        </HashRouter>
    );
}

export default App;
