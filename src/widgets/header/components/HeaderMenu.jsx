import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export const headerMenu = [
  { name: "ГЛАВНАЯ", path: "/" },
  { name: "О РАЙОНЕ", path: "/aboutDistrict" },
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
    name: "ОБРАЩЕНИЯ ГРАЖДАН",
    subMenu: [
      { name: "Авторизоваться", path: "/" },
      { name: "Продолжить без авторизации", path: "/" },
      { name: "администрация", path: "/" },
    ],
  },
  { name: "ПРОЕКТЫ", path: "/projects" },
  { name: "АНТИКОРРУПЦИОННЫЕ МЕРОПРИЯТИЯ", path: "/anti-corruption" },
  { name: "ГАЛЕРЕЯ", path: "/gallery" },
];

const HeaderMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

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
          <NavLink className="link" to={page.path}>
            {page.name}
          </NavLink>

          {page.subMenu && activeMenu === page.name && (
            <div className="dropdown_menu">
              {page.subMenu.map((subPage) => (
                <NavLink
                  key={subPage.name}
                  to={subPage.path}
                  className="dropdown_link"
                >
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
