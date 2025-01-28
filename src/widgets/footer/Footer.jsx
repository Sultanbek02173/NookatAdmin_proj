import logo from "../.././shared/images/logo.png";
import HeaderMenu from '../header/components/HeaderMenu';
import instagramIcon from "../.././shared/images/instagramIcon.svg";
import ffff from "../.././shared/images/ffff.svg";
import koz from "../.././shared/images/koz.svg";
import "./Footer.scss"
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className='footer '>
            <div className="container">
                <div className='footer_group '>
                <div className="footer_group_logo">
                    <img src={logo} alt="Logo" />
                    <h1>НООКАТСКАЯ АДМИНИСТРАЦИЯ</h1>
                </div>
                <div className="footer_group_nav">
                    <h2>Навигация</h2>
                    <nav>
                    <HeaderMenu />
                    <NavLink to="/aboutsmm" className="link">
                        СМИ о нас
                    </NavLink>

                    </nav>
                </div>
                <div className="footer_group_statistic">
                    <h2>Статистика</h2>
                    <h4>Просмотры</h4>
                    <p><img src={koz} alt="" />124</p>
                    <h4>Посетители</h4>
                    <p><img src={koz} alt="" />124</p>
                    <h4>Визиты</h4>
                    <p><img src={koz} alt="" />124</p>
                </div>
                <div className="footer_group_info">
                    <h2>Информация</h2>
                    <nav>
                    <NavLink to="/" className="link">
                        FAQ
                    </NavLink>
                    <NavLink to="/" className="link">
                        Условия
                    </NavLink>
                    <NavLink to="/" className="link">
                        Конфеденциальность
                    </NavLink>
                    
                    </nav>
                </div>
                <div className="footer_group_socials">
                    <h2>соц сети</h2>
                    <div className="socials">
                    <div>
                        <img src={instagramIcon} alt="Instagram" />
                    </div>
                    <div>
                        <img src={ffff} alt="ffff" />
                    </div>

                    </div>
                </div>
                </div>
                <div className="footer_end">
                <p>© 2025 Ноокатская районная государственная администрация. Все права защищены. </p>
                <p>Made by GeeksPro</p>
                </div>
            </div>
            </footer>
    );
}
