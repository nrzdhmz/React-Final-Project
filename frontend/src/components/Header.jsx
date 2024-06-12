import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
  return (
    <header className='header'>
      <div className="header-container">
        <div className="header-top">
          <div className="header-business-units">
            <nav className='navigation'>
              <ul className='navigation-list'>
                <li className='header-business-item'>
                  <Link to="/fashion">Fashion</Link>
                </li>
                <li className='header-business-item'>
                  <Link to="/beauty">Beauty</Link>
                </li>
                <li className='header-business-item'>
                  <Link to="/casa">Casa</Link>
                </li>
                <li className='header-business-item'>
                  <Link to="/food-beverage">Food & Beverage</Link>
                </li>
                <li className='header-business-item'>
                  <Link to="/world">World</Link>
                </li>
                <li className='header-business-item'>
                  <Link to="/alta-moda">Alta Moda</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="service-menu">
            <nav className='navigation'>
              <ul className='navigation-list'>
                <li className='service-menu-item'>
                  <Link><IoIosSearch /><title>Search</title></Link>
                </li>
                <li className='service-menu-item'>
                  <Link>Store Locator</Link>
                </li>
                <li className='service-menu-item'>
                  <Link>Login</Link>
                </li>
                <li className='service-menu-item'>
                  <AiOutlineShopping />
                </li>
              </ul>
            </nav>
            <IoIosSearch />
            <title>Search</title>
          </div>
        </div>
        <div className="header-logo">
          {/* Add your logo here */}
        </div>
        <div className="header-navigations">
          <nav className='navigation'>
            <ul className='navigation-list'>
              <li className='navigation-item'>
                <Link to="/vacation-essentials">VACATION ESSENTIALS</Link>
              </li>
              <li className='navigation-item'>
                <Link to="/bags">BAGS</Link>
              </li>
              <li className='navigation-item'>
                <Link to="/women">WOMEN</Link>
              </li>
              <li className='navigation-item'>
                <Link to="/men">MEN</Link>
              </li>
              <li className='navigation-item'>
                <Link to="/dbvib3">DBVIB3</Link>
              </li>
              <li className='navigation-item'>
                <Link to="/children">CHILDREN</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
