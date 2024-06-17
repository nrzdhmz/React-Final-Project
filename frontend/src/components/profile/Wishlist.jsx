import React, { useEffect, useState } from 'react';
import { CgClose } from "react-icons/cg";
import { IoMdHeart } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { useAuth } from '../../context/authContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { getlikeProducts, removeLikeProduct, addToCart } = useAuth(); 
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
      await addToCart(product);
      await removeLikeProduct(product.id);
      setLikedProducts(await getlikeProducts());
    } catch (error) {
      console.error('Error processing the product:', error);
    }
  };

  return (
    <div className={`wishlist`}>
      <h2>
        Wishlist
        <sup>11</sup>
      </h2>
      <div className="cart-products">
        {likedProducts.map(product => (
          <div key={product.id} className="cart-product">
            <div className="img">
              <IoMdHeart
                className='trash'
                onClick={() => handleAddToCartAndRemove(product)}
              />
              <img src={`http://localhost:5000/static/${product.imageUrl}`} alt={product.name} />
            </div>
            <div className="cart-info">
              <p className='name'>{product.name}</p>
              <p className='price'>${product.price}</p>
              <div className='size'>
              44 - PRINT
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

export default Wishlist;
