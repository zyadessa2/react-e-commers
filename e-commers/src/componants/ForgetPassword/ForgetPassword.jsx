import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function ForgetPassword() {

  let navigate = useNavigate()
  const [email , setemail] = useState('enter email')
  async function Forgetpass(email){
  let response =  await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords` ,{
      email:email
    })
    .then((res)=>res)
    .catch((err)=>err)
  console.log(response.data.statusMsg);
  
  if(response.data.statusMsg === 'success'){
    navigate('/verifycode')
  }
  } 
  


  return <>
  <div className="container mt-5">
    <h3 className='mb-3'>Please Enter Your email :</h3>
    <input type="email"  onChange={(e)=>setemail(e.target.value)} placeholder='Email' className=' mb-4 p-3 form-control'/>
    <button  className='btn btn-outline-success p-2' onClick={()=>Forgetpass(email)}>Verify</button>
  </div>
  </>
}
