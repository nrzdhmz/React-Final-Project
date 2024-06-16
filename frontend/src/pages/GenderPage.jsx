import React, { useEffect } from 'react';
import Footer from '../components/common_components/Footer';
import Filter from '../components/common_components/Filter';
import Hero from '../components/genderEqualPage/Hero';
import ShopCart from '../components/genderEqualPage/ShopCart';
import { useAuth } from '../context/authContext';
import BuyNow from '../components/genderEqualPage/BuyNow';

const GenderPage = ({ gender }) => {
  const { showCart, setShowCart } = useAuth();

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showCart]);

  const handleCloseCart = () => {
    setShowCart(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Filter />
      <main className='main'>
        <Hero gender={gender} />
      </main>
      {/* {showBuy && (
        <>
          <BuyNow />
          <div className="cover" onClick={handleCloseCart}></div>
        </>
      )} */}
      {showCart && (
        <>
          <ShopCart />
          <div className="cover" onClick={handleCloseCart}></div>
        </>
      )}
      <Footer />
    </>
  );
};

export default GenderPage;
