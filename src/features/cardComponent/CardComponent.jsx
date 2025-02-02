import './cardComponent.scss'

export const CardComponent = ({ block }) => {
    
    return (
        <div className="viewing-card">
            <div className="row">
            <div className="col-3"> 
                <img src={block.img} alt="" className='viewing-img'/>
            </div>
            <div className="col-9">
                <div className="row">
                    <img src={block.calendar} alt="" className='viewing-calendar-img'/>
                    <p className='viewing-date'>{block.date}</p>
                </div>
                <h1 className='viewing-title'>{block.title}</h1>
                <p className="viewing-description">{block.description}</p>
            </div>
            </div>
        </div>
    );
}

