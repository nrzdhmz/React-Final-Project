import React from 'react';
import Footer from '../components/common_components/Footer';
import Filter from '../components/common_components/Filter';
import Hero from '../components/genderEqualPage/Hero';

const GenderPage = ({ gender }) => {
  return (
    <>
      <Filter/>
      <main>
        <Hero gender={gender} />
      </main>
      <Footer/>
    </>
  )
}

export default GenderPage;
