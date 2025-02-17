import calendar from '../../shared/images/homePageImg/calendar.png'

export const MobilCardComponent = ({ image, date, title, description }) => {
    return (
            <div className="viewing-card">
                <div className="row">
                    <div className="col-6"> 
                        <img src={image} alt="" className='viewing-img'/>
                    </div>
                    <div className="col-6">
                        <div className="row">
                        <img src={calendar} alt="" className='viewing-calendar-img'/>
                            <p className='viewing-date'>{date}</p>
                        </div>
                        <h1 className='viewing-title'>{title}</h1>
                    </div>                
                    <p dangerouslySetInnerHTML={{__html: description}}className="viewing-description"></p>
                </div>
            </div>
    );
}

