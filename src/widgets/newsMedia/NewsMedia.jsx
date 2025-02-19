import { CardComponent } from "../../features";
import './newsMedia.scss'
import { useSelector } from "react-redux";


export const NewsMedia = () => {

    const { card } = useSelector((state) => state.card)

    
    return (
        <section className="container">
            <div className="viewingNews">
                <h1 className="viewing-text">СМИ О НАС</h1>
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
