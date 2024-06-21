import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = ({ logoSrc, logoHeight, isTop, location }) => {
  return (
    <div className="header-logo">
      <Link to="/">
        <img className={`logo ${location.pathname !== '/' ? 'logo-women' : (isTop ? 'logo-white' : 'logo-dg')}`} src={logoSrc} alt="Logo" style={{ height: `${logoHeight}px` }} />
      </Link>
    </div>
  );
};

export default HeaderLogo;
