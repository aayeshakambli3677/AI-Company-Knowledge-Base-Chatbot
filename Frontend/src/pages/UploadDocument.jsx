import React, { useState } from "react";

function UploadDocument() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    alert(`File "${selectedFile.name}" is ready to upload.`);
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h1>📄 Upload Document</h1>

        <p>Upload your files to create your knowledge base.</p>

        <input
          type="file"
          onChange={handleFileChange}
        />

        {selectedFile && (
          <p>
            <strong>Selected File:</strong> {selectedFile.name}
          </p>
        )}

        <button onClick={handleUpload}>
          Upload Document
        </button>
      </div>
    </div>
  );
}

export default UploadDocument;