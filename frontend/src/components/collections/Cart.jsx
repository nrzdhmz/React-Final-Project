import React, { useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { useAuth } from '../../context/authContext'; 

const Cart = ({ onClose }) => {
  const {
    cartItems,
    fetchCartItems,
    handleAddToCart,
    handleDecreaseQuantity,
    handleRemoveFromCart,
  } = useAuth();

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className='shopcart'>
      <p className="bag">SHOPPING BAG <sup>{cartItems.length}</sup></p>
      <div className="items">
        {cartItems.slice().reverse().map(item => (
          <div key={item.id} className="cart-item">
            <img src={`http://localhost:5000/static/${item.imageUrl}`} alt={item.name} />
            <div className="item-details">
              <div className="top">
                <div className="name">
                  <p className='collection'>NEW COLLECTION</p>
                  <p className='title'>{item.name}</p>
                </div>
                <button className="remove" onClick={() => handleRemoveFromCart(item.id)}>
                  <p>Remove</p>
                </button>
              </div>
              <div className="default">
                <div className="color">Color: Print</div>
                <div className="color">Size: 36</div>
              </div>
              <div className="bottom">
                  <div>
                    <div onClick={() => handleDecreaseQuantity(item.id)}><LuMinus /></div>
                    {item.count}
                    <div onClick={() => handleAddToCart(item.id)}><LuPlus /></div>
                  </div>
                <div>${item.count * item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CgClose className='closed' onClick={onClose} />
    </div>
  );
};

export default Cart;
