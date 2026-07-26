import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./UploadDocument.css";

function UploadDocument() {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories/");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
      setUploadStatus("❌ Failed to load categories");
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadStatus("");
  };

  const handleUpload = async () => {
    if (!title) {
      alert("Please enter document title");
      return;
    }

    if (!categoryId) {
      alert("Please select a category");
      return;
    }

    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("category_id", categoryId);
    formData.append("file", selectedFile);

    try {
      const response = await api.post(
        "/documents/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploadStatus(response.data.message);

      setTitle("");
      setCategoryId("");
      setSelectedFile(null);

    } catch (error) {
      console.log(error);

      setUploadStatus(
        error.response?.data?.detail ||
        "Upload Failed"
      );
    }
  };

  return (
    <div className="upload-container">

      <div className="upload-card">

        <h1>📄 Upload Document</h1>

        <p>
          Upload your files to create your knowledge base.
        </p>

        <input
          type="text"
          placeholder="Enter Document Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">
            Select Category
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="file"
          onChange={handleFileChange}
        />

        {selectedFile && (
          <p>
            <strong>Selected File:</strong>{" "}
            {selectedFile.name}
          </p>
        )}

        <button onClick={handleUpload}>
          Upload Document
        </button>

        {uploadStatus && (
          <p className="upload-status">
            {uploadStatus}
          </p>
        )}

      </div>

    </div>
  );
}

export default UploadDocument;