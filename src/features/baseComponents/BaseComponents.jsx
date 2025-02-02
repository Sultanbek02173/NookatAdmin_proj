import { useState } from "react";
import PropTypes from "prop-types";
// import fistImg from "./images/images.png";
import "./baseComponents.scss";
import secondImg from "./images/stash_data-date-light.png";

export const BaseComponents = ({ item }) => {
  const [click, setClick] = useState({});

  const handleDetails = (id) => {
    setClick((prevClick) => ({
      ...prevClick,
      [id]: !prevClick[id],
    }));
  };

  return (
    <div key={item?.id} className="base-components__parent-itemGrand">
      <div className="base-components__parent-item">
        <div className="base-components__parent-item-blockOne">
          <img src={item?.img} alt="" />
        </div>
        <div className="base-components__parent-item-blockTwo">
          <div className="base-components__parent-block">
            <div className="base-components__parent-item-blockTwo-data">
              <img src={secondImg} alt="icon" />
              <h4>{item?.date}</h4>
            </div>
            <div className="base-components__parent-item-blockTwo-data">
            <h1>{item?.title}</h1>
            </div>
            <p className="base-components__parent-item-blockTwo-data-default">{item?.description}</p>
          </div>
        </div>
      </div>
      <p className="base-components__parent-itemGrand-description">{item?.description}</p>
      
      {click[item?.id] && <p>{item?.descriptionDetail}</p>}
      <button
        className="base-components__parent-itemGrand-button"
        onClick={() => handleDetails(item.id)}
      >
        {click[item?.id] ? "закрыть" : "подробнее"}
      </button>
    </div>
  );
};



BaseComponents.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    calendar: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    descriptionDetail: PropTypes.string.isRequired,
  }).isRequired,
};
