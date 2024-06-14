import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import FullBg from "../assets/images/fullbg.webp";
import Campaign from '../components/Campaign';
import Carusel from '../components/Carusel';
import Footer from '../components/common_components/Footer';


const Home = () => {
  return (
    <main>
      <Hero/>
      <Collections/>
      <img src={FullBg} alt="Background Image" />
      <Campaign/>
      <Carusel/>
      <Footer/>
    </main>
  );
};

export default Home;
