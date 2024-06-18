import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from "../../assets/images/Logo.png";
import DG from "../../assets/images/DG.png";
import LogoWhite from "../../assets/images/LogoWhite.png";
import Login from '../auth/Login'; 
import Filter from './Filter';
import { useAuth } from '../../context/authContext';
import HeaderTop from './HeaderTop';
import HeaderLogo from './HeaderLogo';
import HeaderNavigation from './HeaderNavigation';
import Cart from '../genderEqualPage/Cart';

const Header = () => {
  const { setShowCart, logout } = useAuth();
  const [logoSrc, setLogoSrc] = useState(LogoWhite);
  const [scrolled, setScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [logoHeight, setLogoHeight] = useState(100);
  const [login, setLogin] = useState(false);
  const [showCart, setShowCartComponent] = useState(false);
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
      setLogoSrc(location.pathname !== '/' ? Logo : LogoWhite);
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
      setLogoSrc(location.pathname !== '/' ? Logo : LogoWhite);
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

  const handleCloseCart = () => {
    setShowCartComponent(false);
    document.body.style.overflow = 'auto';
  };

  const handleOpenCart = () => {
    setShowCartComponent(true);
    document.body.style.overflow = 'hidden';
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/';   
  };

  return (
    <header
      className={`header ${scrolled ? 'scrolled' : ''} ${location.pathname !== '/' ? 'header-white' : 'header-black'} ${location.pathname.startsWith('/profile/') ? 'profile-header' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {login && (
        <>
          <div className="cover" onClick={handleCloseLogin}></div>
          <Login onClose={handleCloseLogin} />
        </>
      )}
      {showCart && (
        <>
          <div className="cover" onClick={handleCloseCart}></div>
          <Cart onClose={handleCloseCart} />
        </>
      )}
      <div className="header-container">
        <HeaderTop handleOpenLogin={handleOpenLogin} handleLogout={handleLogout} handleOpenCart={handleOpenCart} location={location} setShowCart={setShowCart} />
        <HeaderLogo logoSrc={logoSrc} logoHeight={logoHeight} isTop={isTop} location={location} />
        <HeaderNavigation location={location} />
        {(location.pathname === '/women' || location.pathname === '/men') && <Filter />}
      </div>
    </header>
  );
};

export default Header;
