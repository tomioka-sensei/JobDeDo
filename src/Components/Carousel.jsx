import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/img/carousel3.jpg';
import image2 from '../assets/img/carousel2.jpg';
import image3 from '../assets/img/carousel1.jpg'; 
import '../assets/css/carouselcss.css';
const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false, 
  };

  return (
    <Slider {...settings}>
      <div>
        <img className="carousel-image" src={image1} alt="Legend 1" />
      </div>
      <div>
        <img className="carousel-image" src={image2} alt="Legend 2" />
      </div>
      <div>
        <img className="carousel-image" src={image3} alt="Legend 3" />
      </div>
    </Slider>
  )
}

export default Carousel;
