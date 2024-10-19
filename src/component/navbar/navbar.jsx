import React, { useState } from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/mas.png";
import { UserOutlined } from "@ant-design/icons";
import { LOGIN } from "../../utils/const/consts.jsx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="nav_container">
                <div className="nav-logo">
                    <img src={logo} alt="Mas Marketing" />
                </div>

                {/* Mobile button */}
                <div className="mobail_nav_button" onClick={toggleMenu}>
                    ☰ {/* Hamburger Icon */}
                </div>

                <div className={`nav_links ${isMenuOpen ? 'active' : ''}`}>
                    <div className="nav_item">
                        <Link to="/">о компании</Link>
                    </div>
                    <div className="nav_item">
                        <Link to="/">услуги</Link>
                    </div>
                    <div className="nav_item">
                        <Link to="/">контакты</Link>
                    </div>
                </div>

                <div className="nav_end">
                    <Link className="login_link" to={LOGIN}>
                        <UserOutlined />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
