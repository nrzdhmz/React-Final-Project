import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';  
import Womenimg from "../../assets/images/womenHero.jpeg";
import Menimg from "../../assets/images/menHero.jpeg";
import HoverMen from "../../assets/images/menhover.webp";
import HoverWomen from "../../assets/images/womenhover.webp";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useAuth } from '../../context/authContext';

const genderDetails = {
  women: {
    image: Womenimg,
    hoverImage: HoverWomen,
    text: 'WOMEN',
    description: "Dolce&Gabbana's most iconic print returns with a captivating chromatic interplay, illuminating garments and accessories with its bold and feminine allure."
  },
  men: {
    image: Menimg,
    hoverImage: HoverMen,
    text: 'MEN',
    description: "The iconic pattern graces garments with clean, sport-inspired lines, such as linen shirts, trousers, Bermuda shorts, and t-shirts. Each piece in the collection is crafted to honor the blend of tradition and modernity, paying tribute to Italian craftsmanship."
  }
};

const Hero = ({ gender }) => {  
  const { image, hoverImage, text, description } = genderDetails[gender];
  const { data, loading, error } = useFetch('http://localhost:5000/api/product');
  const { likeProduct,setLikeAttempt, removeLikeProduct, getlikeProducts, user } = useAuth();

  const [visibleProducts, setVisibleProducts] = useState(8);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [likedProductIds, setLikedProductIds] = useState([]);

  useEffect(() => {
    const fetchLikedProducts = async () => {
      if (user && user.id) {
        try {
          const likedProductsData = await getlikeProducts();
          const likedIds = likedProductsData.map(product => product.id);
          setLikedProductIds(likedIds);
        } catch (error) {
          console.error('Error fetching liked products:', error);
        }
      }
    };

    fetchLikedProducts();
  }, [user, getlikeProducts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products!</p>;

  const products = data.filter(product => product.category.toLowerCase() === gender);

  const showMoreProducts = () => {
    setVisibleProducts(prev => prev + 4);
  };

  const handleMouseEnter = (index) => {
    setHoveredProduct(index);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleLike = async (productId) => {
    try {
      if (!user || !user.id) {
        setLikeAttempt(true);
        return;
      }

      if (likedProductIds.includes(productId)) {
        await removeLikeProduct(productId);
        setLikedProductIds(prev => prev.filter(id => id !== productId));
      } else {
        await likeProduct(productId);
        setLikedProductIds(prev => [...prev, productId]);
      }
    } catch (error) {
      console.error('Error toggling like', error);
    }
  };

  return (
    <>
      <section className='gender-hero'>
        <h1>MAIOLICA COLLECTION</h1>
        <img src={image} alt={text} />
        <p>{description}</p>
      </section>
      <section className="gender-shop">
        <div className="cards">
          {products.slice(0, visibleProducts).map((product, index) => (
            <div 
              className="card" 
              key={index} 
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-img">
                <img 
                  src={`http://localhost:5000/static/${product.imageUrl}`} 
                  alt={product.name} 
                />
                {index === hoveredProduct && (
                  <img 
                    className="hover-img" 
                    src={hoverImage} 
                    alt={`${product.name} - Hover`} 
                  />
                )}
              </div>
              <p className='card-p'>
                {product.name}
              </p>
              <p className='card-price'>
                ${product.price}
              </p>
              {likedProductIds.includes(product.id) ? (
                <IoMdHeart className='heart' onClick={() => handleLike(product.id)} />
              ) : (
                <IoMdHeartEmpty className='heart' onClick={() => handleLike(product.id)} />
              )}
            </div>
          ))}
        </div>
        <div className="load">
            <p className='first'>SHOW {Math.min(visibleProducts, products.length)} OF {products.length} PRODUCTS</p>
            <div className="progress-bar">
              <div className="filled" style={{ width: `${(visibleProducts / products.length) * 100}%` }}></div>
            </div>
            {visibleProducts < products.length && 
              <button className='auth' onClick={showMoreProducts}>
                LOAD MORE
              </button>
            }
        </div>
      </section>
    </>
  );
}

export default Hero;
