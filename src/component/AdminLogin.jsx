import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "../component/AdminDashboard.css"


export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple hardcoded credentials
    if (username === "m" && password === "9") {
      onLogin(); // Call login function to authenticate
      navigate("/admin-dashboard"); // Redirect to admin dashboard after login
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form >
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin} type="submit">Login</button>
      </form>
    </div>
  );
}
