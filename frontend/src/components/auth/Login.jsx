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
    onClose();
  };

  return (
    <div className="login">
      {isLogin ? (
        <LoginForm handleToggleView={handleToggleView} />
      ) : (
        <RegisterForm handleToggleView={handleToggleView} />
      )}
      <CgClose className='close' onClick={handleClose} />
    </div>
  );
};

export default Login;
