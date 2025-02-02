import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/app.scss';
import { 
  AboutDistrict,
  AdministrationPage, 
  AntiCorruptionPage, 
  GalleryPage, 
  HomePage, 
  NewsDetail, 
  NewsPage, 
  ProjectsPage
} from '../../pages';
import { Footer, Header } from '../../widgets';

function App() {
  const routesArr = [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/gallery',
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
      path: '/newsDetail/:id',
      element: <NewsDetail />
    },
    {
      path: '/aboutDistrict',
      element: <AboutDistrict />
    },
    {
      path: '/projects',
      element: <ProjectsPage />
    },
    {
      path: '/anti-corruption',
      element: <AntiCorruptionPage />
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
        <Footer />
    </BrowserRouter>
  )
}

export default App
