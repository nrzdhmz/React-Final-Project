import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import swiperData from '../data/swiperData';

const Carusel = () => {
  return (
    <section className='swiper-section'>
      <h2>WORLD OF DOLCE&GABBANA</h2>
      <Swiper
        loop={true}
        slidesPerView={1.8}
        spaceBetween={-10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {swiperData.map((slide, index) => (
          <SwiperSlide key={index} className='swiper-slide'>
            <div className="swiper-item">
              <div className="swiper-img-wrapper">
                <img src={slide.image} alt={`slide ${index}`} />
              </div>
              <p>{slide.caption}</p>
              <button className='button-hero'>
                <Link to={slide.link}>
                  DISCOVER MORE
                </Link>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carusel;
