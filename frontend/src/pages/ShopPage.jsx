import React, { useEffect } from 'react';
import Footer from '../components/ui/Footer';
import Filter from '../components/ui/Filter';
import Hero from '../components/collections/Hero';
import ShopCart from '../components/collections/ShopCart';
import { useAuth } from '../context/authContext';

const ShopPage = ({ gender }) => {
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

export default ShopPage;
