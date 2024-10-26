import "./product_page.css";
import { ImageOne } from './image';
import Leftbar from './left_bar/leftbar';
import CoruselBottom from './corusel_bottom/corusel-bottom';
import ImageCarousel from './corusel_bottom/image-carousel ';

const ProductPage = () => {

    const images = [
        'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&s',
        'https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp'
        // добавьте пути к вашим изображениям
    ];

    return (
        <div className="product-container">
            <div className='d-flex flex-column justify-content-start gap-5 product-father'>
                <div className="slider-container">

                    <div className='image-first'>
                        <img className="imageSLider" src={ImageOne} alt="" />
                    </div>

                    <div className="slider">
                        <ImageCarousel images={images} />
                    </div>
                </div>
                <CoruselBottom />
            </div>
            {/* left bar  */}
            <div>
                <Leftbar />
            </div>
        </div>
    );
};

export default ProductPage;
