import React, { useContext } from 'react'
import style from './address.module.css'
import {useFormik} from 'formik'
import { CartContext } from '../../Context/CartContext';

export default function Address() {

  let {onlinePayment , cartid} = useContext(CartContext)

  async function handleAddressSubmit(values){
    let response = await onlinePayment(cartid , "http://localhost:3000" ,values)
    console.log(response);
    window.location.href = response?.data.session.url
  }
  let formik = useFormik({
    initialValues:{
      details:'',
      phone:'',
      city:''
    },
    onSubmit: handleAddressSubmit
  })

  return <>
    <div className="container mt-5">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="details">details</label>
        <input value={formik.values.details} onChange={formik.handleChange} type="text" className='form-control mb-2' name='details' id='details' />
        
        <label htmlFor="phone">phone</label>
        <input value={formik.values.phone} onChange={formik.handleChange} type="tel" className='form-control mb-2' name='phone' id='phone' />
        
        <label htmlFor="city">city</label>
        <input value={formik.values.city} onChange={formik.handleChange} type="text" className='form-control mb-2' name='city' id='city' />
      
        <button type='submit' className='mt-3 btn bg-main text-white'>Pay Now</button>
      </form>
    </div>
  </>
}
