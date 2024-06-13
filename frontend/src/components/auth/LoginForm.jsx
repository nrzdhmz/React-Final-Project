import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ handleToggleView }) => {
  return (
    <>
      <h2 className='box-margin'>LOGIN</h2>
      <div className="login-form">
        <div className="email-form input-container">
          <label htmlFor="email">EMAIL*</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="password-form input-container">
          <label htmlFor="password">PASSWORD*</label>
          <input type="password" id='password' placeholder='Password'/>
        </div>
      </div>
      <div className="forget">
        <Link>Forgot your password?</Link>
      </div>
      <div className="forget">
        <label htmlFor="remember">Remember me</label>
        <input type="checkbox" id='remember'/>
      </div>
      <button className='auth right mb70'>
        Login
      </button>
      <div className="account-info">
        <h2>CREATE ACCOUNT</h2>
        <ul>
          <li>Add your favorite items to your wishlist</li>
          <li>Save your contact information for a faster checkout</li>
          <li>Check your order status</li>
        </ul>
      </div>
      <button className='auth right' onClick={handleToggleView}>
        Create Account
      </button>
    </>
  );
};

export default LoginForm;
