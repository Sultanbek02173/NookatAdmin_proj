import './newsDetailSections.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailNews } from '../../app/store/reducers/newsSlice';

export const NewsDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { newsDeatil } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchDetailNews(id))
  }, [id]);  

  return (
    <div className="container detail_container">
      <div key={newsDeatil.id} className='contents'>
        <div className="title_text">
          {newsDeatil.image && <img src={newsDeatil?.image_media} alt={newsDeatil.title} />}
          <h1 className='title-h1'>{newsDeatil.title}</h1>
        </div>
        <div className="row">
          <p dangerouslySetInnerHTML={{ __html: newsDeatil.description }} className='news-text col-6'></p>
          <p dangerouslySetInnerHTML={{ __html: newsDeatil.description }} className='news-text col-6'></p>
        </div>
        <p className="news-text" dangerouslySetInnerHTML={{ __html: newsDeatil.first_paragraph }}></p>
        <p className="news-text" dangerouslySetInnerHTML={{ __html: newsDeatil.second_paragraph }}></p>
        <p className="news-text" dangerouslySetInnerHTML={{ __html: newsDeatil.general_paragraph }}></p>
      </div>
    </div>
  );
}