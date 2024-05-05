import React, { useState } from 'react'
import './Header.css'
import img_logo from './images/logo.svg'
import img_cart from './images/icon-cart.svg'
import img_avatar from './images/image-avatar.png'
import img_menu from './images/icon-menu.svg'
import img_close from './images/icon-close.svg'

function Header({setCartVisible}) {
  const [mobileMenuActive,setMobileMenuActive] = useState(false)

  function handleCartClick(){
      setCartVisible(prev=>!prev)
  }
  return (
    <header>
      <img className='img_menu_mobile'
            src={mobileMenuActive ? img_close : img_menu}
            onClick={()=>setMobileMenuActive(prev=>!prev)}
            alt={mobileMenuActive ? "close menu" : "show menu"}/>
      <img className='img_logo' src={img_logo} alt="logo"/>
      <ul className={mobileMenuActive ? "" :"hidelistmenu"}>
      <li><a className='active' href="index.html">Collections</a></li>
      <li><a href="index.html">Men</a></li>
      <li><a href="index.html">Women</a></li>
      <li><a href="index.html">About</a></li>
      <li><a href="index.html">Contact</a></li>
      </ul>
      <img
        className='img_cart'
        src={img_cart}
        onClick={handleCartClick}
        alt="cart"
      />
      <img className='img_avatar' src={img_avatar} alt="cart"/>

    </header>
  )
}

export default Header