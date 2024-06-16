import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', { email, password });
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/signup', userData);
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  const likeProduct = async (productId) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/product/like/${productId}`,{ withCredentials: true }       );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const authData = {
    user,
    login,
    register,
    likeProduct,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};
