import React from 'react';
import "./home.css"
import Navbar from "../../component/navbar/navbar.jsx";
import mas from "../../assets/img/mas.png"
import SectionPopularProduct from "../../component/section/Section_popular_product.jsx";
import SectionPopularService from "../../component/section/Section_popular_service.jsx";
import SectionHeroCategory from "../../component/section/Section_hero_category.jsx";
import cloud from "../../assets/icons/cloud.svg";
import energy from "../../assets/icons/energy.svg";
import OPT from "../../assets/icons/OPT.svg";
import time from "../../assets/icons/time.svg";
import Ostavaytes from "../../component/section/ostavaytes.jsx";
import Question from "../../component/section/question.jsx";
import HelpSection from "../../component/section/helpSection.jsx";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <header>
                <h1>
                    РЕКЛАМА НОВОГО <br/> ПОКОЛЕНИЯ
                </h1>
            </header>

            <div className="container">
                <section className={"about"}>
                    <div className="about_box">
                        <div className="about_box-left">
                            <h1><span className={'under_line'}>Пара слов</span> о нас, производстве и брендинге</h1>
                            <p>
                                В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности
                                структуры проекта.
                            </p>
                            <p>

                                В своём стремлении улучшить пользовательский опыт мы упускаем, что клечевые особенности
                                структуры проекта опыт мы упускаем, что ключевые особенности структуры проекта.
                            </p>
                        </div>
                        <div className="about_box-right">
                            <img src={mas} alt="MASS Marketing"/>
                        </div>
                    </div>
                    <div className="about_box-bottom">
                        <div className="about_box-bottom_item">
                            <img src={cloud} alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae consequuntur
                                dolores harum sed vitae.</p>
                        </div>
                        <div className="about_box-bottom_item">
                            <img src={time} alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae consequuntur
                                dolores harum sed vitae.</p>
                        </div>
                        <div className="about_box-bottom_item">
                            <img src={energy} alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae consequuntur
                                dolores harum sed vitae.</p>
                        </div>
                        <div className="about_box-bottom_item">
                            <img src={OPT} alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae consequuntur
                                dolores harum sed vitae.</p>
                        </div>
                    </div>
                </section>

                <SectionPopularProduct/>
                <SectionPopularService/>
                <SectionHeroCategory/>
                <Ostavaytes/>
                <Question/>
                <HelpSection/>
            </div>
        </div>
    );
};

export default Home;