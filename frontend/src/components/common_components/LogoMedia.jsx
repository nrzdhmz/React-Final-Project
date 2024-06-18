import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LogoMedia = ({ isTop }) => {
  const location = useLocation();
  let logoClass;

  if (location.pathname !== '/') {
    logoClass = 'LogoB';
  } else {
    if (isTop) {
      logoClass = 'LogoW';
    } else {
      logoClass = 'LogoB';
    }
  }

  return (
    <div className={`LogoMedia ${logoClass}`}>
      <Link to='/'></Link>
    </div>
  );
};

export default LogoMedia;
