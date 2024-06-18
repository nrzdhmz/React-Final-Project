import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { useAuth } from '../../context/authContext';
import Cart from '../genderEqualPage/Cart';

const HeaderTop = ({ handleOpenLogin, handleLogout, handleOpenCart , location, setShowCart }) => {
  const { user } = useAuth();

  return (
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
              <>
                <li className='service-menu-item nav-hover'>
                  <Link to={`/profile/${user.id}/recap`}>My Account</Link>
                </li>
                <li className='service-menu-item nav-hover'>
                  <Link onClick={handleLogout}>Log Out</Link>
                </li>
                <li className='service-menu-item nav-hover'>
                  <AiOutlineShopping onClick={handleOpenCart} className='shop-icon'/>
                </li>
              </>
            ) : (
              <li onClick={handleOpenLogin} className='service-menu-item nav-hover'>
                <Link>Login</Link>
              </li>
            )}
            { location.pathname !== '/' && !location.pathname.startsWith('/profile/') && (
              <>
                <li className='service-menu-item nav-hover'>
                  <IoMdHeartEmpty className='shop-icon' onClick={() => setShowCart(true)} />
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderTop;
