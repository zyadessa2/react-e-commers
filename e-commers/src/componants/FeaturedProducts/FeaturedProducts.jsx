import React, { useContext, useEffect, useState } from 'react'
import style from './FeaturedProducts.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { CirclesWithBar } from  'react-loader-spinner'
import link, { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'


export default function FeaturedProducts() {

 let {addTocart,addtowish} = useContext(CartContext)

 async function AddCart(id){
  let {data} = await addTocart(id)
  if(data.status === 'success'){
    toast.success(data.message , {
      duration: 1000,
      position: 'top-center',
    })
  }
 }
 async function Addtowish(id){
  let {data} = await addtowish(id)
  if(data.status === 'success'){
    toast.success(data.message , {
      duration: 1000,
      position: 'top-center',
    })
  }
 }

  function getFeaturedProduct(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let {data , isLoading , isFetching , isError} = useQuery('FeaturedProduct' , getFeaturedProduct ,
  {
    // cacheTime:3000 , // if i want to control in cachetime 
  //  refetchOnMount:,
  // staleTime:30000 , // want it to refetch or no
  // refetchInterval:3000 , // كل 3 ثوانى تروح تجيب ريكويست جديد وتقالنو بالموجود
  // enabled:true, // دى لو هيا ترو هترجعلى البيانات عادى لو فولس مترجعليش البيانات
  } ); 

  // const [FeaturedProduct , setFeaturedProduct] = useState([])
  // async function getFeaturedProduct(){
  //   let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //   setFeaturedProduct(data.data)
    
  // }

  // useEffect(()=>{
  //   getFeaturedProduct()
  // } , [])



  return <>
  
  {isLoading?<div className='w-100 py-5 d-flex justify-content-center'> 
    <CirclesWithBar
    height="70"
    width="70"
    color="#4fa94d"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    outerCircleColor=""
    innerCircleColor=""
    barColor=""
    ariaLabel='circles-with-bar-loading'
  /> 
  </div>:<div className="row mt-5">
      {data?.data.data.map((product)=>( // ? to know if data here
      <div className={` col-md-4 col-sm-6 ${style.team}`}>
      <div class={`row d-flex `}>
        <div class={` ${style.box}`}>
        <div class={style.data}>
          <Link to={`/productdetails/${product.id}`}>
            <img src={product.imageCover} className='cursor-pointer w-100' alt="" />
          </Link>
          {/* <div class={style.social}>
          </div> */}
        </div>
        <div className='d-flex justify-content-between' >
          <div className={style.info}>
            <h3>{product.category.name}</h3>
            <p>{product.title.split(' ').slice(0,2).join(' ')}</p>
            <span>{product.price} EGP</span>
          </div>
          <div className={style.info2}>
            <i onClick={()=>Addtowish(product.id)} className='fas fa-heart bg-red fs-3'></i>
              <span className='d-flex'>
              <i className='fas fa-star ratingColor'></i>
              {product.ratingsAverage}
              </span>
          </div>
        </div>
        <button onClick={()=>AddCart(product.id)} className='btn bg-main text-white w-75 fw-bold ms-5 btn-sm'>Add To Cart</button>
        </div>
      </div>
      </div>
      
        // <div key={product.id} className="col-md-3  g-3 ">
        //   <div>
        //     <div className="product p-2">
        //     <Link to={`/productdetails/${product.id}`}>
        //       <img src={product.imageCover} className='cursor-pointer w-100' alt="" />
        //     </Link>
        //     <h2 className='font-sm text-main fw-bold'>{product.category.name}</h2>
        //     <h2 className='h5 fw-bold '>{product.title.split(' ').slice(0,2).join(' ')}</h2>
        //     <div className='mt-3 d-flex justify-content-between'>
        //       <span>{product.price} EGP</span>
        //       <span>
        //         <i className='fas fa-star rating-color'></i>
        //         {product.ratingsAverage}
        //       </span>
        //       <i onClick={()=>Addtowish(product.id)} className='fas fa-heart fs-3'></i>
        //     </div>
        //     <button onClick={()=>AddCart(product.id)} className='btn bg-main text-white w-100 btn-sm'>Add To Cart</button>
        //     </div>
        //     </div>
        // </div>
      ))}
    </div>}
  
    
  </>
}
