import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🤖 <span> Company Knowledge Hub </span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/knowledge-base">Knowledge Base</Link>

        <Link to="/admin-dashboard">Admin</Link>

        <Link to="/categories">Categories</Link>

        <Link to="/feedback">Feedback</Link>

        <Link to="/chat-history">Chat History</Link>

        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;