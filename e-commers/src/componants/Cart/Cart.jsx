import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { CirclesWithBar } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

export default function Cart() {
  const [cartitems , setcartitems] = useState(null)
  const [loading , setloading] = useState(true)
  let {getCart, updateCart , removeCartItem} = useContext(CartContext)

  async function getCartItem(){
    let {data} = await getCart()
    setcartitems(data)
    setloading(false)
    
  }

  async function removeItem(id){
    let {data} = await removeCartItem(id)
    console.log(data);
    setcartitems(data)
  }

  async function updateCount(id , count){
    let {data} = await updateCart(id , count)
    // console.log(data);
    setcartitems(data)
  }
  
  useEffect(()=>{
    getCartItem()
  },[])

  return <>
  {loading?<div className='w-100 py-5 d-flex justify-content-center'> 
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
  </div>:<div className=" mt-5 bg-main-light p-4">
            {loading?<div>
              <h2 className='main-title '>Shop Cart</h2>
              <h2>Your cart is empty</h2>
            </div>:<div>
                <h2 className='mb-4 main-title '>Shop Cart</h2>
                <h2 className='h5 text-main '>TotalPrice : {cartitems.data.totalCartPrice}</h2>
                <h2 className='h5 text-main '>TotalCart Items : {cartitems.numOfCartItems}</h2>
                  {cartitems.data.products.map((product)=>
                    <div className='row py-3 justify-content-between'>
                      <div className="col-md-3">
                        <img src={product.product.imageCover} className='w-100' alt="" />
                      </div>
                      <div className="col-md-3 mt-3 d-flex justify-content-between">
                        <div >
                          <h3 className='h6 fw-bold'>{product.product.title.split(' ').slice(0,7).join(' ')}</h3>
                          <h3 className='h6 text-main '>{product.price} EGP</h3>
                          <button onClick={()=>removeItem(product.product.id)} className='btn p-0'> <i className='fas fa-trash-can text-main'></i> Remove</button>
                        </div>
                        <div>
                          <button onClick={()=>updateCount(product.product.id , product.count +1)} className='brn-sm btn border me-2'>+</button>
                          <span>{product.count}</span>
                          <button onClick={()=>updateCount(product.product.id , product.count -1)} className='brn-sm btn border me-4 ms-1'>-</button>
                        </div>
                      </div>
                    </div>
                  )}
                <Link to={'/address'} className='btn p-2 bg-main fw-bold m-3 w-25 text-white'>Check Out</Link >
              </div>
            }
    </div>}
  </>
}
