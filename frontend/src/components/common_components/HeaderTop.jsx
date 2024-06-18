import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { useAuth } from '../../context/authContext';
import HeaderBusiness from './HeaderBusiness';
import { IoMdLogOut } from "react-icons/io";
import Logo from './LogoMedia';

const HeaderTop = ({ isTop,  handleOpenLogin, handleLogout, handleOpenCart , location, setShowCart }) => {
  const { user } = useAuth();

  return (
    <div className="header-top">
      <HeaderBusiness/>
      <Logo isTop={isTop}/>
      <div className="service-menu">
        <nav className='navigation'>
          <ul className='navigation-list'>
            <li className='service-menu-item nav-hover'>
              <Link><IoIosSearch className='search-icon logout'/><p className='logout'>Search</p></Link>
            </li>
            <li className='service-menu-item nav-hover'>
              <Link className='logout'>Store Locator</Link>
            </li>
            {user ? (
              <>
                <li className='service-menu-item nav-hover my-account-item'>
                  <Link to={`/profile/${user.id}/recap`} className='my-account-link'>
                    <span className='my-account-text'>My Account</span>
                    <BiUser className='my-account-icon' />
                  </Link>
                </li>
                <li className='service-menu-item nav-hover'>
                  <IoMdLogOut className='my-account-icon'  onClick={handleLogout}/>
                  <Link className='logout' onClick={handleLogout}>Log Out</Link>
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
