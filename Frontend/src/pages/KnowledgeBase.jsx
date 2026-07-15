import React from "react";
import "./KnowledgeBase.css";

function KnowledgeBase() {
  return (
    <div className="kb-container">

      <h1>📚 Knowledge Base</h1>

      <p>
        Your uploaded documents will appear here.
      </p>

      <div className="document-card">

        <h3>Example Document.pdf</h3>

        <p>
          Status: Ready for AI Chat
        </p>

        <button>
          View Document
        </button>

      </div>

    </div>
  );
}

export default KnowledgeBase;