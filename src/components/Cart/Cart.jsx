import React, { useContext, useState, useNav } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'
import './cart.css';


const Cart = () => {
  const {myCart, total, setTotal, addToCart} = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckout = () => {
    setTotal(0);
    addToCart([]);
  }
  const handleHome = () => {
    navigate('/');
  }

  return (
    <section className="cart-container">
      <div className="cart-header">Checkout: </div>
      <div className="cart-items">
        {
          myCart.slice(1).map((item) => {
            return (
              <div className="cart-item" key={item.id}>
                <img src={item.imageUrl} className="cart-item-img" alt="" />
                {item.name} : {item.price} $
              </div>
            )
          })
        }
        <div className="cart-total">TOTAL : {total} $</div>
        <button className="cart-checkout" onClick={handleCheckout}>DONE</button>
        <button className="cart-gohome" onClick={handleHome}>Go Home</button>
      </div>
    </section>
  )
}

export default Cart