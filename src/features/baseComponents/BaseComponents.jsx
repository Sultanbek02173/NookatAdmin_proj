import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion"; 
import "./baseComponents.scss";
import secondImg from "./images/stash_data-date-light.png";

export const BaseComponents = ({ item, index, changeIndex }) => {  

  return (
    <div onClick={(e) => {e.stopPropagation()}} className="base-components">
      <div key={item.id} className="base-components__parent-itemGrand">
        <div className="base-components__parent-item">
          <div className="base-components__parent-item-blockOne">
            <img src={item.image} alt="" />
          </div>
          <div className="base-components__parent-item-blockTwo">
            <div className="base-components__parent-block">
                {item.date && (
                  <div className="base-components__parent-item-blockTwo-data">
                      <img src={secondImg} alt="icon" /> 
                      <h4>{item.date}</h4>
                  </div>
                )}
              <div className="base-components__parent-item-blockTwo-data">
                <h1>{item.title}</h1>
              </div>
              <p className="base-components__parent-item-blockTwo-data-default" dangerouslySetInnerHTML={{__html: item.description}}></p>
            </div>

                {
                  item.id !== index ? (
                    <button
                      className="base-components__parent-itemGrand-button"
                      onClick={() => changeIndex(item.id)} 
                    >
                      Подробнее
                    </button>
                  ) : ''
                }
            
          </div>
        </div>

        {/* <p className="base-components__parent-itemGrand-description" dangerouslySetInnerHTML={{__html: item.description_detail}}></p> */}

        <AnimatePresence>
          {item.id === index && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}  
              animate={{ opacity: 1, height: "auto" }}  
              exit={{ opacity: 0, height: 0 }}  
              transition={{ duration: 0.4, ease: "easeInOut" }}  
              dangerouslySetInnerHTML={{__html: item.description_detail}}
            >
            </motion.p>
          )}
        </AnimatePresence>
        
        {
          item.id === index ? (
            <button
              className="base-components__parent-itemGrand-button"
              onClick={() => changeIndex(item.id)} 
            >
              Закрыть
            </button>
          ) : ''
        }
      </div>
    </div>
  );
};

BaseComponents.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    calendar: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]),
    ]),
    date: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([undefined]),
    ]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    description_detail: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    descriptionDetail: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  changeIndex: PropTypes.func.isRequired,
};
