import React, { useEffect } from 'react';
import axios from 'axios';
import { CgClose } from 'react-icons/cg';

const Cart = ({ onClose }) => {
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/product/like`, { withCredentials: true });
        console.log('Cart Items:', response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className='shopcart'>
      <p className="bag">SHOPPING BAG <span></span></p>
      <div className="items">
        
      </div>
      <CgClose className='closed' onClick={onClose} />
    </div>
  );
};

export default Cart;
