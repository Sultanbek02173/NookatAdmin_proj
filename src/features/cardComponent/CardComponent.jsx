import calendar from '../../shared/images/homePageImg/calendar.png'
import './cardComponent.scss'

export const CardComponent = ({ image, date, title, description }) => {

    return (
        <div className="base-components">
            <div className="base-components__parent-itemGrand">
                <div className="base-components__parent-item">
                    <div className="base-components__parent-item-blockOne">
                        <img src={image} alt='' />
                    </div>
                    <div className="base-components__parent-item-blockTwo">
                        <div className="base-components__parent-block">
                            {date && (
                                <div className="base-components__parent-item-blockTwo-data">
                                    <img src={calendar} alt="icon" />
                                    <h4>{date}</h4>
                                </div>
                            )}
                            <div className="base-components__parent-item-blockTwo-data">
                                <h1>{title}</h1>
                            </div>
                            <p
                                className="base-components__parent-item-blockTwo-data-default"
                                dangerouslySetInnerHTML={{ __html: description }}>

                            </p>
                        </div>
                    </div>

                </div>

                <p className="base-components__parent-itemGrand-description" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </div>
    );
}

