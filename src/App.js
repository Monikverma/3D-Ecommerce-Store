import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import ImageSlider from './ImageSlider';
import AdminLogin from './component/AdminLogin'; // Import Admin Login
import AdminDashboard from './component/AdminDashboard'; // Import Admin Dashboard
import { CartProvider } from './component/CartContext';
import { useState, useEffect } from 'react';

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // State to track if the admin is logged in
  const [products, setProducts] = useState([]); // State to hold the products
  const [loading, setLoading] = useState(true); // State for loading

  // Fetch products on mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data); // Set the fetched products
        setLoading(false); // Set loading to false
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  // Function to add a new product
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, id: Date.now() + Math.random() } // Generate unique ID for new products
    ]);
  };
  

  // Function to remove a product
  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  // Handle admin login state
  const handleAdminLogin = () => {
    setIsAdmin(true);
  };

  // Handle admin logout
  const handleAdminLogout = () => {
    setIsAdmin(false);
  };

  // Show loading message while fetching products
  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />

          {/* Admin Login Route */}
          <Route path="/admin-login" element={<AdminLogin onLogin={handleAdminLogin} />} />

          {/* ImageSlider and other routes */}
          <Route 
            path='/' 
            element={
              <ImageSlider products={products} /> // Pass products to ImageSlider
            } 
          />

          {/* Protected Admin Route */}
          <Route 
            path="/admin-dashboard" 
            element={
              !isAdmin ? (
                <Navigate to="/admin-login" />
              ) : (
                <AdminDashboard 
                  products={products} // Pass products to AdminDashboard
                  onLogout={handleAdminLogout}
                  addProduct={addProduct} // Pass addProduct function
                  removeProduct={removeProduct} // Pass removeProduct function
                /> 
              )
            }
          />
        </Routes>
      </Router>
    </CartProvider>
   
  );
}

export default App;
