import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';


export default function Footer() {

  return <>
    <footer className='text-center text-white  mt-5 bg-black mb-0 pb-0'>
      <div className="container">
        <div className="row p-5">
          <div className="col-md-3 mb-2 ">
          <Link className="nav-link text-white" to={'/'}>Home</Link>
          </div>
          <div className="col-md-3 mb-2">
          <Link className="nav-link text-white" to={'/products'}>Products</Link>
          </div>
          <div className="col-md-3 mb-2">
          <Link className="nav-link text-white" to={'/categories'}>Categories</Link>
          </div>
          <div className="col-md-3 mb-2">
          <Link className="nav-link text-white" to={'/cart'}>Cart</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11 text-center m-auto">
           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            s, alias quaerat? Expedita re
            rum cum minus ad itaque recusandae blanditiis eaque.</p>
          </div>
          <div className="socail-footer pb-1 m-2 cursor-pointer">
            <i className='fab fa-facebook mx-2'></i>
            <i className='fab fa-twitter mx-2'></i>
            <i className='fab fa-instagram mx-2'></i>
            <i className='fab fa-tiktok mx-2'></i>
            <i className='fab fa-youtube mx-2'></i>
          </div>
        </div>
      </div>
      <div className="bottom-footer bg-dark p-2 w-100">
          <p>@2023 copyright ziad essa</p>
      </div>
    </footer>
  </>
}
