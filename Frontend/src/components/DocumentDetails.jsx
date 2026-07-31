import React from "react";
import "./DocumentDetails.css";

function DocumentDetails({ document }) {
  return (
    <div className="document-details">

      <h2>📄 Document Details</h2>

      <p>
        <strong>ID:</strong> {document.id}
      </p>

      <p>
        <strong>Title:</strong> {document.title}
      </p>

      <p>
        <strong>File Name:</strong> {document.file_name}
      </p>

      <p>
        <strong>Category ID:</strong> {document.category_id}
      </p>

      <p>
        <strong>Uploaded By (User ID):</strong> {document.uploaded_by}
      </p>


      <hr />

      <h3>📖 Document Content</h3>

      <div className="document-content">
        {document.content ? (
          document.content
        ) : (
          "No content available"
        )}
      </div>

    </div>
  );
}

export default DocumentDetails;