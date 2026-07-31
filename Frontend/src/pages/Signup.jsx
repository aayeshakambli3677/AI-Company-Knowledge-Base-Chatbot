import React, { useState } from "react";
import "./Signup.css";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigate("/login");

    } catch (error) {
      console.log("Error:", error);
      console.log("Response:", error.response);
      console.log("Data:", error.response?.data);

      alert(
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Create Account</h1>

        <p>Join your AI Knowledge Base</p>

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Create password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;