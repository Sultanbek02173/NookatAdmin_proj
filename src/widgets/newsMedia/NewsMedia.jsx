import { CardComponent, MobilCardComponent } from "../../features";
import './newsMedia.scss'
import { useMediaQuery } from "usehooks-ts";
import { useSelector } from "react-redux";


export const NewsMedia = () => {

    const { card } = useSelector((state) => state.card)

    const matches = useMediaQuery('(max-width: 576px)')
    
    return (
        <section className="container">
            <div className="viewingNews">
                <h1 className="viewing-text">СМИ О НАС</h1>
                {
                    card.map((item) => (
                        matches ? <a target="_blank" key={item.id} href={`${item.link}`}><MobilCardComponent image={item.image_media} date={item.date_media} title={item.title_media} description={item.description_media} /></a>  
                            : <a target="_blank" key={item.id} href={`${item.link}`}><CardComponent image={item.image_media} date={item.date_media} title={item.title_media} description={item.description_media} /></a> 
                    ))  
               }
            </div>
        </section>
    );
}
