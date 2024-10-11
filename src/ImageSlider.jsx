import React, { useState, useEffect } from "react";
import mobile from "./assets/mobile.jpeg";
import www from "./assets/www.jpeg";
import fan from "./assets/fan.jpeg";
import th from "./assets/th.jpeg";
import face from "./assets/face.jpeg";
import trim from "./assets/trim.jpeg";
import shoess from "./assets/shoess.jpeg";
import mac from "./assets/mac.jpeg";
import Branded from "./component/Branded";
import "../src/ImageSlider.css";
import { useCart } from './component/CartContext'; 
import { FaFireAlt } from "react-icons/fa";
import Home from "./component/Home";

export default function ImageSlider({ products }) {
  const { addToCart } = useCart(); // Get addToCart from context
  const [items, setItems] = useState([]); // State to store the products
  const [loading, setLoading] = useState(true); // State to handle loading

  // Fetch data from the API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Fetching from FakeStore API
      .then(res => res.json())
      .then(data => {
        setItems(data); // Store fetched data in state
        setLoading(false); // Turn off loading once data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Turn off loading if error occurs
      });
  }, []);

  // Function to add a new product via POST request
  
  // Merge products from props with fetched items
  const combinedItems = [...items, ...products]; // Combine fetched products with products passed from props

  // Trending items array (images)
  const trendingItems = [
    { id: 1, image: mobile, alt: 'Mobile' },
    { id: 2, image: www, alt: 'www' },
    { id: 3, image: fan, alt: 'Fan' },
    { id: 4, image: th, alt: 'TH' },
    { id: 5, image: face, alt: 'Facewash' },
    { id: 6, image: trim, alt: 'Trimmer' },
    { id: 7, image: shoess, alt: 'Shoes' },
    { id: 8, image: mac, alt: 'Machine' }
  ];

  // Loading state
  if (loading) {
    return <h2>Loading products...</h2>; // Loading message
  }

  return (
    <>
      <Home />
      {/* Trending Section */}
      <div className="heading">
        <h1>Trending in Market <FaFireAlt className="icons" /></h1>
        <div className="trendi">
          {trendingItems.map((item) => (
            <img key={item.id} src={item.image} alt={item.alt} />
          ))}
        </div>
      </div>
      
     

      {/* Product Grid Section */}
      <div className="grid-container">
        {combinedItems.map((item, index) => (
          <div className="responsive" key={item.id || `combined-${index}`}> {/* Ensure unique key */}
            <div className="gallery">
              <a target="_blank" rel="noreferrer" href={item.image}>
                <img src={item.image} alt={item.title} />
              </a>
              <div className="desc">{item.title}</div>
              <div>Price: ${item.price}</div>
              <button className="add-to-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

    
       
        <Branded/>
    </>
  );
}
