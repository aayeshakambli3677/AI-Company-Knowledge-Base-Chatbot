import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api"; // Adjust path if needed
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      // Save JWT token
      const token = response.data.access_token;
      console.log("TOKEN FROM BACKEND:", token);
      localStorage.setItem("token", token);
      console.log("TOKEN AFTER SAVE:", localStorage.getItem("token"));


      // Redirect to Dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.detail);
      } else {
        alert("Server not responding");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="auth-card">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;