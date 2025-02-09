import { CardComponent, MobilCardComponent } from "../../features";
import viewingImg from '../../shared/images/homePageImg/image (5).png';
import calendar from '../../shared/images/homePageImg/calendar.png';
import './newsMedia.scss'
import { useMediaQuery } from "usehooks-ts";
import { Link } from "react-router-dom";

export const NewsMedia = () => {
    const block = [
        {
            id: 0,
            img: viewingImg,
            calendar: calendar,
            date: '16 января 2025 г.',
            title: '"10 лучших туристических мест Ноокатского района"',
            description: 'Ноокатская районная государственная администрация продолжает работать над улучшением жизненных условий для жителей района. В рамках текущих инициатив активно ведутся работы по улучшению инфраструктуры, а также обеспечению социальной поддержки для населения. Мы нацелены на повышение качества жизни каждого жителя и открытость в вопросах управления.В ближайшее время ожидаются новые проекты, которые затронут важные аспекты развития региона, включая улучшение здравоохранения, образования и транспортной инфраструктуры. '
        },
        {
            id: 1,
            img: viewingImg,
            calendar: calendar,
            date: '16 января 2025 г.',
            title: '"10 лучших туристических мест Ноокатского района"',
            description: 'Ноокатская районная государственная администрация продолжает работать над улучшением жизненных условий для жителей района. В рамках текущих инициатив активно ведутся работы по улучшению инфраструктуры, а также обеспечению социальной поддержки для населения. Мы нацелены на повышение качества жизни каждого жителя и открытость в вопросах управления.В ближайшее время ожидаются новые проекты, которые затронут важные аспекты развития региона, включая улучшение здравоохранения, образования и транспортной инфраструктуры. '
        },
        
    ]
    const matches = useMediaQuery('(max-width: 576px)')

    return (
        <section className="container">
            <div className="viewingNews">
                <h1 className="viewing-text">СМИ О НАС</h1>
                {
                    block.map((item) => (
                        matches ? <Link key={item.id} to={`/newsDetail/${item.id}`}><MobilCardComponent block={item}/></Link>  
                            : <Link key={item.id} to={`/newsDetail/${item.id}`}><CardComponent block={item}/></Link>
                    ))  
               }
            </div>
        </section>
    );
}
