import React from 'react'
import './AfficheText.css'
import img_minus from './images/icon-minus.svg'
import img_plus from './images/icon-plus.svg'
import img_cart from './images/icon-cart2.svg'

function AfficheText({compteur,setCompteur}) {
  return (
    <section className='section-text'>
      <p className='sneaker_company'>Sneaker Company</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className='description'>These low-profile sneakers are your perfect casual wear companion. Featuring a
      durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

      <p className='prix'>$125.00 <span>50%</span></p>
      <p className='prix-original'>$250.00</p>
      <div className='box'>
        <div className='compteur'>
          <img className='img_minus' onClick={()=>{setCompteur(prev=> prev > 0 ? prev-1 : prev)}} src={img_minus} alt="minus" />
          <span>{compteur}</span>
          <img className='img_plus' onClick={()=>{setCompteur(prev=> prev <20 ? prev+1 : prev)}} src={img_plus} alt="plus" />
        </div>
        <div className='btn-add-to-cart'>
          <img src={img_cart} alt="cart" />
          Add to cart
        </div>
      </div>
    </section>
  )
}

export default AfficheText