import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import UploadDocument from "./pages/UploadDocument";
import KnowledgeBase from "./pages/KnowledgeBase";
import Chat from "./pages/Chat";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadDocument />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;