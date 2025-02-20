import { faImage } from "@fortawesome/fontawesome-free-regular";
import {
  faMinus,
  faMinusCircle,
  faVolumeOff,
} from "@fortawesome/fontawesome-free-solid";
import {
  faCircleHalfStroke,
  faGear,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  activeSpeech,
  darkPictures,
  deactivateMode,
  decreaseFontSize,
  handleThemeChange,
  hidePictures,
  increaseFontSize,
  setHide,
  setShow,
  showPictures,
  unplugSpeech,
  useVisually,
} from "../../app/store/reducers/visually";
import Modal from "./Modal";
// import faImage from "@fortawesome/fontawesome-free-regular";
export const VisuallyImpaired = () => {
  const { hide } = useVisually();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {hide && (
        <div className="visually">
          <div className="visually__content">
            <p>Размер шрифта</p>
            <div>
              <button onClick={() => dispatch(decreaseFontSize())}>A-</button>
              <button onClick={() => dispatch(increaseFontSize())}>A+</button>
            </div>
          </div>
          <div className="visually__content" id="visually__content">
            <p>Цвета сайта</p>
            <div>
              <button
                id="visually__content-light"
                onClick={() => dispatch(handleThemeChange("light"))}
              >
                ц
              </button>
              <button
                id="visually__content-dark"
                onClick={() => dispatch(handleThemeChange("dark"))}
              >
                ц
              </button>
              <button
                id="visually__content-blue"
                onClick={() => dispatch(handleThemeChange("blue"))}
              >
                ц
              </button>
              <button
                id="visually__content-brown"
                onClick={() => dispatch(handleThemeChange("brown"))}
              >
                ц
              </button>
              <button
                id="visually__content-green"
                onClick={() => dispatch(handleThemeChange("green"))}
              >
                ц
              </button>
            </div>
          </div>
          <div className="visually__content">
            <p>Изображения</p>
            <div>
              <button onClick={() => dispatch(showPictures())}>
                <FontAwesomeIcon icon={faImage} />
              </button>
              <button onClick={() => dispatch(hidePictures())}>
                <FontAwesomeIcon icon={faMinusCircle} />
              </button>
              <button onClick={() => dispatch(darkPictures())}>
                <FontAwesomeIcon icon={faCircleHalfStroke} />
              </button>
            </div>
          </div>
          <div className="visually__content">
            <p>Синтез речи</p>
            <div>
              <button onClick={() => dispatch(unplugSpeech())}>
                <FontAwesomeIcon icon={faVolumeOff} />
              </button>
              <button onClick={() => dispatch(activeSpeech())}>
                <FontAwesomeIcon icon={faVolumeHigh} />
              </button>
            </div>
          </div>
          <div className="visually__content">
            <p>настройки</p>
            <div>
              <button onClick={() => setModal(!modal)}>
                <FontAwesomeIcon icon={faGear} />
              </button>
              <button onClick={() => dispatch(deactivateMode())}>
                обычная версия
              </button>
              <button onClick={() => dispatch(setHide())}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
          </div>
          {modal && <Modal setModal={setModal} />}
        </div>
      )}
      {!hide && <button onClick={() => dispatch(setShow())}>показать</button>}
    </React.Fragment>
  );
};
