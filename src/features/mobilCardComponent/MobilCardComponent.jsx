import React from 'react';

export const MobilCardComponent = ({ block }) => {
    return (
        <div className="viewing-card">
            <div className="row">
            <div className="col-6"> 
                <img src={block.img} alt="" className='viewing-img'/>
            </div>
            <div className="col-6">
                <div className="row">
                    <img src={block.calendar} alt="" className='viewing-calendar-img'/>
                    <p className='viewing-date'>{block.date}</p>
                </div>
                <h1 className='viewing-title'>{block.title}</h1>
            </div>
            <p className="viewing-description">{block.description}</p>
            </div>
        </div>

    );
}

