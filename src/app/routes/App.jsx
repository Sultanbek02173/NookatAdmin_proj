import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/app.scss';
import { 
  AboutDistrict,
  AdministrationPage, 
  GalleryPage, 
  HomePage, 
  NewsPage 
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
      path: '/administration',
      element: <AdministrationPage />
    },
    {
      path: '/news',
      element: <NewsPage />
    },
    {
      path: '/aboutDistrict',
      element: <AboutDistrict />
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
