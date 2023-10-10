import React, { useState } from 'react'
import styles from './Register.module.css';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router'; // to get navigate
import { FallingLines } from  'react-loader-spinner'

export default function Register() {


  let navigate = useNavigate() // to let user to go to (home )
  const [error , seterror] = useState(null)
  const [isLoading , setisLoading] = useState(false)
  
  async function submitRegister(values){ 
    setisLoading(true)
    let {data} = await  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , values)
    .catch((err)=> {
      setisLoading(false)
      seterror(err.response.data.message)
    })
    if(data.message === 'success'){
      setisLoading(false)
      navigate('/login') 
    }
  }


  let validateYup = Yup.object({
    name:Yup.string().min(3 , 'name minlength is 3').max(10 , 'name maxlength is 10').required('name is requierd'),
    email: Yup.string().email('email is invalid').required('email is requierd'),
    phone: Yup.string().matches().required('phone is reuired'),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/ ,'password start with uppercase').required('password is requierd'),
    rePassword:Yup.string().oneOf([Yup.ref("password")], 'password and repassword dont match').required('rePassword is requierd')
  })


  // function validate(values){
  //   let errors = {};
  //   if(!values.name){
  //     errors.name = "name is required";
  //   }
  //   else if(values.name.length <3){
  //     errors.name = "name minlength is 3";
  //   }
  //   else if(values.name.length > 10){
  //     errors.name = "name maxlength is 10";
  //   }

  //   if(!values.email){
  //     errors.email = "email is required";
  //   }
  //   else if(values.email.length <3){
  //     errors.email = "email minlength is 3";
  //   }
  //   else if(values.email.length > 10){
  //     errors.email = "email maxlength is 10";
  //   }

  //   if(!values.phone){
  //     errors.phone = "phone is required";
  //   }

  //   return errors
  // }

  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },
    validationSchema:validateYup
    ,
    onSubmit:submitRegister // دى لما بتشغل الفانكشن دى بتبعت معاها لوحدها كده الفاليوز البروح استقبلها ف الفنكشن
  })


  return <>
    <div className='w-75 mx-auto py-4'>
      {error !== null? <div className="alert alert-danger">{error}</div> : ""}
      <h2>Register Now</h2>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name :</label>
        {/* اديتها نيم عشان تعرف ان دى تبع النيم ال ف الانشيال فاليو بتاعه الفورمك */}
        <input value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange}  className='form-control mb-2' type="text" id='name' name='name' />
        {formik.errors.name && formik.touched.name?<div className="alert mt-2 p-2 alert-danger">{formik.errors.name}</div> : ""}

        <label htmlFor="email">email :</label>
        <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}  className='form-control mb-2' type="email" id='email' name='email' />
        {formik.errors.email && formik.touched.email?<div className="alert mt-2 p-2 alert-danger">{formik.errors.email}</div> : ""}

        <label htmlFor="phone">phone :</label>
        <input value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange}  className='form-control mb-2' type="tel" id='phone' name='phone' />
        {formik.errors.phone && formik.touched.phone?<div className="alert mt-2 p-2 alert-danger">{formik.errors.phone}</div> : ""}

        <label htmlFor="password">password :</label>
        <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange}  className='form-control mb-2' type="text" id='password' name='password' />
        {formik.errors.password && formik.touched.password?<div className="alert mt-2 p-2 alert-danger">{formik.errors.password}</div> : ""}

        <label htmlFor="rePassword">rePassword :</label>
        <input value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange}  className='form-control mb-2' type="text" id='rePassword' name='rePassword' />
        {formik.errors.rePassword && formik.touched.rePassword?<div className="alert mt-2 p-2 alert-danger">{formik.errors.rePassword}</div> : ""}

        {isLoading? < FallingLines
  color="#4fa94d"
  width="70"
  visible={true}
  ariaLabel='falling-lines-loading'
/> :<button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white mt-2'>Register</button>}

      </form>
    </div> 
  </>
}


