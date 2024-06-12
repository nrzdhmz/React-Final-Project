import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// icons
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
// logo
import Logo from "../assets/images/Logo.png"
import LogoWhite from "../assets/images/LogoWhite.png";

const Header = () => {
  const [logoSrc, setLogoSrc] = useState(LogoWhite);

  const handleMouseEnter = () => {
    setLogoSrc(Logo);
  };

  const handleMouseLeave = () => {
    setLogoSrc(LogoWhite);
  };

  return (
    <header className='header' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                <li className='service-menu-item nav-hover'>
                  <Link>Login</Link>
                </li>
                <li className='service-menu-item nav-hover'>
                  <AiOutlineShopping className='shop-icon'/>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-logo">
          <Link to="/">
            <img className='logo' src={logoSrc} alt="Logo" />
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
                <Link to="/">WOMEN</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to="/">MEN</Link>
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
      </div>
    </header>
  );
};

export default Header;
