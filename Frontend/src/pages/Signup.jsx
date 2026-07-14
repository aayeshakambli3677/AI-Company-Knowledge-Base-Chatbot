import React from "react";

function Signup() {
  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Signup</h1>

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

        <button>
          Signup
        </button>

      </div>

    </div>
  );
}

export default Signup;