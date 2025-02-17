import logo from "../.././shared/images/logo.png";
import HeaderMenu from '../header/components/HeaderMenu';
import instagramIcon from "../.././shared/images/instagramIcon.svg";
import ffff from "../.././shared/images/ffff.svg";
import koz from "../.././shared/images/koz.svg";
import "./Footer.scss"
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const statistics = [
    { label: "Просмотры", value: 124 },
    { label: "Посетители", value: 124 },
    { label: "Визиты", value: 124 },
  ];

export const Footer = () => {
  const { t } = useTranslation(); 

    return (
        <footer className="footer">
          <div className="container">
            <div className="footer_group">
              <div className="footer_group_logo">
                <img src={logo} alt="Logo" />
                <h1>НООКАТСКАЯ АДМИНИСТРАЦИЯ</h1>
              </div>
    
              <div className="footer_group_nav">
                <h2>
                  {t("Навигация")}
                  </h2>
                <nav>
                  <HeaderMenu />
                  <NavLink to="/aboutsmm" className="link">
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
                      <img src={koz} alt={stat.label} />
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
                    <img src={instagramIcon} alt="Instagram" />
                  </div>
                  <div>
                    <img src={ffff} alt="Facebook" />
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
