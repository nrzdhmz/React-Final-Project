import React from 'react';
import Footer from '../components/common_components/Footer';
import Filter from '../components/common_components/Filter';
import Hero from '../components/genderEqualPage/Hero';
import ShopCart from '../components/genderEqualPage/ShopCart';
import { useAuth } from '../context/authContext';

const GenderPage = ({ gender }) => {
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <Filter />
      <main className='main'>
        <Hero gender={gender} />
      </main>
      { user && (
        <>
          {/* <ShopCart />
          <div className="cover"></div> */}
        </>
      )}
      <Footer />
    </>
  );
};

export default GenderPage;
