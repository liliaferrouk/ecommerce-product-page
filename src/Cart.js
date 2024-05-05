import React from 'react'
import './Cart.css'
import img_1 from './images/image-product-1.jpg'
import img_delete from './images/icon-delete.svg'

function Cart({setCartVisible,nbItems,setNbItems}) {
  return (
    <div className='cart'>
      <p className='cart-p'>Cart</p>
      <div className="cart-elements">
        {
          nbItems===0
          ?
          <p className='empty-cart-p'>Your cart is empty.</p>
          :
          <>
          <div className="cart-produit">
            <img src={img_1} alt="produit" />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>$125.00 x {nbItems} <span>${nbItems*125}.00</span></p>
            </div>
            <img src={img_delete} onClick={()=>setNbItems(0)} alt="delete" />
          </div>
          <div className="btn-checkout" onClick={()=>{setCartVisible(false)}}>
            Checkout
          </div>
          </>
        }

      </div>
    </div>
  )
}

export default Cart