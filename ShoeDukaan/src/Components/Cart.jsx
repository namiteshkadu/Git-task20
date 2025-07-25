import React from 'react';
import './Cart.css';

function Cart({ cartItems, updateQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h5>{item.name}</h5>
              <p>${item.price}</p>
            </div>
            <div className="qty-btns">
              <button onClick={() => updateQuantity(item.id, 'dec')}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 'inc')}>+</button>
            </div>
          </div>
        ))}
      </div>
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
}

export default Cart;
