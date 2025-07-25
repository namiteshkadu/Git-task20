import React from 'react';
import './ShoeCard.css';

function ShoeCard({ shoe, addToCart }) {
  return (
    <div className="shoe-card">
      <img src={shoe.image} alt={shoe.name} className="shoe-img" />
      <h4>{shoe.name}</h4>
      <p>${shoe.price}</p>
      <button onClick={() => addToCart(shoe)}>Add to Cart</button>
    </div>
  );
}

export default ShoeCard;
