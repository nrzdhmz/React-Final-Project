import React from 'react';

const RegisterForm = ({ handleToggleView }) => {
  return (
    <>
      <h2 className='box-margin'>CREATE ACCOUNT</h2>
      <div className="login-form">
        <div className="title-form input-container">
          <label htmlFor="register-title">TITLE*</label>
          <select id="register-title" name="title">
            <option value="" disabled selected>-</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
          </select>
        </div>
        <br />
        <div className="name-form input-container">
          <label htmlFor="register-name">FIRST NAME</label>
          <input type="text" id="register-name" placeholder="First Name" />
        </div>
        <div className="lastname-form input-container">
          <label htmlFor="register-lastname">LAST NAME</label>
          <input type="text" id="register-lastname" placeholder="Last Name" />
        </div>
        <div className="email-form input-container">
          <label htmlFor="register-email">EMAIL*</label>
          <input type="email" id="register-email" placeholder="Email" />
        </div>
        <div className="password-form input-container">
          <label htmlFor="register-password">PASSWORD*</label>
          <input type="password" id='register-password' placeholder='Password'/>
        </div>
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
      <button className='auth right'>
        Create Account
      </button>
      <a className='haveit' onClick={handleToggleView}>
        I Already Have It
      </a>
    </>
  );
};

export default RegisterForm;
