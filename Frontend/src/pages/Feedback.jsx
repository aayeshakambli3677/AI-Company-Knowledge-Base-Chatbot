import React, { useState } from "react";
import "./Feedback.css";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    if (feedback.trim() === "") {
      alert("Please enter your feedback.");
      return;
    }

    alert(
      `Thank you for your feedback!\nRating: ${rating} Star(s)\nFeedback: ${feedback}`
    );

    // Reset form
    setRating(0);
    setFeedback("");
  };

  return (
    <div className="feedback-container">
      <h1>⭐ Feedback Page</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "500px",
          margin: "30px auto",
          textAlign: "center",
        }}
      >
        <h2>Share Your Feedback</h2>

        {/* Star Rating */}
        <div style={{ fontSize: "35px", margin: "15px 0" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                cursor: "pointer",
                color: star <= rating ? "gold" : "gray",
              }}
            >
              ★
            </span>
          ))}
        </div>

        <p>Selected Rating: {rating}/5</p>

        {/* Feedback Text Area */}
        <textarea
          rows="5"
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        />

        <br />
        <br />

        <button onClick={handleSubmit}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default Feedback;