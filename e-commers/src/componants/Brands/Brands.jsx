import React from 'react';
import styles from './Brands.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import { CirclesWithBar } from 'react-loader-spinner';


export default function Brands() {

  function getbrands(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  let {data , isLoading} = useQuery('getbrands' , getbrands) 
  console.log(data?.data.data);

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
  </div>:<div className='row g-4 mt-5'>
    <div className='w-100'>
    <h2 class="main-title ">All Brands</h2>
    </div>
    {/* <h3 className='text-main pb-4 fw-bolder text-center'>All Brands</h3> */}
    {data?.data.data.map((product)=>(
      <div className="col-md-3 text-center p-5 bg-light border">
        <h2 className='fw-bolder fs-1 '>{product.name}</h2>
        <p>{product.name}</p>
      </div>
    ))}
  </div>}
  </>
}

