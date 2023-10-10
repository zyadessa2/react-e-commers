import React from 'react'
import style from './MainSlider.module.css'
import Slider from 'react-slick'
import Slide1 from '../../Accets/images/slider-image-1.jpeg'
import Slide2 from '../../Accets/images/slider-image-2.jpeg'
import Slide3 from '../../Accets/images/slider-image-3.jpeg'

export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return <>
  <div className="row gx-0 mb-3">
    <div className="col-md-10">
    <Slider {...settings}>
        <img src={Slide1} height={400} className='w-100' alt="" />
        <img src={Slide2} height={400} className='w-100' alt="" />
        <img src={Slide3} height={400} className='w-100' alt="" />
    </Slider>
    </div>
    <div className="col-md-2">
      <img src={Slide3} height={200}  className='w-100' alt="" />
      <img src={Slide2} height={200}  className='w-100' alt="" />
    </div>
  </div>
  </>
}
