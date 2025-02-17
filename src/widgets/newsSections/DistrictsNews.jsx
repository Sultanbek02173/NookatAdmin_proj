import { CardComponent, MobilCardComponent } from "../../features";
import './districtsNews.scss'
import { useMediaQuery } from "usehooks-ts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const DistrictsNews = () => {
    
    const { news } = useSelector((state) => state.news);

    const matches = useMediaQuery('(max-width: 576px)')
    return (
        <section className="container">
            <div className="viewingNews">
                <h1 className="viewing-text">новости ноокатского района</h1>
                {
                    news.map((item) => (
                        matches ? <Link key={item.id} to={`/news-detail/${item.id}`}><MobilCardComponent image={item.image} date={item.date} title={item.title} description={item.description}/></Link>  
                            : <Link key={item.id} to={`/news-detail/${item.id}`}><CardComponent image={item.image} date={item.date} title={item.title} description={item.description}/></Link>
                    ))  
               }
            </div>
        </section>
    );
}
