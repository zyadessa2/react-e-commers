import React, { useContext, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
import { UserContext } from '../../Context/UserContext'


export default function Layout() {
  
  let {setUserToken} = useContext(UserContext)

  useEffect(()=>{
    if(localStorage.getItem('userToken') !== null){
      setUserToken(localStorage.getItem('userToken'))
    }
  },[])


  return <>

  <Navbar/>
    <div className="container mt-5 pt-5 mb-4">
      <Outlet></Outlet>
    </div>
  <Footer/>
  </>
}
