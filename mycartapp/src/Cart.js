import React, { useState } from 'react';
import './cart.css';

function Cart({ items }) {
  const [cartItems, setCartItems] = useState([]);

  useState(() => {
    setCartItems(items);
  }, [items]);

  const handleCheckout = () => {
    setCartItems([]);
    alert('Thank you for your purchase!');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">No items in the cart.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li className="cart-item" key={index}>
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
