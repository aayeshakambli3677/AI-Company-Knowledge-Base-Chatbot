import React, { useState } from "react";
import "./UserTable.css";
import UserDetails from "./UserDetails";


function UserTable() {


  const users = [
    {
      id: 1,
      name: "Anushka",
      email: "anushka@gmail.com",
      role: "Admin",
      status: "Active"
    },
    {
      id: 2,
      name: "Ayesha",
      email: "ayesha@gmail.com",
      role: "User",
      status: "Active"
    }
  ];


  const [selectedUser, setSelectedUser] = useState(null);

  const [userList, setUserList] = useState(users);



  const handleDelete = (id) => {

    const updatedUsers = userList.filter(
      (user) => user.id !== id
    );

    setUserList(updatedUsers);

    // agar deleted user details me open hai
    if(selectedUser?.id === id){
      setSelectedUser(null);
    }

  };



  return (

    <div className="user-table">


      <h2>👥 Users</h2>


      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>

        </thead>



        <tbody>

          {
            userList.map((user) => (

              <tr key={user.id}>

                <td>{user.id}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>


                <td>

                  <button
                    className="view-btn"
                    onClick={() => setSelectedUser(user)}
                  >
                    View
                  </button>


                  <button
                    className="remove-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Remove
                  </button>


                </td>


              </tr>

            ))
          }

        </tbody>


      </table>



      {
        selectedUser && (
          <UserDetails user={selectedUser} />
        )
      }



    </div>

  );

}


export default UserTable;