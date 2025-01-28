import './tourCard.scss';
import btn3d from '../../shared/images/btn3d.svg';

export const TourCard = ({ el, openModalWithMap }) => {
    return (
        <div className="photo3_card">
            <img src={el.img} alt="" />
            <div>
                <h4>{el.name}</h4>
                <button className="threeD" onClick={() => openModalWithMap(el.mapUrl)}>
                    <img src={btn3d} alt="" />
                </button>
            </div>

        </div>
    );
}

