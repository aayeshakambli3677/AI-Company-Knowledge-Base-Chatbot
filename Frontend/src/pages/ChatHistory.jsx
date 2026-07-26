import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./ChatHistory.css";

function ChatHistory() {

  const [selectedChat, setSelectedChat] = useState(null);
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    fetchChatHistory();
  }, []);

  const fetchChatHistory = async () => {
    try {
      const response = await api.get("/chats/history");
      setChatList(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load chat history");
    }
  };

  const deleteChat = async (id) => {

    if (!window.confirm("Delete this chat?")) {
      return;
    }

    try {

      await api.delete(`/chats/${id}`);

      const updatedChats = chatList.filter(
        (chat) => chat.id !== id
      );

      setChatList(updatedChats);

      if (selectedChat?.id === id) {
        setSelectedChat(null);
      }

      alert("Chat deleted successfully");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.detail ||
        "Failed to delete chat"
      );
    }
  };

  return (

    <div className="chat-history-container">

      <h1>💬 Chat History</h1>

      <p>View your previous AI conversations.</p>

      <div className="history-list">

        {chatList.length === 0 ? (
          <p>No chat history found.</p>
        ) : (
          chatList.map((chat) => (

            <div
              className="history-card"
              key={chat.id}
            >

              <h2>Chat #{chat.id}</h2>

              <p>
                <strong>Question:</strong>{" "}
                {chat.question}
              </p>

              <button
                onClick={() => setSelectedChat(chat)}
              >
                View Chat
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteChat(chat.id)}
              >
                Delete
              </button>

            </div>

          ))
        )}

      </div>

      {selectedChat && (

        <div className="chat-detail-card">

          <h2>🤖 Chat Details</h2>

          <p>
            <strong>Question:</strong>{" "}
            {selectedChat.question}
          </p>

          <p>
            <strong>AI Response:</strong>{" "}
            {selectedChat.answer}
          </p>

        </div>

      )}

    </div>

  );
}

export default ChatHistory;