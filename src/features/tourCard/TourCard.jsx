import './tourCard.scss';
import btn3d from '../../shared/images/btn3d.svg';

export const TourCard = ({ el, openModalWithMap }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${el.img})`,
            }}
            className="photo_card3">
            <div>
                <h4>{el.name}</h4>

                <div className="btn_3d">
                    <button
                        className="threeD"
                        onClick={() => openModalWithMap(el.mapUrl)}>
                        <img src={btn3d} alt="" />
                    </button></div>
            </div>

        </div>
    );
}

