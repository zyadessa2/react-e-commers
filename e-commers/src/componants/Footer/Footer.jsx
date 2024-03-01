import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import img1 from '../../Accets/images/slider-image-1.jpeg'
import img2 from '../../Accets/images/slider-image-2.jpeg'
import img3 from '../../Accets/images/slider-image-3.jpeg'
import img4 from '../../Accets/images/blog-img-2.jpeg'
import img5 from '../../Accets/images/blog-img-1.jpeg'
import img6 from '../../Accets/images/slider-image-1.jpeg'

export default function Footer() {

  return <>
    <footer className={style.footer}>
    <div class={style.container}>
        <div class={style.box}>
          <h3>Guzel</h3>
          {/* <ul class={style.social}>
            <li>
              <a href="#" class={style.facebook}>
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" class={style.twitter}>
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" class={style.youtube}>
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul> */}
          <p class={style.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div class={style.box}>
          <ul class={style.links}>
            <li><Link className={`nav-link fw-bold ${style.navhov}` }  to={'/'}>Home</Link></li>
            <li><Link className={`nav-link fw-bold ${style.navhov}` } to={'/products'}>Products</Link></li>
            <li><Link className={`nav-link fw-bold ${style.navhov}` } to={'/categories'}>Categories</Link></li>
            <li><Link className={`nav-link fw-bold ${style.navhov}` } to={'/brands'}>Brands</Link></li>
            {/* <li><Link className={`nav-link fw-bold ${style.navhov}` } to={'/wishlist'}>Wish list</Link></li> */}
            {/* <li><Link className={`nav-link fw-bold ${style.navhov}` } to={'/cart'}>Cart</Link></li> */}
          </ul>
        </div>
        <div class={style.box}>
          {/* <div class={style.line}>
            <i class="fas fa-map-marker-alt fa-fw"></i>
            <div class={style.info}>Egypt, Giza, Inside The Sphinx, Room Number 220</div>
          </div> */}
          <div class={style.line}>
            <i class="far fa-clock fa-fw"></i>
            <div class={style.info}>Business Hours: From 10:00 To 18:00</div>
          </div>
          <div class={style.line}>
            <i class="fas fa-phone-volume fa-fw"></i>
            <div class={style.info}>
              <span>+201066958945</span>
              {/* <span>+20198765432</span> */}
            </div>
          </div>
        </div>
        <div class={style.footerGallery}>
          <img decoding="async" src={img1} alt="" />
          <img decoding="async" src={img2}alt="" />
          <img decoding="async" src={img3} alt="" />
          <img decoding="async" src={img4} alt="" />
          <img decoding="async" src={img5} alt="" />
          <img decoding="async" src={img6} alt="" />
        </div>
      </div>
      <p class={style.copyright}>Made With &lt;3 By Ziad</p>
    </footer>
    
  </>
}
