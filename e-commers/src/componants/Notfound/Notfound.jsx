import React, { useContext, useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router'; // to get navigate
import { CirclesWithBar } from  'react-loader-spinner'
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

const Notfound = () => {
  let {setUserToken} = useContext(UserContext)
  let navigate = useNavigate() // to let user to go to (home )
  const [error , seterror] = useState(null)
  const [isLoading , setisLoading] = useState(false)

  async function Loginsubmit(values){ 
    setisLoading(true)
    let {data} = await  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , values)
    .catch((err)=> {
      setisLoading(false)
      seterror(err.response.data.message)
    })
    if(data.message === 'success'){
      setisLoading(false)
      localStorage.setItem('userToken' , data.token)
      setUserToken(data.token)
      navigate('/') 
    }
  }

  let validateYup = Yup.object({
    email: Yup.string().email('email is invalid').required('email is requierd'),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/ ,'password start with uppercase').required('password is requierd'),
  })


  let formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema:validateYup
    ,
    onSubmit:Loginsubmit // دى لما بتشغل الفانكشن دى بتبعت معاها لوحدها كده الفاليوز البروح استقبلها ف الفنكشن
  })


  return <>
    <div className='w-75 mx-auto py-4'>
      {error !== null? <div className="alert alert-danger">{error}</div> : ""}
      <h2>Login Now</h2>

      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="email">email :</label>
        <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}  className='form-control mb-2' type="email" id='email' name='email' />
        {formik.errors.email && formik.touched.email?<div className="alert mt-2 p-2 alert-danger">{formik.errors.email}</div> : ""}


        <label htmlFor="password">password :</label>
        <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange}  className='form-control mb-2' type="text" id='password' name='password' />
        {formik.errors.password && formik.touched.password?<div className="alert mt-2 p-2 alert-danger">{formik.errors.password}</div> : ""}

        {isLoading? <CirclesWithBar
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
:
  <>
  <div className="d-flex align-items-center justify-content-between">
  <div className='d-flex align-items-center'>
        <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white mt-2 mx-2'>Login</button> 
        <Link className='btn ' to={'/register'}>Register Now</Link>
    </div>
    <Link className='btn ' to={'/forgetpassword'}>Forget Your password ?</Link>
  </div>
  </> 
}

      </form>
    </div> 
  </>
}

Notfound.propTypes = {};

Notfound.defaultProps = {};

export default Notfound;
