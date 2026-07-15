import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <h1>
          Welcome to Dashboard 👋
        </h1>

        <p>
          Manage your documents, knowledge base and interact with LLM.
        </p>

      </div>


      <div className="dashboard-cards">


        <div className="card">

          <h2>📄 Upload Documents</h2>

          <p>
            Upload files and create your AI-powered knowledge base.
          </p>

          <Link to="/upload">
            <button>
              Upload
            </button>
          </Link>

        </div>



        <div className="card">

          <h2>📚 Knowledge Base</h2>

          <p>
            View and manage your stored documents easily.
          </p>

          <Link to="/knowledge-base">
            <button>
              View
            </button>
          </Link>

        </div>



        <div className="card">

          <h2>🤖 Chat with AI</h2>

          <p>
            Ask questions and get answers from your documents.
          </p>

          <Link to="/chat">
            <button>
              Chat
            </button>
          </Link>

        </div>


      </div>


    </div>
  );
}

export default Dashboard;