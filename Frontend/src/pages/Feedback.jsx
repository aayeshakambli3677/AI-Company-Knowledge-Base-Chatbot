import React from "react";
import "./Feedback.css";

function Feedback() {
  return (
    <div className="feedback-container">
      <h1>⭐ Feedback Page Working</h1>

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
        <h2>Feedback Module Loaded Successfully</h2>
        <p>
          If you can see this message, the Feedback page is rendering correctly.
        </p>

        <button
          onClick={() => alert("Feedback Page Working Successfully")}
        >
          Test Button
        </button>
      </div>
    </div>
  );
}

export default Feedback;