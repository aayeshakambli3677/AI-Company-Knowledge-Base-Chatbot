import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./Feedback.css";

function Feedback() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [chatId, setChatId] = useState("");

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await api.get("/feedback/");
      setFeedbackList(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error(error);
      setFeedbackList([]);
    }
  };

  const addFeedback = async () => {
    if (!chatId || !message) {
      alert("Please enter Chat ID and Feedback");
      return;
    }

    try {
      await api.post("/feedback/", {
        chat_id: Number(chatId),
        rating,
        comment: message,
      });

      alert("Feedback Added Successfully");
      setChatId("");
      setMessage("");
      setRating(5);
      fetchFeedback();
    } catch (error) {
      alert(error.response?.data?.detail || "Failed to add feedback");
    }
  };

  return (
    <div className="feedback-container">
      <h1>⭐ Feedback</h1>

      <div className="feedback-input">
        <input
          type="number"
          placeholder="Enter Chat ID"
          value={chatId}
          onChange={(e) => setChatId(e.target.value)}
        />

        <input
          type="text"
          placeholder="Write your feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={2}>2</option>
          <option value={1}>1</option>
        </select>

        <button onClick={addFeedback}>Add Feedback</button>
      </div>

      <div className="feedback-list">
        {feedbackList.length === 0 ? (
          <h2 style={{ color: "white" }}>No Feedback Found</h2>
        ) : (
          feedbackList.map((feedback) => (
            <div className="feedback-card" key={feedback.id}>
              <h2>Feedback #{feedback.id}</h2>
              <p>{feedback.comment}</p>
              <p>⭐ Rating: {feedback.rating}/5</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Feedback;