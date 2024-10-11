import React, { useState } from 'react';
import "../component/Branded.css";
import Electronics from './Electronics';

export default function Branded() {
  const [items, setItems] = useState([]); // State to store products

  const addNewProduct = () => {
    const newProduct = {
      title: 'Test Product',
      price: 13.5,
      description: 'Lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronics'
    };

    fetch('https://fakestoreapi.com/products', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct) // Convert product to JSON format
    })
      .then(res => res.json())
      .then(data => {
        console.log('New product added:', data);
        setItems(prevItems => [...prevItems, data]); // Add the new product to the items state
      })
      .catch(error => console.error('Error posting data:', error));
  };

  return (
    <>
      <div className='branded'>
        <h1>Branded Store</h1>
        <button onClick={addNewProduct} className="add-product-btn">Add Test Product</button>

        <div className="product">
          {items.length === 0 ? (
            <p>No products available.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="product-item">
                <h2>{item.title}</h2>
                <img src={item.image} alt={item.title} style={{ width: '100px' }} />
                <p>Price: ${item.price}</p>
                <p>{item.description}</p>
              </div>
            ))
          )}
        </div>
      </div>

      
      <div className='deal'>
        <h2>Best Deal on Jeweleries</h2>
        <Electronics/>
      </div>
    </>
  );
}
