import React from 'react'
import './Cart.css'
import img_1 from './images/image-product-1.jpg'
import img_delete from './images/icon-delete.svg'

function Cart({setCartVisible}) {
  return (
    <div className='cart'>
      <p className='cart-p'>Cart</p>
      <div className="cart-elements">
        <div className="cart-produit">
          <img src={img_1} alt="produit" />
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x 3 <span>$375.00</span></p>
          </div>
          <img src={img_delete} alt="delete" />
        </div>
        <div className="btn-checkout" onClick={()=>{setCartVisible(false)}}>
          Checkout
        </div>

      </div>
    </div>
  )
}

export default Cart