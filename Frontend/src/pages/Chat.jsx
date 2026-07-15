import React, { useState } from "react";
import "./Chat.css";

function Chat() {

  const [message, setMessage] = useState("");

  return (
    <div className="chat-container">

      <div className="chat-card">

        <h1>🤖 Chat with AI</h1>

        <p>
          Ask questions from your knowledge base.
        </p>

        <div className="chat-response">
          AI response will appear here...
        </div>

        <div className="chat-input">

          <input
            type="text"
            placeholder="Ask something..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button>
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

export default Chat;