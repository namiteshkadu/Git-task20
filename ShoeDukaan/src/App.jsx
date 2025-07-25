import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ShoeCard from './Components/ShoeCard';
import Cart from './components/Cart';
import shoesData from './data';
import './index.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (shoe) => {
    const exist = cartItems.find((item) => item.id === shoe.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === shoe.id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...shoe, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, action) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + (action === 'inc' ? 1 : -1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="shoes-section">
          {shoesData.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} addToCart={addToCart} />
          ))}
        </div>
        <Cart cartItems={cartItems} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
}

export default App;
