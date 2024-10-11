import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeItem, updateQuantity, getTotal, clearCart } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <>
          <h3>Total: ${getTotal().toFixed(2)}</h3>
          <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
