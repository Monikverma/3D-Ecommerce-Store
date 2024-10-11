import React, { useState, useEffect } from 'react';
import Service from './Service';
import "../component/Electronics.css";

export default function Electronics() {
  const [items, setItems] = useState([]); // State to store the fetched products
  const [loading, setLoading] = useState(true); // State to handle loading

  // Fetch products from the "jewelery" category on component mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(res => res.json())
      .then(data => {
        setItems(data); // Store fetched data in state
        setLoading(false); // Turn off loading once data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Turn off loading if an error occurs
      });
  }, []);

  // If the data is still loading, display a loading message
  if (loading) {
    return <h2>Loading jewelry products...</h2>;
  }

  return (
    <div>
      {/* Jewelery Products Grid */}
      <div className="jewelery-container">
        <h1>Jewelery Products</h1>
        <div className="grid-container">
          {items.map(item => (
            <div key={item.id} className="product-item">
              <img src={item.image} alt={item.title} style={{ width: '150px', height: '150px' }} />
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      </div>
          
      {/* Footer and Services */}
      <div className="service">
        <h5>OUR Services:</h5>
      </div>
      
      {/* Render the Service component */}
      <Service />
    </div>
  );
}
