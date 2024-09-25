import { Link, Outlet } from "react-router-dom";

import './Layout.css';

export default function Layout() {
    return (
        <div className="Layout">
            <nav>
                <div className="main-page">
                    <Link to="/" >Főoldal</Link>
                </div>
                <div className="menu">
                    <Link to="/contact" >Kapcsolat</Link>
                    <Link to="/about-us" >Rólunk</Link>
                    <Link to="/products" >Termékek</Link>
                    <a href="https://codecool.com">Codecool</a>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}