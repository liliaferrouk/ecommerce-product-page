import React from 'react'
import './Header.css'
import img_logo from './images/logo.svg'
import img_cart from './images/icon-cart.svg'
import img_avatar from './images/image-avatar.png'

function Header() {
  return (
    <header>
      <img className='img_logo' src={img_logo} alt="logo"/>
      <ul>
      <li><a href="index.html">Collections</a></li>
      <li><a href="index.html">Men</a></li>
      <li><a href="index.html">Women</a></li>
      <li><a href="index.html">About</a></li>
      <li><a href="index.html">Contact</a></li>
      </ul>
      <img className='img_cart' src={img_cart} alt="cart"/>
      <img className='img_avatar' src={img_avatar} alt="cart"/>

    </header>
  )
}

export default Header