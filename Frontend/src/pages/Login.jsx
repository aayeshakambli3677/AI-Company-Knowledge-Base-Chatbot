import React from "react";

function Login() {
  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter email"
        />

        <input
          type="password"
          placeholder="Enter password"
        />

        <button>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;