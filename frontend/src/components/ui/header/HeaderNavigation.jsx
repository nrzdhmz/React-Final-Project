import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';

const HeaderNavigation = ({ location }) => {
  const { user } = useAuth();

  return (
    <>
      {!location.pathname.startsWith('/profile/') ? (
        <div className="header-navigations general-nav">
          <nav className='navigation nav-general'>
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
      ) : (
        <div className="header-navigations profile-nav">
          <nav className='navigation nav-profile'>
            <ul className='navigation-list'>
              <li className='navigation-item nav-hover'>
                <Link to={`/profile/${user.id}/recap`}>RECAP</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to={`/profile/${user.id}/orders`}>ORDERS</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to={`/profile/${user.id}/wishlist`}>WISHLIST</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to={`/profile/${user.id}/personal-data`}>PERSONAL DATA</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default HeaderNavigation;
