import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">ShoeStore</div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">About Us</a>
      </div>
    </div>
  );
}

export default Navbar;
