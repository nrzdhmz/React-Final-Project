// Login.js
import React from 'react';
import { CgClose } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Login = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="login">
      <h2>LOGIN</h2>
      <div className="login-form">
        <div className="email-form input-container">
          <label htmlFor="email">EMAIL*</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="password-form input-container">
          <label htmlFor="password">PASSWORD*</label>
          <input type="password" id='email' placeholder='Password'/>
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
      <div className="accaunt-info">
        <h2>CREATE ACCAUNT</h2>
        <ul>
          <li>Add your favorite items to your wishlist</li>
          <li>Save your contact informations for a faster checkout</li>
          <li>Check your order status</li>
        </ul>
      </div>
      <button className='auth right'>
        Create Accaunt
      </button>
      <CgClose className='close' onClick={handleClose} />
    </div>
  );
};

export default Login;
