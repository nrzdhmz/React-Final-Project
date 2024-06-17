import React, { useState } from 'react';
import { useAuth } from '../../context/authContext'; 

const RegisterForm = ({ handleToggleView, onClose }) => {
  const { register } = useAuth(); 
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        title,
        firstName,
        lastName,
        email,
        password,
      };
      await register(userData); 
      onClose();
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  return (
    <>
      <h2 className='box-margin'>CREATE ACCOUNT</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="title-form input-container">
          <label htmlFor="register-title">TITLE*</label>
          <select 
            id="register-title" 
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          >
            <option value="" disabled>-</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
        </div>
        <br />
        <div className="name-form input-container">
          <label htmlFor="register-name">FIRST NAME</label>
          <input 
            type="text" 
            id="register-name" 
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="lastname-form input-container">
          <label htmlFor="register-lastname">LAST NAME</label>
          <input 
            type="text"
            id="register-lastname" 
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="email-form input-container">
          <label htmlFor="register-email">EMAIL*</label>
          <input 
            type="email" 
            id="register-email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="password-form input-container">
          <label htmlFor="register-password">PASSWORD*</label>
          <input 
            type="password" 
            id='register-password' 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="account-info">
          <h2>CONSENT TO PERSONAL DATA PROCESSING</h2>
          <ul>
            <li className='check'>
              <input type="checkbox"  id='checkbox1'/>
              <label htmlFor="checkbox1">I agree to the collection and use of my personal data for marketing purposes</label>
            </li>
            <li className='check'>
              <input type="checkbox"  id='checkbox2'/>
              <label htmlFor="checkbox2">I agree to the collection, disclosure or processing of my personal data for profiling purposes</label>
            </li>
          </ul>
        </div>
        <button className='auth right' type="submit">
          Create Account
        </button>
      </form>
      <a className='haveit' onClick={handleToggleView}>
        I Already Have It
      </a>
    </>
  );
};

export default RegisterForm;
