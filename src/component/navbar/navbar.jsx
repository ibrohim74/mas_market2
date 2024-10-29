import React, { useState } from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/mas.png";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import { LOGIN } from "../../utils/const/consts.jsx";
import {Dropdown, Space} from "antd";
import {useTranslation} from "react-i18next";
import {languages} from "../../utils/lang/langs.jsx";
import {useLanguage} from "../../utils/lang/LangContext.jsx";
import karzinka from "../../assets/icons/karzinka.svg"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const { t } = useTranslation();
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

                    <div className="nav_item">
                        <Dropdown
                            menu={{
                                items: languages,
                                onClick: handleLanguageChange,
                            }}
                            trigger={["click"]}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {selectedLanguage.icon} {selectedLanguage.label} <DownOutlined/>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div className="nav_end">
                        <Link className="login_link" to={LOGIN}>
                            <img src={karzinka}/>
                        </Link>
                    </div>
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
