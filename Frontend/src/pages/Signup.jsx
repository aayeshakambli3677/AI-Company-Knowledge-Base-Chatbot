import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-page">

      <div className="signup-card">

        <h1>Create Account</h1>

        <p>Join your AI Knowledge Base</p>

        <input
          type="text"
          placeholder="Enter name"
        />

        <input
          type="email"
          placeholder="Enter email"
        />

        <input
          type="password"
          placeholder="Create password"
        />

        <input
          type="password"
          placeholder="Confirm password"
        />

        <button>
          Signup
        </button>

      </div>

    </div>
  );
}

export default Signup;