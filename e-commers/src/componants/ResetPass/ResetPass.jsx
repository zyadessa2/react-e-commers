import axios from 'axios'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router';

export default function ResetPass() {

  let navigate = useNavigate()
  const [email , setemail] = useState('')
  const [newPassword , setnewPassword] = useState('')
  let {setUserToken} = useContext(UserContext)

  async function resetpass(email , newPassword){
    let response =  await axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword` ,{
        email:email,
        newPassword:newPassword
      })
      .then((res)=>res)
      .catch((err)=>err)

      console.log(response);
      // if(response.response.data.statusMsg == "fail"){
      //   alert(response.response.data.message)
      // }
        localStorage.setItem('userToken' , response.data.token)
        setUserToken(response.data.token)
        navigate('/') 
    
    // localStorage.setItem('userToken' , response.data.token)
    // setUserToken(response.data.token)
    // navigate('/') 
  } 

  return <>
    <div className="container mt-5">
      <h3 className='mb-3'>reset your account password</h3>
      <input type="email"  onChange={(e)=>setemail(e.target.value)} placeholder='Email' className=' mb-4 p-3 form-control'/>
      <input type="text"  onChange={(e)=>setnewPassword(e.target.value)} placeholder='password' className=' mb-4 p-3 form-control'/>
      <button onClick={()=>resetpass(email , newPassword)} className='btn btn-outline-success'>Reset Password</button>
    </div>
  </>
}
