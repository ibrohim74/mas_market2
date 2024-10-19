import React from 'react';
import hc1 from "../../assets/img/hero_category/HDD.png"
import hc2 from "../../assets/img/hero_category/Cut.png"
import hc3 from "../../assets/img/hero_category/Flash_card.png"
import hc4 from "../../assets/img/hero_category/HDD-1.png"
import hc5 from "../../assets/img/hero_category/logo_xiaomi.png"
import hc6 from "../../assets/img/hero_category/Mobile.png"
import hc7 from "../../assets/img/hero_category/Present.png"
import hc8 from "../../assets/img/hero_category/Shopping-bag.png"
import hc9 from "../../assets/img/hero_category/Termo_cut.png"
import hc10 from "../../assets/img/hero_category/Termo_cut-1.png"


const SectionHeroCategory = () => {
    return (
        <section className="section_hero_category">
            <h1>Основные категории</h1>
            <div className="section_hero_category_box">

                <div className="section_hero_category_heading">
                    <div className="section_hero_category_item">
                        <div className="section_hero_category_item_img">
                            <img src={hc1} alt=""/>
                        </div>
                        <div className="section_hero_category_item_text">
                            <p>Объелание буквы</p>
                        </div>
                    </div>
                    <div className="section_hero_category_item">
                        <div className="section_hero_category_item_img">
                            <img src={hc2} alt=""/>
                        </div>
                        <div className="section_hero_category_item_text">
                            <p>Объелание буквы</p>
                        </div>
                    </div>
                    <div className="section_hero_category_item">
                        <div className="section_hero_category_item_img">
                            <img src={hc3} alt=""/>
                        </div>
                        <div className="section_hero_category_item_text">
                            <p>Объелание буквы</p>
                        </div>
                    </div>
                    <div className="section_hero_category_item">
                        <div className="section_hero_category_item_img">
                            <img src={hc4} alt=""/>
                        </div>
                        <div className="section_hero_category_item_text">
                            <p>Объелание буквы</p>
                        </div>
                    </div>
                </div>


                <div className="section_hero_category_footer">
                    <div className="section_hero_category_item">
                        <div className="section_hero_category_item_img">
                            <img src={hc5} alt=""/>
                        </div>
                        <div className="section_hero_category_item_text">
                            <p>Объелание буквы</p>
                        </div>
                    </div>
                    <div className="section_hero_category_item">
                        <div className="section_hero_category_item_img">
                            <img src={hc6} alt=""/>
                        </div>
                        <div className="section_hero_category_item_text">
                            <p>Объелание буквы</p>
                        </div>
                    </div>
                    <div className="section_hero_category_item">
                        <div className="section_hero_category_item_img">
                            <img src={hc7} alt=""/>
                        </div>
                        <div className="section_hero_category_item_text">
                            <p>Объелание буквы</p>
                        </div>
                    </div>
                    <div className="section_hero_category_item">
                        <div className="section_hero_category_item_img">
                            <img src={hc8} alt=""/>
                        </div>
                        <div className="section_hero_category_item_text">
                            <p>Объелание буквы</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionHeroCategory;