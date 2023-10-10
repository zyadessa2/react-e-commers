import React from 'react'
import style from './Categories.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { CirclesWithBar } from 'react-loader-spinner'

export default function Categories() {

  function getCategory(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  let {data , isLoading} = useQuery('getCategory' , getCategory);


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
  </div>:<div className='row mt-5'>
    {data?.data.data.map((product)=>(
      <div key={product._id} className=" curser-pointer col-md-3 border-black rounded-6">
        <div className="product bg-light m-1 w-100 h-75  overflow-hidden">
          <img className='w-100 h-75' src={product.image} alt={product.name} />
          <h5 className='text-main fw-bolder fs-3 text-center mt-3'>{product.name}</h5>
        </div>
      </div>
    ))}
    </div>}
  </>
}
