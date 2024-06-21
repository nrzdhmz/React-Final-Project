import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBusiness = () => {
  return (
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
  </div>  )
}

export default HeaderBusiness