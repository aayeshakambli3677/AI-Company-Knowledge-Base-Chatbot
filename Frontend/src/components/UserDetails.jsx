import React from "react";
import "./UserDetails.css";


function UserDetails({ user }) {

  return (

    <div className="user-details">


      <h2>
        👤 User Details
      </h2>


      <p>
        <strong>ID:</strong> {user.id}
      </p>


      <p>
        <strong>Name:</strong> {user.name}
      </p>


      <p>
        <strong>Email:</strong> {user.email}
      </p>


      <p>
        <strong>Role:</strong> {user.role}
      </p>


      <p>
        <strong>Status:</strong> {user.status}
      </p>


    </div>

  );

}


export default UserDetails;