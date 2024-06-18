import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [likeAttempt, setLikeAttempt] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cart', { withCredentials: true });
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleAddToCart = async (id) => {
    try {
      await axios.post('http://localhost:5000/api/cart', { productId: id }, { withCredentials: true });
      fetchCartItems();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleDecreaseQuantity = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/cart/${id}`, {}, { withCredentials: true });
      fetchCartItems();
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  };

  const handleRemoveFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${id}`, { withCredentials: true });
      fetchCartItems();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', { email, password }, { withCredentials: true });
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/signup', userData);
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  const likeProduct = async (productId) => {
    try {
      await axios.put(`http://localhost:5000/api/product/like/${productId}`, {}, { withCredentials: true });
      setShowCart(true);
    } catch (error) {
      console.log(error);
    }
  };

  const removeLikeProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/product/like/${productId}`, { withCredentials: true });
    } catch (error) {
      console.log(error);
    }
  };

  const getlikeProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product/like', { withCredentials: true });
      return response.data;
    } catch (error) {
      console.log('Error getting products:', error);
      return [];
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart', product, { withCredentials: true });
      fetchCartItems();
    } catch (error) {
      console.log('Error adding to cart:', error);
    }
  };
  

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const authData = {
    user,
    setUser,
    login,
    register,
    likeProduct,
    removeLikeProduct,
    getlikeProducts,
    addToCart,
    likeAttempt,
    setLikeAttempt,
    showCart,
    setShowCart,
    logout,
    cartItems,
    fetchCartItems,
    handleAddToCart,
    handleDecreaseQuantity,
    handleRemoveFromCart,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};
