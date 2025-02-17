import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const headerMenu = [
  { name: "ГЛАВНАЯ", path: "/" },
  { name: "О РАЙОНЕ", path: "/about-district/1",
    subMenu: [
    { name: "Oбщая информация о районе", path: "/about-district/1" },
    { name: "паспорт района", path: "/about-district/2" },
    { name: "Айылные аймаки", path: "/aiyl-aimaks" },
    { name: "Выдающиеся личности района", path: "/about-district/4" },
    { name: "история района", path: "/about-district/5" },
    { name: "карта района", path: "/about-district/6" },
  ], 
  },
  
  {
    name: "АДМИНИСТРАЦИЯ",  path: "/administration/1",
    subMenu: [
      { name: "руководители", path: "/administration/1" },
      { name: "структура администрации", path: "/administration/2" },
      { name: "вакансии", path: "/administration/3" },
    ],
  },
  { name: "НОВОСТИ", path: "/news" },
  {
    name: "ОБРАЩЕНИЯ ГРАЖДАН", path: 'https://portal.tunduk.kg/public_services/new_message_sed', target: '_balnk'
  },
  { name: "ПРОЕКТЫ", path: "/projects" },
  { name: "АНТИКОРРУПЦИОННЫЕ МЕРОПРИЯТИЯ", path: "/anti-corruption" },
  { name: "ГАЛЕРЕЯ", path: "/gallery/new-photo" },
];

const HeaderMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);
  const { t } = useTranslation(); 

  const handleMouseEnter = (name) => {
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header_menu" ref={menuRef}>
      {headerMenu.map((page) => (
        <div
          key={page.name}
          className="menu_item"
          onMouseEnter={() => page.subMenu && handleMouseEnter(page.name)}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink className="link" to={page.path} target={page?.target}>
            {t(page.name)}
          </NavLink>

          {page.subMenu && activeMenu === page.name && (
            <div className="dropdown_menu">
              {page.subMenu.map((subPage) => (
                <NavLink
                  key={subPage.name}
                  to={subPage.path}
                  className="dropdown_link"
                >
                  {t(subPage.name)}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderMenu;
