import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {

  return (

    <nav className="navbar">


      <Link to="/" className="logo">

        🤖 <span>Knowledge Base AI</span>

      </Link>



      <div className="nav-links">


        <Link to="/">
          Home
        </Link>


        <Link to="/dashboard">
          Dashboard
        </Link>


        <Link to="/admin-dashboard">
          Admin
        </Link>


        <Link to="/categories">
          Categories
        </Link>


        <Link to="/feedback">
          Feedback
        </Link>


        <Link to="/chat-history">
          Chat History
        </Link>


        <Link to="/login">
          Login
        </Link>


        <Link to="/signup">
          Signup
        </Link>


      </div>


    </nav>

  );

}


export default Navbar;