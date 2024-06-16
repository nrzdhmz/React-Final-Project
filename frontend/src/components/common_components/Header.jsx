import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import Logo from "../../assets/images/Logo.png";
import DG from "../../assets/images/DG.png";
import LogoWhite from "../../assets/images/LogoWhite.png";
import Login from '../auth/Login'; 
import Filter from './Filter';
import { useAuth } from '../../context/authContext';

const Header = () => {
  const { user } = useAuth();  
  const [logoSrc, setLogoSrc] = useState(LogoWhite);
  const [scrolled, setScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [logoHeight, setLogoHeight] = useState(100);
  const [login, setLogin] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
      setIsTop(false);
      setLogoSrc(DG);
      setLogoHeight(35);
    } else {
      setScrolled(false);
      setIsTop(true); 
      setLogoSrc(location.pathname === '/women' || location.pathname === '/men' ? Logo : LogoWhite);
      setLogoHeight(location.pathname === '/' ? 100 : 35);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const handleMouseEnter = () => {
    if (isTop) {
      setLogoSrc(Logo);
    }
  };

  const handleMouseLeave = () => {
    if (isTop) {
      setLogoSrc(location.pathname === '/women' || location.pathname === '/men' ? Logo : LogoWhite);
    }
  };

  const handleCloseLogin = () => {
    setLogin(false);
    document.body.style.overflow = 'auto';
  };

  const handleOpenLogin = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setLogoSrc(DG);
    } else {
      setLogoSrc(Logo);
    }
    setLogin(true);
    document.body.style.overflow = 'hidden'; 
  };

  useEffect(() => {
    console.log('User Data:', user); 
  }, [user]);

  return (
    <header
      className={`header ${scrolled ? 'scrolled' : ''} ${location.pathname === '/women' || location.pathname === '/men' ? 'header-white' : 'header-black'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {login && (
        <>
          <div className="cover" onClick={handleCloseLogin}></div>
          <Login onClose={handleCloseLogin} />
        </>
      )}
      <div className="header-container">
        <div className="header-top">
          <div className="header-business-units">
            <nav className='navigation'>
              <ul className='navigation-list'>
                <li className='header-business-item nav-hover'>
                  <Link to="/">Fashion</Link>
                </li>
                <li className='header-business-item nav-hover'>
                  <Link to="/">Beauty</Link>
                </li>
                <li className='header-business-item nav-hover'>
                  <Link to="/">Casa</Link>
                </li>
                <li className='header-business-item nav-hover'>
                  <Link to="/">Food&Beverage</Link>
                </li>
                <li className='header-business-item nav-hover'>
                  <Link to="/">World</Link>
                </li>
                <li className='header-business-item nav-hover'>
                  <Link to="/">Alta Moda</Link>
                </li>
              </ul>
            </nav> 
          </div>
          <div className="service-menu">
            <nav className='navigation'>
              <ul className='navigation-list'>
                <li className='service-menu-item nav-hover'>
                  <Link><IoIosSearch className='search-icon'/><p>Search</p></Link>
                </li>
                <li className='service-menu-item nav-hover'>
                  <Link>Store Locator</Link>
                </li>
                {user ? (
                  <li className='service-menu-item nav-hover'>
                    <Link to='/'>My Accaunt</Link>
                  </li>
                ) : (
                  <li onClick={handleOpenLogin} className='service-menu-item nav-hover'>
                    <Link>Login</Link>
                  </li>
                )}
                <li className='service-menu-item nav-hover'>
                  <AiOutlineShopping className='shop-icon'/>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-logo">
          <Link to="/">
            <img className={`logo ${location.pathname === '/women' || location.pathname === '/men' ? 'logo-women' : (isTop ? 'logo-white' : 'logo-dg')}`} src={logoSrc} alt="Logo" style={{ height: `${logoHeight}px` }} />
          </Link>
        </div>
        <div className="header-navigations">
          <nav className='navigation'>
            <ul className='navigation-list'>
              <li className='navigation-item nav-hover'>
                <Link to="/">VACATION ESSENTIALS</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to="/">BAGS</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to="/women">WOMEN</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to="/men">MEN</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to="/">DBVIB3</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to="/">CHILDREN</Link>
              </li>
            </ul>
          </nav>
        </div>
        {(location.pathname === '/women' || location.pathname === '/men') && <Filter/>}
      </div>
    </header>
  );
};

export default Header;
