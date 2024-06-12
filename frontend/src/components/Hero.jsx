import React from 'react';
// IMAGES
import MenImg from "../assets/images/boy.webp";
import WomenImg from "../assets/images/girl.webp";
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroData = [
    { 
      imgSrc: WomenImg,
      altText: "Women",
      title: "WOMEN'S MAIOLICA COLLECTION FW24",
      description: "A stylish tribute to the art of majolica in the new Lemon Yellow shade.",
      linkText: "SHOP THE COLLECTION",
    },
    {
      imgSrc: MenImg,
      altText: "Men",
      title: "WOMEN'S MAIOLICA COLLECTION FW24",
      description: "A stylish tribute to the art of majolica in the new Lemon Yellow shade.",
      linkText: "SHOP THE COLLECTION",
    },
  ];

  return (
    <section className='hero-section'>
      {heroData.map((item, index) => (
        <div className="bg-container" key={index}>
          <img src={item.imgSrc} alt={item.altText} />
          <div className="hero-info">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>
              <Link to="/">
                {item.linkText}
              </Link>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
