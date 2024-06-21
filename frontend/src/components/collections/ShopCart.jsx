import React, { useEffect, useState } from 'react';
import { CgClose } from "react-icons/cg";
import { FaRegTrashCan } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import { useAuth } from '../../context/authContext';
import { Link } from 'react-router-dom';

const ShopCart = () => {
  const { showCart, setShowCart, getlikeProducts, removeLikeProduct, addToCart } = useAuth(); 
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const fetchLikedProducts = async () => {
      try {
        setLikedProducts(await getlikeProducts());
      } catch (error) {
        console.error('Error fetching liked products:', error);
      }
    };
    fetchLikedProducts();
  }, [getlikeProducts]);

  const handleAddToCartAndRemove = async (product) => {
    try {
      await addToCart({ productId: product.id});
      await removeLikeProduct(product.id);  
      setLikedProducts(await getlikeProducts());
    } catch (error) {
      console.error('Error processing the product:', error);
    }
  };

  return (
    <div className={`cart ${showCart ? 'open' : 'closed'}`}>
      <div className="cart-header">
        <h2>WISHLIST({likedProducts.length})</h2>
        <CgClose className='cart-close' onClick={() => setShowCart(false)} />
      </div>
      <div className="cart-products">
        {likedProducts.map(product => (
          <div key={product.id} className="cart-product">
            <div className="img">
              <FaRegTrashCan
                className='trash'
                onClick={() => handleAddToCartAndRemove(product)}
              />
              <img src={`http://localhost:5000/static/${product.imageUrl}`} alt={product.name} />
            </div>
            <div className="cart-info">
              <p className='head'>NEW COLLECTION</p>
              <p className='name'>{product.name}</p>
              <p className='price'>${product.price}</p>
              <div className='size'>
                <p>Color: Print</p>
                <p>Size: 40</p>
              </div>
              <button className='button' onClick={() => handleAddToCartAndRemove(product)}>
                <AiOutlineShopping className='idk' />
                <Link>Add to cart</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCart;
