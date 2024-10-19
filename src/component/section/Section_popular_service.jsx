import React from 'react';
import "./sections.css"
import {Link} from "react-router-dom";
import ps1 from "../../assets/img/popularService/Laser.png"
import ps2 from "../../assets/img/popularService/A_drop.png"
import ps3 from "../../assets/img/popularService/Press.png"
import ps4 from "../../assets/img/popularService/Roller.png"


const SectionPopularService = () => {
    return (
        <section className={"section_popular_service"}>
            <h1>Популярные услуги</h1>

            <div className="section_popular_service_box">
                <div className="section_popular_service_box_item">
                    <img src={ps1} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae consequuntur
                        dolores harum sed vitae.</p>
                    <Link to={"#"}>Prosmotr</Link>
                </div>
                <div className="section_popular_service_box_item">
                    <img src={ps2} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae consequuntur
                        dolores harum sed vitae.</p>
                    <Link to={"#"}>Prosmotr</Link>
                </div>
                <div className="section_popular_service_box_item">
                    <img src={ps3} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae consequuntur
                        dolores harum sed vitae.</p>
                    <Link to={"#"}>Prosmotr</Link>
                </div>
                <div className="section_popular_service_box_item">
                    <img src={ps4} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae consequuntur
                        dolores harum sed vitae.</p>
                    <Link to={"#"}>Prosmotr</Link>
                </div>
            </div>
        </section>
    );
};

export default SectionPopularService;