import logo from "../../../shared/images/logo.png";
import locationIcon from "../../../shared/images/locationIcon.svg";
import languageIcon from "../../../shared/images/languageIcon.svg";
import phoneIcon from "../../../shared/images/phoneIcon.svg";
import instagramIcon from "../../../shared/images/instagramIcon.svg";
import telegramIcon from "../../../shared/images/telegramIcon.svg";
import whatsappIcon from "../../../shared/images/whatsappIcon.svg";
import youtubeIcon from "../../../shared/images/youtubeIcon.svg";
import { useTranslation } from "react-i18next";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import { activeMode, useVisually } from "../../../app/store/reducers/visually";
import { useDispatch } from "react-redux";

const HeaderTop = () => {
  const dispatch = useDispatch();
  const { hide } = useVisually();
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  };

  return (
    <div className="headerTop">
      <div className="headerTop_left">
        <img src={logo} alt="Logo" />
        <h1>НООКАТСКАЯ АДМИНИСТРАЦИЯ</h1>
      </div>
      <BurgerMenu />
      <div className="headerTop_right">
        <img src={locationIcon} alt="Location" />
        <p>ул. Центральная, 45, г. Ноокат</p>
        <button onClick={() => dispatch(activeMode())}>
          {hide ? "активация" : "открыть"}
        </button>
        <img src={languageIcon} alt="Language" />
        <div className="languageButtons">
          <button
            onClick={() => handleChangeLang("ru")}
            className={activeLang === "ru" ? "active" : ""}
          >
            RU
          </button>
          <span>/</span>
          <button
            onClick={() => handleChangeLang("ky")}
            className={activeLang === "ky" ? "active" : ""}
          >
            KG
          </button>
        </div>

        <img src={phoneIcon} alt="Phone" />
        <p>+996 995 898 977</p>

        <div className="socials">
          <a href="#">
            <div>
              <img src={instagramIcon} alt="Instagram" />
            </div>
          </a>
          <a href="#">
            <div>
              <img src={telegramIcon} alt="Telegram" />
            </div>
          </a>
          <a href="#">
            <div>
              <img src={whatsappIcon} alt="WhatsApp" />
            </div>
          </a>
          <a href="#">
            <div>
              <img src={youtubeIcon} alt="YouTube" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
