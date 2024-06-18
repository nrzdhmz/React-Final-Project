import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const HeaderNavigation = ({ location }) => {
  const { user } = useAuth();

  return (
    <div className="header-navigations">
      <nav className='navigation'>
        <ul className='navigation-list'>
          {!location.pathname.startsWith('/profile/') ? (
            <>
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
            </>
          ) : (
            <>
              <li className='navigation-item nav-hover'>
                <Link to={`/profile/${user.id}/recap`}>RECAP</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to={`/profile/${user.id}/recap`}>ORDERS</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to={`/profile/${user.id}/wishlist`}>WISHLIST</Link>
              </li>
              <li className='navigation-item nav-hover'>
                <Link to={`/profile/${user.id}/recap`}>PERSONAL DATA</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
