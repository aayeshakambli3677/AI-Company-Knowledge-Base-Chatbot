import React, { useState } from "react";
import "./Feedback.css";


function Feedback() {


  const [feedbackList, setFeedbackList] = useState([

    {
      id: 1,
      user: "Anushka",
      message: "AI chatbot is very useful.",
      rating: 5
    },

    {
      id: 2,
      user: "Ayesha",
      message: "Knowledge base works well.",
      rating: 4
    }

  ]);



  const [message, setMessage] = useState("");



  const addFeedback = () => {


    if(!message){
      return;
    }


    const newFeedback = {

      id: feedbackList.length + 1,

      user: "User",

      message: message,

      rating: 5

    };


    setFeedbackList([
      ...feedbackList,
      newFeedback
    ]);


    setMessage("");

  };




  const deleteFeedback = (id) => {


    setFeedbackList(

      feedbackList.filter(
        (feedback)=> feedback.id !== id
      )

    );

  };




  return (

    <div className="feedback-container">


      <h1>
        ⭐ Feedback
      </h1>



      <div className="feedback-input">


        <input

          type="text"

          placeholder="Write your feedback"

          value={message}

          onChange={(e)=>setMessage(e.target.value)}

        />


        <button onClick={addFeedback}>
          Add Feedback
        </button>


      </div>




      <div className="feedback-list">


        {
          feedbackList.map((feedback)=>(


            <div 
              className="feedback-card"
              key={feedback.id}
            >


              <h2>
                👤 {feedback.user}
              </h2>


              <p>
                {feedback.message}
              </p>


              <p>
                ⭐ Rating: {feedback.rating}/5
              </p>



              <button
                onClick={()=>deleteFeedback(feedback.id)}
              >
                Delete
              </button>


            </div>


          ))
        }


      </div>



    </div>

  );

}


export default Feedback;