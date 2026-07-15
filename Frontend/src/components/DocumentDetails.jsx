import React from "react";
import "./DocumentDetails.css";


function DocumentDetails({ document }) {

  return (

    <div className="document-details">


      <h2>
        📄 Document Details
      </h2>


      <p>
        <strong>ID:</strong> {document.id}
      </p>


      <p>
        <strong>Name:</strong> {document.name}
      </p>


      <p>
        <strong>Status:</strong> {document.status}
      </p>


      <p>
        <strong>Uploaded By:</strong> {document.uploadedBy}
      </p>


    </div>

  );

}


export default DocumentDetails;