import { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

export const headerMenu = [
  { name: "ГЛАВНАЯ", path: "/" },
  { name: "О РАЙОНЕ", path: "/about" },
  {
    name: "АДМИНИСТРАЦИЯ", 
    subMenu: [
      { name: "руководители", path: "/" },
      { name: "структура администрации", path: "/" },
      { name: "вакансии", path: "/" },
    ],
  },
  { name: "НОВОСТИ", path: "/news" },
  {
    name: "ОБРАЩЕНИЯ ГРАЖДАН",
    subMenu: [
      { name: "Авторизоваться", path: "/" },
      { name: "Продолжить без авторизации", path: "/" },
      { name: "администрация", path: "/" },
    ],
  },
  { name: "ПРОЕКТЫ", path: "/projects" },
  {
    name: "АНТИКОРРУПЦИОННЫЕ МЕРОПРИЯТИЯ", path: "/events"
  },
  { name: "ГАЛЕРЕЯ", path: "/gallery" },
];

const HeaderMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = useCallback((name) => {
    setActiveMenu((prevActiveMenu) => (prevActiveMenu === name ? null : name));
  }, []);

  return (
    <div className="header_menu">
      {headerMenu.map((page) => (
        <div key={page.name} className="menu_item">
          <div
            className="link"
            onClick={() => page.subMenu && handleMenuClick(page.name)}
          >
            <NavLink to={page.path}>{page.name}</NavLink>
          </div>
          {page.subMenu && activeMenu === page.name && (
            <div className="dropdown_menu">
              {page.subMenu.map((subPage) => (
                <NavLink key={subPage.name} to={subPage.path} className="dropdown_link">
                  {subPage.name}
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
