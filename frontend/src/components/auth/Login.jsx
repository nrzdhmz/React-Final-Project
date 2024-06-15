import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Login = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); 

  const handleToggleView = () => {
    setIsLogin(!isLogin);
  };

  const handleClose = () => {
    onClose(); // This function will close the modal
  };

  return (
    <div className="login">
      {isLogin ? (
        <LoginForm handleToggleView={handleToggleView} onClose={handleClose} />
      ) : (
        <RegisterForm handleToggleView={handleToggleView} onClose={handleClose} />
      )}
      <CgClose className='close' onClick={handleClose} />
    </div>
  );
};

export default Login;