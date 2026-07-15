import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import UploadDocument from "./pages/UploadDocument";
import KnowledgeBase from "./pages/KnowledgeBase";
import Chat from "./pages/Chat";
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard";
import Categories from "./pages/Categories";
import Feedback from "./pages/Feedback";
import ChatHistory from "./pages/ChatHistory";

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
        <Route path="/admin-dashboard" element={<AdminDashboard />}/>
        <Route path="/categories" element={<Categories />}/>
        <Route path="/feedback" element={<Feedback />}/>
        <Route path="/chat-history" element={<ChatHistory />}/>
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;