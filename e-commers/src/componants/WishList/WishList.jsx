import React, { useContext, useEffect, useState } from 'react'
import style from './WishList.module.css'
import { CartContext } from '../../Context/CartContext'
import { useQuery } from 'react-query'
import axios from 'axios'
import { CirclesWithBar } from 'react-loader-spinner'
import toast from 'react-hot-toast'

export default function WishList() {
  const [wishitem , setwishitem] = useState()
  const [isloading , setloading] = useState(true)

  let {headers, addTocart ,getWishlist , removeWishItem} = useContext(CartContext)


  async function getwhishItem(){
    let {data} = await getWishlist()
    setwishitem(data)
    setloading(false)
  }
  async function removeItemwish(id){
    let {data} = await removeWishItem(id)
    window.location.reload();
    console.log(data);
    setwishitem(data)
  }

  async function AddCart(id){
    let {data} = await addTocart(id)
    if(data.status === 'success'){
      toast.success(data.message , {
        duration: 1000,
        position: 'top-center',
      })
    }
  }

  useEffect(()=>{
    getwhishItem()
  },[])



  return <>
    {isloading?<div className='w-100 py-5 d-flex justify-content-center'> 
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
  </div>:<div className='mt-5 bg-main-light p-4'>
      <h2 className='mb-2'>My Wish List:</h2>
      {wishitem?.data.map((product)=>
          <div key={product.id} className='row py-3'>
            <div className="col-md-3">
              <img src={product.imageCover} className='w-100' alt="" />
            </div>
            <div className="col-md-9 d-flex align-items-center justify-content-between">
              <div >
                <h3 className='h6 fw-bold'>{product.title}</h3>
                <h3 className='h6 text-main '>{product.price} EGP</h3>
                <button onClick={()=>removeItemwish(product._id)} className='btn p-0'> <i className='fas fa-trash-can text-main'></i> Remove</button>
              </div>
              <button onClick={()=>AddCart(product.id)} className='btn bg-main text-white  btn-sm'>Add To Cart</button>
            </div>
          </div>
        )}
    </div>}
  </>
}
