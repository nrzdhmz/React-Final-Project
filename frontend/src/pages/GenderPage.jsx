import React, { useEffect } from 'react';
import Footer from '../components/common_components/Footer';
import Filter from '../components/common_components/Filter';
import Hero from '../components/genderEqualPage/Hero';
import ShopCart from '../components/genderEqualPage/ShopCart';
import { useAuth } from '../context/authContext';
import useFetch from '../hooks/useFetch';

const GenderPage = ({ gender }) => {
  const { showCart, setShowCart, likeAttempt } = useAuth();

  const handleCloseCart = () => {
    setShowCart(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showCart]);

  return (
    <>
      <Filter />
      <main className='main'>
        <Hero gender={gender} />
      </main>
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
