import React from 'react'
import style from './CategorySlider.module.css'
import Slider from 'react-slick'
import axios from 'axios';
import { useQuery } from 'react-query';

export default function CategorySlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  function getCategores(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

 let {data} = useQuery('category' , getCategores)
console.log(data?.data.data);

  return <>
  
  <h2 className='h4 m-auto fw-bold main-col'>shop popular Category</h2>
 
  <div className='my-2'>

      <Slider {...settings}>
        {data?.data.data.map((categorie)=><img key={categorie.id} height={200} src={categorie.image} alt={categorie.name} className='w-100'/>)}
      </Slider>

    
  </div>
  
  </>
}
