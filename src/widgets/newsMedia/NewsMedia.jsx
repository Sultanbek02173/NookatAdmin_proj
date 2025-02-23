import { CardComponent } from "../../features";
import './newsMedia.scss'
import { useSelector } from "react-redux";


export const NewsMedia = () => {

    const { card } = useSelector((state) => state.card);
    const { setting } = useSelector((state) => state.setting);
    
    return (
        <section className="container">
            <div className="viewingNews">
                <h1 className="viewing-text">{setting ? setting[0]?.title_cmi : ''}</h1>
                {
                    card.map((item) => (
                        <a target="_blank" key={item.id} href={`${item.link}`}>
                            <CardComponent 
                                image={item.image_media} 
                                date={item.date_media} 
                                title={item.title_media} 
                                description={item.description_media} 
                            />
                        </a> 
                    ))  
               }
            </div>
        </section>
    );
}
