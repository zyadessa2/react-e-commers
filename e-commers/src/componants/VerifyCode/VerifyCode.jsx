import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function VerifyCode() {

  let navigate = useNavigate()
  const [resetCode , setresetCode] = useState('')

  async function ResetCode(resetCode){
  let response =  await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode` ,{
    resetCode:resetCode
    })
    .then((res)=>res)
    .catch((err)=>err)
    console.log(response);
    
      if(response.data.status === 'Success'){
        navigate('/resetpassword')
      }else{
        // if(response.response.data.statusMsg == "fail"){
        //   alert(response.response.data.message)
        // }
        alert('incorrect code')
      }
      
  }

  return <>
  <div className="container mt-5">
    <h3 className='mb-3'>Enter Your Code :</h3>
    <input type="number"  onChange={(e)=>setresetCode(e.target.value)} placeholder='Code' className=' mb-4 p-3 form-control'/>
    <button  onClick={()=>ResetCode(resetCode)} className='btn btn-outline-success p-2'>Verify</button>
  </div>
  </>
}
