import React from 'react';
import './gallery.scss'
import imgCol1 from '../../../shared/images/homePageImg/image (6).png'
import imgCol2 from '../../../shared/images/homePageImg/image (7).png'
import imgCol3 from '../../../shared/images/homePageImg/image (8).png'
export const Gallery = () => {
    return (
        <div className='container'>
            <div className="gallery">
                <h1 className="gallery-text">галерея</h1>
                <div className="row">
                    <div className="col-4">
                        <img src={imgCol1} alt="" className='gallery-img'/>
                        <img src={imgCol1} alt="" className='gallery-img'/>
                        <div className="gallery-button">
                            <h2 className="gallery-button-text">новые фотографии</h2>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src={imgCol2} alt="" className='gallery-img'/>
                        <div className="gallery-button">
                            <h2 className="gallery-button-text">3D тур</h2>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src={imgCol3} alt="" className='gallery-img'/>
                        <img src={imgCol3} alt="" className='gallery-img'/>
                        <div className="gallery-button">
                            <h2 className="gallery-button-text">архивные фотографии</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}