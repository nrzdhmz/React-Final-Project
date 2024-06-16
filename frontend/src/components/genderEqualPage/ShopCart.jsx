import React, { useEffect, useState } from 'react';
import { CgClose } from "react-icons/cg";
import { useAuth } from '../../context/authContext'; 

const ShopCart = () => {
  const { showCart, setShowCart, getlikeProducts } = useAuth(); 
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const fetchLikedProducts = async () => {
      try {
        const likedProductsData = await getlikeProducts();
        setLikedProducts(likedProductsData);
      } catch (error) {
        console.error('Error fetching liked products:', error);
      }
    };

    fetchLikedProducts();
  }, [getlikeProducts]);

  const handleCloseCart = () => {
    setShowCart(false); 
  };

  return (
    <div className={`cart ${showCart ? 'open' : 'closed'}`}>
      <div className="cart-header">
        <h2>Liked Products</h2>
        <CgClose className='cart-close' onClick={handleCloseCart} />
      </div>
      <div className="cart-products">
        {likedProducts.map(product => (
          <div key={product.id} className="cart-product">
            <img src={`http://localhost:5000/static/${product.imageUrl}`} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCart;
