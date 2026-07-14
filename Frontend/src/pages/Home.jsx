import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

<section className="hero">

  <div className="hero-left">

    <span className="hero-badge">
      🚀 AI Powered Knowledge Management
    </span>

    <h1>
      Build Your <span>Knowledge Base</span>
      <br />
      With AI & LLM
    </h1>

    <p>
      Upload documents, organize your knowledge and
      chat with your files using the power of Large
      Language Models.
    </p>

    <div className="hero-buttons">

      <Link to="/dashboard">
        <button className="primary-btn">
          Get Started
        </button>
      </Link>

      <Link to="/upload">
        <button className="outline-btn">
          Upload Documents
        </button>
      </Link>

    </div>

  </div>



  <div className="hero-right">

    <div className="ai-card">

      <div className="robot">
        🤖
      </div>

      <h2>AI Knowledge Assistant</h2>

      <p>
        Ready to answer questions from
        your uploaded documents.
      </p>

      <div className="status">
        🟢 AI Ready
      </div>

    </div>

  </div>

</section>


  <section className="features">

  <h2>
    Powerful Features
  </h2>

  <div className="feature-cards">

    <div className="feature-card">
      <div className="feature-icon">
        📄
      </div>

      <h3>
        Document Upload
      </h3>

      <p>
        Upload PDF, DOCX and TXT files to build your knowledge base.
      </p>
    </div>


    <div className="feature-card">

      <div className="feature-icon">
        🤖
      </div>

      <h3>
        AI Chat Assistant
      </h3>

      <p>
        Ask questions and get intelligent answers using LLM.
      </p>

    </div>


    <div className="feature-card">

      <div className="feature-icon">
        📚
      </div>

      <h3>
        Knowledge Base
      </h3>

      <p>
        Organize and manage your uploaded information easily.
      </p>

    </div>

  </div>

</section>

    </div>
  );
}

export default Home;