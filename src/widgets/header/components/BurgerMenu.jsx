import { useState } from "react";
import "../header.scss";
import "../burgermenu.scss";

import HeaderMenu from "./HeaderMenu";
import locationIcon from "../../../shared/images/locationIcon.svg";
import languageIcon from "../../../shared/images/languageIcon.svg";
import phoneIcon from "../../../shared/images/phoneIcon.svg";
import instagramIcon from "../../../shared/images/instagramIcon.svg";
import telegramIcon from "../../../shared/images/telegramIcon.svg";
import whatsappIcon from "../../../shared/images/whatsappIcon.svg";
import youtubeIcon from "../../../shared/images/youtubeIcon.svg";
import { useTranslation } from 'react-i18next';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { i18n } = useTranslation();
  const handleChangeLang = ({ target: { value } }) => {
      i18n.changeLanguage(value);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="burger-menu">
      <input
        id="menu__toggle"
        type="checkbox"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className={`menu__box ${isOpen ? 'open' : ''}`}>
        <div className="header_top">
          <div className="contact-info">
            <img src={locationIcon} alt="Location" />
            <p>ул. Центральная, 45, г. Ноокат</p>
            <img src={languageIcon} alt="Language" />
            <button onClick={() => handleChangeLang({ target: { value: 'ru' } })}>RU</button>
            <span>/</span>
            <button onClick={() => handleChangeLang({ target: { value: 'kg' } })}>KG</button>

            <img src={phoneIcon} alt="Phone" />
            <p>+996 995 898 977</p>


            <div className="socials">
              <a href=""><div>
                <img src={instagramIcon} alt="Instagram" />
              </div></a>
              <div>
                <a href=""> <img src={telegramIcon} alt="Telegram" /></a>
              </div>
              <div>
                <a href=""> <img src={whatsappIcon} alt="WhatsApp" /></a>
              </div>
              <div>
                <a href=""> <img src={youtubeIcon} alt="YouTube" /></a>
              </div>
            </div>
          </div>
        </div>
        <HeaderMenu />

      </ul>

    </div>
  );
};

export default BurgerMenu;
