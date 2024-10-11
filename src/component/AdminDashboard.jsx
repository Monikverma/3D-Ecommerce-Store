import React, { useState } from "react";
import "../component/AdminDashboard.css";

export default function AdminDashboard({ products, onLogout, removeProduct, addProduct }) {
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.title || !newProduct.price || !newProduct.image) {
      alert('Please fill out all fields.');
      return;
    }

    addProduct({
      title: newProduct.title,
      price: parseFloat(newProduct.price),
      image: newProduct.image
    });

    // Reset form fields
    setNewProduct({ title: '', price: '', image: '' });
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
      <h2>Product Management</h2>

      <form onSubmit={handleAddProduct} className="add-product-form">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={newProduct.title}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleInputChange}
        />
        <button type="submit">Add Product</button>
      </form>

      {products.map((product) => (
        <div className="admin-content" key={product.id}>
          <img src={product.image} alt={product.title} style={{ width: '50px', marginRight: '10px' }} />
          <strong>{product.title}</strong> - ${product.price}{" "}
          <button className="remove-btn" onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
