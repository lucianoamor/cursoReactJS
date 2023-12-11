// router
import {Outlet} from "react-router-dom";

// assets
import Logo from "../img/logo.png";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// components
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

// config
const title      = "World Market";
const categories = [
    {id: 1, name: "Atlántico", urlName: "atlantico"},
    {id: 2, name: "Pacífico", urlName: "pacifico"}
];

function Layout() {
    return (
        <div>
            <NavBar logo={Logo} title={title} categories={categories} />
            <Outlet />
            <Footer logo={Logo} title={title} />
        </div>
    );
}

export default Layout;
