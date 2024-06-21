import React from 'react';
import { Link } from 'react-router-dom';
import { collectionData } from '../../data/collectionData';

const Collections = () => {
  return (
    <>
      {collectionData.map((item, index) => (
        <section className='section collection-section' key={index}>
          <h2 className='collection-h2'>{item.title}</h2>
          <img src={item.imgSrc} alt={item.altText} />
          <p>{item.description}</p>
          <div className="button-wrapper">
            {item.linkTexts.map((text, idx) => (
              <button className='button-hero' key={idx}>
                <Link to="/">{text}</Link>
              </button>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default Collections;
