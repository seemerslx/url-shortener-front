import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return <>
        <nav className="header-nav">
            <ul style={{ margin: "0px" }} className="header-nav-list">
                <li className="header-nav-list-item">
                    <NavLink to={"/"} className="logo">Shortener</NavLink>
                </li>
                <li className="header-nav-list-item"><NavLink className="nav-link" to={"/"}>Home</NavLink></li>
                <li className="header-nav-list-item"><NavLink className="nav-link" to={"/urls"}>Urls</NavLink></li>
            </ul>
            <ul style={{ margin: "0px" }} className="header-nav-account">
                <li className="header-nav-list-item"><NavLink className="nav-link" to={"/login"}>Login</NavLink></li>
            </ul>
        </nav>
    </>
};

export default Navigation;