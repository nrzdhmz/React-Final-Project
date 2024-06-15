import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = ({ handleToggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', { email, password });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className='box-margin'>LOGIN</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="email-form input-container">
          <label htmlFor="email">EMAIL*</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="password-form input-container">
          <label htmlFor="password">PASSWORD*</label>
          <input 
            type="password" 
            id='password' 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <div className="right">
          <div className="forget">
            <Link>Forgot your password?</Link>
          </div>
          <div className="forget">  
            <label htmlFor="remember">Remember me</label>
            <input type="checkbox" id='remember'/>
          </div>
          <button className='auth right mb70' type="submit">
            Login
          </button>
        </div>
      </form>
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
