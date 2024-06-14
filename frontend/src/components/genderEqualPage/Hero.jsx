import React from 'react';
import Womenimg from "../../assets/images/womenHero.jpeg";
import Menimg from "../../assets/images/menHero.jpeg";

const genderDetails = {
  women: {
    image: Womenimg,
    text: 'WOMEN',
    description: "Dolce&Gabbana's most iconic print returns with a captivating chromatic interplay, illuminating garments and accessories with its bold and feminine allure."
  },
  men: {
    image: Menimg,
    text: 'MEN',
    description: "The iconic pattern graces garments with clean, sport-inspired lines, such as linen shirts, trousers, Bermuda shorts, and t-shirts. Each piece in the collection is crafted to honor the blend of tradition and modernity, paying tribute to Italian craftsmanship."
  }
};

const Hero = ({ gender }) => {
  const { image, text, description } = genderDetails[gender];

  return (
    <div className='gender-hero'>
      <h1>MAIOLICA COLLECTION</h1>
      <img src={image} alt={text} />
      <p>{description}</p>
    </div>
  )
}

export default Hero;
