import React from 'react';
import Slider from 'react-slick';
import img1 from '../assert/slider/img1.png';
import img2 from '../assert/slider/img2.png';
import img3 from '../assert/slider/img3.png';



const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt="Image 1" />
      </div>
      <div>
        <img src={img2} alt="Image 2" />
      </div>
      <div>
        <img src={img3} alt="Image 3" />
      </div>
    </Slider>
  );
};

export default Carousel;