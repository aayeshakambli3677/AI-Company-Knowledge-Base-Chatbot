import React, { useState } from "react";
import "./UploadDocument.css";


function UploadDocument() {

  const [selectedFile, setSelectedFile] = useState(null);

  const [uploadStatus, setUploadStatus] = useState("");



  const handleFileChange = (e) => {

    setSelectedFile(e.target.files[0]);

    setUploadStatus("");

  };



  const handleUpload = () => {


    if (!selectedFile) {

      setUploadStatus("❌ Please select a file first!");

      return;

    }



    // Later backend API will be connected here
    // POST /documents/upload


    setUploadStatus(
      `✅ ${selectedFile.name} uploaded successfully`
    );


  };



  return (

    <div className="upload-container">


      <div className="upload-card">


        <h1>
          📄 Upload Document
        </h1>


        <p>
          Upload your files to create your knowledge base.
        </p>



        <input

          type="file"

          onChange={handleFileChange}

        />



        {
          selectedFile && (

            <p>

              <strong>
                Selected File:
              </strong>

              {" "}

              {selectedFile.name}

            </p>

          )
        }



        <button onClick={handleUpload}>

          Upload Document

        </button>



        {
          uploadStatus && (

            <p className="upload-status">

              {uploadStatus}

            </p>

          )
        }



      </div>


    </div>

  );

}


export default UploadDocument;