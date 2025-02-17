import calendar from '../../shared/images/homePageImg/calendar.png'
import './cardComponent.scss'

export const CardComponent = ({ image, date, title, description }) => {
    
    return (
        <div className="viewing-card">
            <div className="row">
            <div className="col-3"> 
                <img src={image} alt="" className='viewing-img'/>
            </div>
            <div className="col-9">
                <div className="row">
                    <img src={calendar} alt="" className='viewing-calendar-img'/>
                    <p className='viewing-date'>{date}</p>
                </div>
                <h1 className='viewing-title'>{title}</h1>
                <p dangerouslySetInnerHTML={{__html: description }}className="viewing-description"></p>
            </div>
            </div>
        </div>
    );
}

