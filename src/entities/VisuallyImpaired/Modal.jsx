import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseLetterSpacing,
  increaseLineSpacing,
  largeLetterSpacing,
  largeLineSpacing,
  normalLetterSpacing,
  normalLineSpacing,
  setDefaultFont,
  switchToSerifFont,
} from "../../app/store/reducers/visually";

const Modal = ({ setModal }) => {
  const dispatch = useDispatch();
  return (
    <div className="visually__modal">
      <div className="visually__modal-head">
        <p>settings</p>
        <button onClick={() => setModal(false)}>&times;</button>
      </div>
      <div className="visually__modal-body">
        <div className="visually__content">
          <p>Межбуквенное расстояние</p>
          <div>
            <button onClick={() => dispatch(normalLetterSpacing())}>
              стандартный
            </button>
            <button onClick={() => dispatch(increaseLetterSpacing())}>
              средний
            </button>
            <button onClick={() => dispatch(largeLetterSpacing())}>
              Большой
            </button>
          </div>
        </div>
        <div className="visually__content">
          <p>Межстрочный интервал</p>
          <div>
            <button onClick={() => dispatch(normalLineSpacing())}>
              стандартный
            </button>
            <button onClick={() => dispatch(increaseLineSpacing())}>
              средний
            </button>
            <button onClick={() => dispatch(largeLineSpacing())}>
              Большой
            </button>
          </div>
        </div>
        <div className="visually__content">
          <p>Шрифт</p>
          <div>
            <button onClick={() => dispatch(setDefaultFont())}>
              без засечек
            </button>
            <button onClick={() => dispatch(switchToSerifFont())}>
              с засечками
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
