import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Accets/images/freshcart-logo.svg'
import { UserContext } from '../../Context/UserContext'
import style from '../Navbar/Navbar.module.css'

export default function Navbar() {


let navigate = useNavigate()
let {userToken, setUserToken} = useContext(UserContext)

function Logout(){
  localStorage.removeItem('userToken');
  setUserToken(null);
  navigate('/login')
}


  return <>
  <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <Link className="navbar-brand" to='/'>
      <h2 className={` ${style.logo}`}>Guzel</h2>
      {/* <img src={logo} alt="fresh market logo" /> */}
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        
        {userToken !== null ? <>
          <li className="nav-item">
          <Link className={`nav-link fw-bold ${style.navhov}` }  to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fw-bold ${style.navhov}` } to={'/products'}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fw-bold ${style.navhov}` } to={'/categories'}>Categories</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fw-bold ${style.navhov}` } to={'/brands'}>Brands</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fw-bold ${style.navhov}` } to={'/wishlist'}>Wish list</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link fw-bold ${style.navhov}` } to={'/cart'}>Cart</Link>
        </li>
        </> : "" }
        
        
        
      </ul>
      <ul className="navbar-nav ms-auto">
      <li className={`nav-item d-flex fs-4 ${style.sochover} align-items-center`}>
        <a className={style.sochover} href="https://www.facebook.com/zezo.helmy.52012/" target='_blank'><i className='fab fa-facebook mx-2'></i></a>
          <a className={style.sochover} href="https://github.com/zyadessa2" target='_blank'><i className='fab fa-github mx-2'></i></a>
          <a className={style.sochover} href="https://www.instagram.com/zyad.helmy/" target='_blank'><i className='fab fa-instagram mx-2'></i></a>
        </li>
        {userToken !== null ? <>
          <li className="nav-item">
          <span className={`nav-link cursor-pointer ${style.logout}`} onClick={()=>Logout()}>Logout</span>
          </li>
        </>:<>
        <li class="nav-item">
          <Link className={`nav-link ${style.logout}`} to={'/login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/register'}>Register</Link>
        </li>
        </>}
       
      </ul>
    </div>
  </div>
</nav>
  </>
}
