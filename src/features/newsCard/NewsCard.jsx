import './newsCard.scss';
import btn3d from '../../shared/images/btn3d.svg';

export const NewsCard = ({item}) => {
    return (
        <div className='news_cont'>
            <div className="news_card">
                <img src={item.img} alt="" />
                <div className='button'>
                    <button className="threeD">
                        <img src={btn3d} alt="" />
                    </button>
                </div>
            </div>
            <div className='news_text'>
                <h3>{item.date}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    );
}

