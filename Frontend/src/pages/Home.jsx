import FeatureCard from "../components/FeatureCard";
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

    <FeatureCard
      icon="📄"
      title="AI Document Analysis"
      description="Upload documents and let AI understand your information."
    />


    <FeatureCard
      icon="🧠"
      title="Smart Knowledge Base"
      description="Organize and manage your knowledge using AI."
    />


    <FeatureCard
      icon="💬"
      title="AI Chat Assistant"
      description="Ask questions and get intelligent answers."
    />

  </div>

</section>

    </div>
  );
}

export default Home;