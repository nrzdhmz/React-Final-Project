import React from 'react';
import useFetch from '../../hooks/useFetch';  
import Womenimg from "../../assets/images/womenHero.jpeg";
import Menimg from "../../assets/images/menHero.jpeg";
import example from "../../assets/images/women5.webp";

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

  // const { data, loading, error } = useFetch('http://localhost:5000/api/product');

  // console.log('Fetched products:', data);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;  

  return (
    <>
      <section className='gender-hero'>
        <h1>MAIOLICA COLLECTION</h1>
        <img src={image} alt={text} />
        <p>{description}</p>
      </section>
      <section className="gender-shop">
        <div className="cards">
          {[...Array(12)].map((_, index) => (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={example} alt="img" />
              </div>
              <p className='card-p'>
                random ass dress 
              </p>
              <p className='card-price'>
                $1234
              </p>
            </div>
          ))}
        </div>
        <div className="load">
            <p className='first'>SHOW 8 OF 12 PRODUCTS</p>
            <div className="progress-bar">
              <div className="filled" style={{ width: "62.5%" }}></div>
            </div>
            <button className='auth'>
              LOAD MORE
            </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
