import React, { useEffect, useState } from "react";
import api from "../services/api";
import DocumentDetails from "../components/DocumentDetails";
import "./KnowledgeBase.css";

function KnowledgeBase() {
  const [documentList, setDocumentList] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await api.get("/documents/");
      setDocumentList(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load documents");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this document?")) {
      return;
    }

    try {
      await api.delete(`/documents/${id}`);

      setDocumentList((prev) =>
        prev.filter((doc) => doc.id !== id)
      );

      if (selectedDocument?.id === id) {
        setSelectedDocument(null);
      }

      alert("Document deleted successfully");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.detail ||
        "Failed to delete document"
      );
    }
  };

  return (
    <div className="kb-container">

      <h1>📚 Knowledge Base</h1>

      <p>Your uploaded documents will appear here.</p>

      <div className="documents-list">

        {documentList.length === 0 ? (
          <p>No documents found.</p>
        ) : (
          documentList.map((doc) => (
            <div
              className="document-card"
              key={doc.id}
            >

              <h3>📄 {doc.title}</h3>

              <p>
                File : {doc.file_name}
              </p>

              <button
                onClick={() => setSelectedDocument(doc)}
              >
                View Document
              </button>

              <button
                onClick={() => handleDelete(doc.id)}
              >
                Delete Document
              </button>

            </div>
          ))
        )}

      </div>

      {selectedDocument && (
        <DocumentDetails
          document={selectedDocument}
        />
      )}

    </div>
  );
}

export default KnowledgeBase;