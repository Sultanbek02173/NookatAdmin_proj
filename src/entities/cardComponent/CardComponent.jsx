import PropTypes from 'prop-types';

export const CardComponent = ({ item }) => {
    return (
        <div className="viewing-card">
            <div className="row">
                <div className="col-3"> 
                    <img src={item.img} alt="" className='viewing-img'/>
                </div>
                <div className="col-9">
                    <div className="row">
                        <img src={item.calendar} alt="" className='viewing-calendar-img'/>
                        <p className='viewing-date'>{item.date}</p>
                    </div>
                    <h1 className='viewing-title'>{item.title}</h1>
                    <p className="viewing-description">{item.description}</p>
                </div>
            </div>
        </div>
    );
}

CardComponent.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        calendar: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};