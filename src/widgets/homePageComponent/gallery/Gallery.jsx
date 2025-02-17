import './gallery.scss'
import imgCol1 from '../../../shared/images/homePageImg/image (6).png'
import imgCol2 from '../../../shared/images/homePageImg/image (7).png'
import imgCol3 from '../../../shared/images/homePageImg/image (8).png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollToTop } from '../../../shared/hooks/scrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArchivalPhotos, fetchNewShapes, fetchOshTour } from '../../../app/store/reducers/gallerySlice';

export const Gallery = () => {
    const dispatch = useDispatch();
    const { newShapes, archivalPhotos, oshTour,  } = useSelector((state) => state.gallery);
    
    useEffect(() => {
        dispatch(fetchNewShapes());
        dispatch(fetchArchivalPhotos());
        dispatch(fetchOshTour());
      }, [dispatch]);
    return (
        <div className='container'>
            <div className="gallery">
                <h1 className="gallery-text">галерея</h1>
                <div className="row">
                    <div className="col-4">
                        {
                            newShapes.filter((item) => item.id < 3).map((item) => (
                                <img key={item.id} src={item.image} alt="" className='gallery-img'/>
                            ))
                        }
                        <Link to={`/gallery/new-photo`}>
                            <button onClick={scrollToTop} className="gallery-button gallery-button-start">
                                <h2 className="gallery-button-text ">новые фотографии</h2>
                            </button>
                        </Link>
                    </div>
                    <div className="col-4">
                        {
                            oshTour.filter((item) => item.id < 2).map((item) => (
                                    <img key={item.id} src={item.image} alt="" className='gallery-img gallery-img-center'/>
                            ))
                        }
                        <Link to={`/gallery/3D-tour`}>
                            <button  onClick={scrollToTop} className="gallery-button center-btn">
                                <h2 className="gallery-button-text">3D тур</h2>
                            </button>
                        </Link>
                    </div>
                    <div className="col-4">
                        {
                            archivalPhotos.filter((item) => item.id < 3).map((item) => (
                                    <img key={item.id} src={item.image} alt="" className='gallery-img gallery-img-end'/>
                            ))
                        }
                        <Link to={`/gallery/archive-photos`}>
                            <button  onClick={scrollToTop} className="gallery-button end-btn">
                                <h2 className="gallery-button-text">архивные фотографии</h2>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}