import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Welcome to Dashboard 👋</h1>

      <p>
        Manage your documents, knowledge base and interact with LLM.
      </p>


      <div className="dashboard-cards">

        <div className="card">
          <h2>📄 Upload Documents</h2>
          <p>
            Upload files and create your knowledge base.
          </p>

          <Link to="/upload">
            <button>Upload</button>
          </Link>
        </div>


        <div className="card">
          <h2>📚 Knowledge Base</h2>
          <p>
            View and manage your stored documents.
          </p>

          <Link to="/knowledge-base">
            <button>View</button>
          </Link>
        </div>


        <div className="card">
          <h2>🤖 Chat with AI</h2>
          <p>
            Ask questions using your LLM assistant.
          </p>

          <Link to="/chat">
            <button>Chat</button>
          </Link>
        </div>


      </div>

    </div>
  );
}

export default Dashboard;