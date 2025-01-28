import "./header.scss";
import HeaderTop from './components/HeaderTop';
import HeaderBottom from './components/HeaderBottom';

export const Header = () => {
 
  return (
    <header className='header'>
      <div className='container'>
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  );
};

