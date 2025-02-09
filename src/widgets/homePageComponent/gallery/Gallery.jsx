import React from 'react';
import './gallery.scss'
import imgCol1 from '../../../shared/images/homePageImg/image (6).png'
import imgCol2 from '../../../shared/images/homePageImg/image (7).png'
import imgCol3 from '../../../shared/images/homePageImg/image (8).png'
import { Link } from 'react-router-dom';
export const Gallery = () => {
    return (
        <div className='container'>
            <div className="gallery">
                <h1 className="gallery-text">галерея</h1>
                <div className="row">
                    <div className="col-4">
                        <img src={imgCol1} alt="" className='gallery-img'/>
                        <img src={imgCol1} alt="" className='gallery-img'/>
                        <Link to={`/gallery/новые-фотографии`}>
                            <button className="gallery-button">
                                <h2 className="gallery-button-text">новые фотографии</h2>
                            </button>
                        </Link>
                    </div>
                    <div className="col-4">
                        <img src={imgCol2} alt="" className='gallery-img'/>
                        <Link to={`/gallery/3D-тур`}>
                            <button  className="gallery-button center-btn">
                                <h2 className="gallery-button-text">3D тур</h2>
                            </button>
                        </Link>
                    </div>
                    <div className="col-4">
                        <img src={imgCol3} alt="" className='gallery-img'/>
                        <img src={imgCol3} alt="" className='gallery-img'/>
                        <Link to={`/gallery/архивные-фотографии`}>
                            <button  className="gallery-button">
                                <h2 className="gallery-button-text">архивные фотографии</h2>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}