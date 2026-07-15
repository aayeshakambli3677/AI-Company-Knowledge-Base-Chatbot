import React, { useState } from "react";
import "./ChatHistory.css";


function ChatHistory() {


  const [selectedChat, setSelectedChat] = useState(null);


  const [chatList, setChatList] = useState([

    {
      id: 1,
      user: "Anushka",
      question: "What is Artificial Intelligence?",
      answer: "AI is a technology that allows machines to think and learn."
    },

    {
      id: 2,
      user: "Ayesha",
      question: "What is RAG?",
      answer: "RAG combines document retrieval with LLM responses."
    }

  ]);



  const deleteChat = (id) => {


    const updatedChats = chatList.filter(
      (chat) => chat.id !== id
    );


    setChatList(updatedChats);



    if(selectedChat?.id === id){

      setSelectedChat(null);

    }

  };



  return (

    <div className="chat-history-container">


      <h1>
        💬 Chat History
      </h1>



      <p>
        View your previous AI conversations.
      </p>



      <div className="history-list">


        {
          chatList.map((chat)=>(


            <div 
              className="history-card"
              key={chat.id}
            >


              <h2>
                👤 {chat.user}
              </h2>


              <p>
                <strong>Question:</strong>
                {" "}
                {chat.question}
              </p>



              <button
                onClick={() => setSelectedChat(chat)}
              >
                View Chat
              </button>



              <button
                className="delete-btn"
                onClick={() => deleteChat(chat.id)}
              >
                Delete
              </button>


            </div>


          ))
        }


      </div>




      {
        selectedChat && (

          <div className="chat-detail-card">


            <h2>
              🤖 Chat Details
            </h2>


            <p>
              <strong>User:</strong> {selectedChat.user}
            </p>


            <p>
              <strong>Question:</strong> {selectedChat.question}
            </p>


            <p>
              <strong>AI Response:</strong> {selectedChat.answer}
            </p>


          </div>

        )
      }



    </div>

  );

}


export default ChatHistory;