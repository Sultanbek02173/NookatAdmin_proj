import { SliderComponent } from "../../features";
import { NewsDescription } from "../../widgets";
import swiperImg from '../../shared/images/adminPage/imageSlide.png';

export const NewsDetail = () => { 
    const images = [
        {image: swiperImg},
        {image: swiperImg},
        {image: swiperImg},
        {image: swiperImg},
        {image: swiperImg},
        {image: swiperImg},
    ]
    return (
        <div className="container">
            <NewsDescription />
            <SliderComponent images={images} />
        </div>
    );
}

