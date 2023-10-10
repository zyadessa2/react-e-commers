import React, { useContext } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import axios from 'axios'
import Slider from "react-slick";
import {Helmet} from "react-helmet";
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'

export default function ProductDetails() {

  let {addTocart} = useContext(CartContext)

  async function addCart(){
    let {data} = await addTocart(id)
    if(data.status === 'success'){
      toast.success(data.message , {
        duration: 1000,
        position: 'top-center',
      })
    }
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  let {id} = useParams()
  function getProductDetails(id){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  let {isLoading , isError , data} = useQuery('productDetails' ,()=> getProductDetails(id))
  

  return <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>{data?.data.data.title}</title>
  </Helmet>
  {data?.data.data?<div key={data?.data.data.id} className='row py-2 align-items-center'>
    <div className="col-md-4">
    <Slider {...settings}>
      {data?.data.data.images.map((image)=><img src={image} className='w-100'/>)}
    </Slider>
      {/* <img className='w-100' src={data?.data.data.imageCover} alt={data?.data.data.title} /> */}
    </div>
    <div className="col-md-8 ">
      <h2 className='h5 mt-4'>{data?.data.data.title}</h2>
      <p>{data?.data.data.description}</p>
      <h6 className='text-main'>{data?.data.data.Categories?.name}</h6>
      <h6 className='text-main'>price : {data?.data.data.price} EGP</h6>
      <div className="d-flex justify-content-between">
        <span>ratingsQuantity : {data?.data.data.ratingsQuantity}</span>
        <span><i className='fas fa-star rating-color'>{data?.data.data.ratingsAverage}</i></span>
      </div>
      <button onClick={()=> addCart(data?.data.data.id)} className='btn  btn-success text-white mt-2 w-100'>Add To Cart</button>
    </div>
  </div>:''}
  </>
}
