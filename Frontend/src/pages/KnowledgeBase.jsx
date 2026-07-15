import React, { useState } from "react";
import DocumentDetails from "../components/DocumentDetails";
import "./KnowledgeBase.css";


function KnowledgeBase() {


  const documents = [

    {
      id: 1,
      name: "Company_Report.pdf",
      status: "Ready for AI Chat",
      uploadedBy: "Anushka"
    },

    {
      id: 2,
      name: "Employee_Data.docx",
      status: "Processing",
      uploadedBy: "Ayesha"
    }

  ];



  const [selectedDocument, setSelectedDocument] = useState(null);

  const [documentList, setDocumentList] = useState(documents);



  const handleDelete = (id) => {


    const updatedDocuments = documentList.filter(
      (doc) => doc.id !== id
    );


    setDocumentList(updatedDocuments);



    if(selectedDocument?.id === id){

      setSelectedDocument(null);

    }

  };



  return (

    <div className="kb-container">


      <h1>
        📚 Knowledge Base
      </h1>


      <p>
        Your uploaded documents will appear here.
      </p>



      <div className="documents-list">


        {
          documentList.map((doc) => (

            <div
              className="document-card"
              key={doc.id}
            >


              <h3>
                📄 {doc.name}
              </h3>


              <p>
                Status: {doc.status}
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
        }


      </div>




      {
        selectedDocument && (

          <DocumentDetails
            document={selectedDocument}
          />

        )
      }



    </div>

  );

}


export default KnowledgeBase;