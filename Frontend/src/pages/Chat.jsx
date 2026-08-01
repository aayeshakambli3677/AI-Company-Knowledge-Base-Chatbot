import React, { useState, useEffect } from "react";
import "./Chat.css";
import api from "../services/api";

function Chat() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState("");

  useEffect(() => {
    fetchDocuments();
  }, []);


  const fetchDocuments = async () => {
    try {
      const res = await api.get("/documents");
      setDocuments(res.data);

    } catch (error) {
      console.log("Document error:", error);
    }
  };


  const handleSend = async () => {

    if (!message.trim()) return;

    const userMessage = message;

    setMessages(prev => [
      ...prev,
      {
        sender: "user",
        text: userMessage
      }
    ]);

    setMessage("");


    try {

      const token = localStorage.getItem("token");

      const res = await api.post(
        "/chats/ask",
        {
          question: userMessage,
          document_id: Number(selectedDocument)
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );


      setMessages(prev => [
        ...prev,
        {
          sender: "ai",
          text: res.data.answer
        }
      ]);


    } catch (error) {

      console.log("Chat error:", error);

      setMessages(prev => [
        ...prev,
        {
          sender: "ai",
          text: "AI service is temporarily unavailable."
        }
      ]);

    }
  };


  return (
    <div className="chat-container">

      <div className="chat-card">

        <h1>🤖 Chat with AI</h1>

        <p>
          Ask questions from your knowledge base.
        </p>


        <div className="chat-response">

          {messages.length === 0 && (
            <p>Start chatting...</p>
          )}


          {messages.map((msg, index) => (
            <div key={index}>
              <b>
                {msg.sender === "user" ? "You" : "AI"}:
              </b>{" "}
              {msg.text}
            </div>
          ))}

        </div>


        <div className="chat-input">


          <select
            value={selectedDocument}
            onChange={(e) =>
              setSelectedDocument(e.target.value)
            }
          >

            <option value="">
              Select Document
            </option>


            {documents.map((doc) => (
              <option
                key={doc.id}
                value={doc.id}
              >
                {doc.title}
              </option>
            ))}

          </select>


          <input
            type="text"
            placeholder="Ask something..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
          />


          <button onClick={handleSend}>
            Send
          </button>


        </div>

      </div>

    </div>
  );
}

export default Chat;