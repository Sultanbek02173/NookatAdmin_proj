import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/app.scss';
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
} from '../../pages';
import { Footer, Header } from '../../widgets';
import { ScrollButton } from '../../entities';

function App() {
  const routesArr = [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/gallery/:id',
      element: <GalleryPage />
    },
    {
      path: '/administration/:id',
      element: <AdministrationPage />
    },
    {
      path: '/news',
      element: <NewsPage />
    },
    {
      path: '/news-detail/:id',
      element: <NewsDetail />
    },
    {
      path: '/about-district/:id',
      element: <AboutDistrict />
    },
    {
      path: '/projects',
      element: <ProjectsPage />
    },
    {
      path: '/anti-corruption',
      element: <AntiCorruptionPage />
    },
    {
      path: '/aiyl-aimaks',
      element: <AiylAimaksPage />
    }
  ];
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
  )
}

export default App
