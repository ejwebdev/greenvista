import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header.jsx";
import Default from "./pages/Default.jsx";
import Pricing from "./pages/Pricing.jsx";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Default />} />
                    <Route path="price-lists" element={<Pricing />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
