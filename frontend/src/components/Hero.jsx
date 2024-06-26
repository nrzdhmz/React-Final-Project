  import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroData } from '../data/HeroData'

const Hero = () => {

  return (
    <section className='hero-section section'>
      {heroData.map((item, index) => (
        <div className={`bg-container ${item.width}`} key={index}>
          <img src={item.imgSrc} alt={item.altText} />
          <div className={`hero-info ${item.mb}`}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="button-wrapper">
              {item.linkTexts.map((text, index) => (
                <button className='button-hero' key={index}>
                  <Link to={`http://localhost:3000${item.link}`}>{text}</Link>
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
