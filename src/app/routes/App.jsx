import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/app.scss";
import {
  AboutDistrict,
  AdministrationPage,
  AiylAimaksPage,
  AntiCorruptionPage,
  GalleryPage,
  HomePage,
  NewsDetail,
  NewsPage,
  ProjectsPage,
} from "../../pages";
import { Footer, Header } from "../../widgets";
import { ScrollButton } from "../../entities";
import { useDispatch } from "react-redux";
import { useVisually } from "../store/reducers/visually";
import { useEffect } from "react";

function App() {
  const routesArr = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/gallery/:id",
      element: <GalleryPage />,
    },
    {
      path: "/administration/:id",
      element: <AdministrationPage />,
    },
    {
      path: "/news",
      element: <NewsPage />,
    },
    {
      path: "/news-detail/:id",
      element: <NewsDetail />,
    },
    {
      path: "/about-district/:id",
      element: <AboutDistrict />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
    {
      path: "/anti-corruption",
      element: <AntiCorruptionPage />,
    },
    {
      path: "/aiyl-aimaks",
      element: <AiylAimaksPage />,
    },
  ];

  const dispatch = useDispatch();
  const { font, theme, letterSpacing, lineSpacing, fontSize, picture } =
    useVisually();

  useEffect(() => {
    const body = document.body;
    if (!body) return;

    const themeClasses = ["dark", "light", "brown", "green", "blue"];
    const letterSpacingClasses = [
      "letter__normal",
      "letter__average",
      "letter__big",
    ];
    const lineHeightClasses = ["lineH__normal", "lineH__normal", "lineH__big"];
    const fontsClasses = ["serif", "sans-serif"];
    const fontSizeClasses = [
      "fontSize-2",
      "fontSize-4",
      "fontSize-6",
      "fontSize-8",
      "fontSize-10",
      "fontSize-12",
      "fontSize-14",
      "fontSize-16",
      "fontSize-18",
      "fontSize-20",
      "fontSize-22",
      "fontSize-24",
      "fontSize-26",
    ];
    const imagesClass = ["image__show", "image__hide", "image__dark"];

    // console.log(fontSizeClasses);

    body.classList.remove(
      ...themeClasses,
      ...letterSpacingClasses,
      ...lineHeightClasses,
      ...fontsClasses,
      ...fontSizeClasses,
      ...imagesClass
    );
    body.classList.add(
      theme,
      letterSpacing,
      lineSpacing,
      font,
      `fontSize-${fontSize}`,
      picture
    );

    return () => {
      body.classList.remove(
        theme,
        letterSpacing,
        lineSpacing,
        font,
        `fontSize-${fontSize}`,
        picture
      );
    };
  }, [theme, letterSpacing, lineSpacing, font, fontSize, picture]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        {routesArr?.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <ScrollButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
