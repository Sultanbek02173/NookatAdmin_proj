import logo from "../.././shared/images/logo.png";
import HeaderMenu from '../header/components/HeaderMenu';
import "./Footer.scss"
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
import { useSelector } from "react-redux";

const statistics = [
    { label: "Просмотры", value: 124 },
    { label: "Посетители", value: 124 },
    { label: "Визиты", value: 124 },
  ];

export const Footer = () => {
  const { t } = useTranslation(); 
  const { setting } = useSelector((state) => state.setting);

    return (
        <footer className="footer">
          <div className="container">
            <div className="footer_group">
              <div className="footer_group_logo">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Emblem_of_Kyrgyzstan.svg/1200px-Emblem_of_Kyrgyzstan.svg.png' alt="Logo" />
                <h1>{setting ? setting[0]?.title_logo : ''}</h1>
              </div>
    
              <div className="footer_group_nav">
                <h2>
                  {t("Навигация")}
                  </h2>
                <nav>
                  <HeaderMenu />
                  <NavLink to="/news#NewsMedia" className="link">
                    {t("СМИ о нас")}

                  </NavLink>
                </nav>
              </div>
    
              <div className="footer_group_statistic">
                <h2>{t("Статистика")}</h2>
                {statistics.map((stat, index) => (
                  <div key={index}>
                    <h4>{t(stat.label)}</h4>
                    <p>
                      <LiaEyeSolid size={20} />
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
    
              <div className="footer_group_socials">
                <h2>
                {t("Соц сети")}

                </h2>
                <div className="socials">
                  <div>
                    <a href={setting ? setting[0]?.link_insta : ''} target="_blank">
                      <FaInstagram color="#227DA5" size={25} />
                    </a>
                  </div>
                  <div>
                    <a href={setting ? setting[0]?.link_facebook : ''} target="_blank">
                      <FaFacebookF color="#227DA5" size={25} />
                    </a>

                  </div>
                </div>
              </div>
            </div>
            <div className="footer_end">
              <p>© 2025 Ноокатская районная государственная администрация. Все права защищены.</p>
              <p>Made by GeeksPro</p>
            </div>
          </div>
        </footer>
      );
}
