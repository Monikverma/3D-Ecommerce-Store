import React, { useState } from 'react';
import './Navbar.css';
import OIP2 from '../assets/OIP2.jpg';
import { VscAccount } from 'react-icons/vsc';
import { IoCart } from 'react-icons/io5';
import { CiMenuBurger } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { useCart } from './CartContext'; // Importing cart context
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems,  removeItem, getTotal, updateQuantity, clearCart } = useCart();

  // Toggle dropdown menu visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
 
  
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={OIP2} alt="Flipkart Logo" />
      </div>

      <div className="container">
        <input
          type="text"
          name="text"
          className="input"
          placeholder="Search the product here"
        />
        <button className="search__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
          >
            <path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              fill="#efeff1"
            ></path>
          </svg>
        </button>

        <div className="home">
          <Link to="/">
            <button>
              <FaHome className="icon" /> Home
            </button>
          </Link>
        </div>

        <div className="login">
          <button onClick={toggleDropdown}>
            <VscAccount className="icon" /> Login
          </button>

          {isOpen && (
            <div className="dropdown-content">
              <Link to="/Login">Login</Link>
              <Link to="/SignUp">SignUp</Link>
              <Link to ="/About"></Link>
            </div>
          )}
        </div>

        <div className="navbar-menu">
          <ul className="list">
            <li>
              <button onClick={toggleCart} className="cart-btn">
                <IoCart className="icon" /> Cart ({cartItems.length})
              </button>
            </li>
            <li>
               About Us
            </li>
            <li>
              <CiMenuBurger className="icon" />
            </li>
          </ul>
        </div>
      </div>

      {isCartOpen && (
        <div className="cart-dialog">
          <div className="cart-dialog-header">
            <h3>Your Cart</h3>
            <button onClick={toggleCart}>Close</button>
          </div>
          <div className="cart-dialog-body">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => updateQuantity(item.id, 1)}><FaPlus /></button> {/* Add quantity */}
                  <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}><FaMinus /></button> {/* Reduce quantity */}
                  <button onClick={() => removeItem(item.id)}><MdDelete className='delete' /></button> {/* Remove item */}
                  <p>Price: ${item.price * item.quantity}</p>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="cart-dialog-footer">
              <h4>Total: ${getTotal()}</h4>
              <button onClick={clearCart}>Clear Cart</button>
              <button>Checkout</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
