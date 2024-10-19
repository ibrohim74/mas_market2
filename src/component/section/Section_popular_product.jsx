import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Pagination} from "swiper/modules";
import {Link} from "react-router-dom";
import {ADMIN_PRODUCTS} from "../../utils/const/consts.jsx";
import useMediaQuery from '@mui/material/useMediaQuery';
import krujka from "../../assets/img/s2_krujka.png"
import chexol from "../../assets/img/s2_chexol.png"
import fleshka from "../../assets/img/s2_fleshka.png"
import ruchka from "../../assets/img/s2_ruchka.png"

const SectionPopularProduct = () => {
    const matches = useMediaQuery('(min-width:800px)');
    console.log(matches)
    return (
        <section className={"popular_product"}>
            <h1><span className={"under_line"}>Популярные</span> и новые <br/> товары</h1>

            <div className="popular_swiper_box">
                <Swiper
                    slidesPerView={matches ? 4.5 :  1.7}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                        type: "progressbar"
                    }}
                    modules={[FreeMode, Pagination]}
                    className="popular_swiper"
                >
                    <SwiperSlide>
                        <div className="popular_swiper_top">
                            <img
                                src={krujka}
                                alt=""/>
                        </div>
                        <div className="popular_swiper_bottom">
                            <h2>Объемные буквы</h2>
                            <Link to={"#"}>Posmotret</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="popular_swiper_top">
                            <img
                                src={krujka}
                                alt=""/>
                        </div>
                        <div className="popular_swiper_bottom">
                            <h2>Объемные буквы</h2>
                            <Link to={"#"}>Posmotret</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="popular_swiper_top">
                            <img
                                src={chexol}
                                alt=""/>
                        </div>
                        <div className="popular_swiper_bottom">
                            <h2>Объемные буквы</h2>
                            <Link to={"#"}>Posmotret</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="popular_swiper_top">
                            <img
                                src={fleshka}
                                alt=""/>
                        </div>
                        <div className="popular_swiper_bottom">
                            <h2>Объемные буквы</h2>
                            <Link to={"#"}>Posmotret</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="popular_swiper_top">
                            <img
                                src={ruchka}
                                alt=""/>
                        </div>
                        <div className="popular_swiper_bottom">
                            <h2>Объемные буквы</h2>
                            <Link to={"#"}>Posmotret</Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default SectionPopularProduct;