import { Outlet } from "react-router-dom";
import HeaderNav from "../components/header-page/Header.jsx";

function Layout() {
    return (
        <div>
            <HeaderNav />
            <Outlet />
        </div>
    );
}

export default Layout;
