import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useAuth } from '../../context/authContext';

const Login = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); 
  const { setLikeAttempt } = useAuth();


  const handleToggleView = () => {
    setIsLogin(!isLogin);
  };

  const handleClose = () => {
    setLikeAttempt(false)
    onClose(); 
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
