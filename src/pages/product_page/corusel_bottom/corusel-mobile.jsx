import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { coruselImg } from '../export';


function CoruselMobile() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (

        <div style={{ width: '100%' }} className='bg-success'>
            <Swiper
                style={{
                    width: "100%",
                    height: '100%',
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {
                    coruselImg.map((i) => {
                        return <SwiperSlide key={i.id} style={{ width: '100%' }}>
                            <img height={200} width={'100%'} src={i.img} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    coruselImg.map((i) => {
                        return <SwiperSlide key={i.id}>
                            <img height={100} src={i.img} />
                        </SwiperSlide>
                    })
                }
            </Swiper>

        </div>
    )
}

export default CoruselMobile