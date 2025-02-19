import React, { useState } from "react";
import {
  activeMode,
  activeSpeech,
  darkPictures,
  deactivateMode,
  decreaseFontSize,
  handleThemeChange,
  hidePictures,
  increaseFontSize,
  setHide,
  showPictures,
  unplugSpeech,
  useVisually,
} from "../../app/store/reducers/visually";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
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
          <div className="visually__content">
            <p>Цвета сайта</p>
            <div>
              <button onClick={() => dispatch(handleThemeChange("light"))}>
                ц
              </button>
              <button onClick={() => dispatch(handleThemeChange("dark"))}>
                ц
              </button>
              <button onClick={() => dispatch(handleThemeChange("blue"))}>
                ц
              </button>
              <button onClick={() => dispatch(handleThemeChange("brown"))}>
                ц
              </button>
              <button onClick={() => dispatch(handleThemeChange("green"))}>
                ц
              </button>
            </div>
          </div>
          <div className="visually__content">
            <p>Изображения</p>
            <div>
              <button onClick={() => dispatch(showPictures())}>
                включить изображения
              </button>
              <button onClick={() => dispatch(hidePictures())}>
                выключить изображения
              </button>
              <button onClick={() => dispatch(darkPictures())}>
                изображения черно-белые
              </button>
            </div>
          </div>
          <div className="visually__content">
            <p>Синтез речи</p>
            <div>
              <button onClick={() => dispatch(unplugSpeech())}>
                выключить речь
              </button>
              <button onClick={() => dispatch(activeSpeech())}>
                включить речь
              </button>
            </div>
          </div>
          <div className="visually__content">
            <p>Настройки</p>
            <div>
              <button onClick={() => setModal(!modal)}>настройки</button>
              <button onClick={() => dispatch(deactivateMode())}>
                обычная версия
              </button>
              <button onClick={() => dispatch(setHide())}>закрыть окно</button>
            </div>
          </div>
          {modal && <Modal setModal={setModal} />}
        </div>
      )}
    </React.Fragment>
  );
};
