import { NewsCard, TourCard } from '../../../features';
import './lastNews.scss';
import threeD from '../../../shared/images/threeD.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const LastNews = () => {

    const threeDd = [
        {
            id: 0,
            img: threeD,
            description: "Ноокатская районная государственная администрация продолжает работать над улучшением жизненных условий для жителей...",
            date: '16 января 2025 года',
        },
        {
            id: 1,
            img: threeD,
            description: "Ноокатская районная государственная администрация продолжает работать над улучшением жизненных условий для жителей...",
            date: '16 января 2025 года',
        },
        {
            id: 2,
            img: threeD,
            description: "Ноокатская районная государственная администрация продолжает работать над улучшением жизненных условий для жителей...",
            date: '16 января 2025 года',
        },
        {
            id: 3,
            img: threeD,
            description: "Ноокатская районная государственная администрация продолжает работать над улучшением жизненных условий для жителей...",
            date: '16 января 2025 года',
        },
    ]
    return (
        <section className='container lastNews_section'>
            <h2 className='cont_title'>Последние новости</h2>
            <Swiper 
                className="mySwiper"
                slidesPerView={2.5}
                spaceBetween={20}
                >
                {
                    threeDd &&
                    threeDd.map(item => (
                        <SwiperSlide className='sliderItem' key={item.id}>
                            <NewsCard item={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <button className='newsLink'>смотреть все новости</button>
        </section>
    );
}

