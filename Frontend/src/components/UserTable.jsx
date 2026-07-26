import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./UserTable.css";
import UserDetails from "./UserDetails";

function UserTable() {

  const [selectedUser, setSelectedUser] = useState(null);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get("/admin/users");
      setUserList(response.data);
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.detail ||
        "Failed to load users"
      );
    }
  };

  const handleView = async (id) => {
    try {
      const response = await api.get(`/admin/users/${id}`);
      setSelectedUser(response.data);
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.detail ||
        "User not found"
      );
    }
  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this user?")) {
      return;
    }

    try {

      await api.delete(`/admin/users/${id}`);

      setUserList(
        userList.filter((user) => user.id !== id)
      );

      if (selectedUser?.id === id) {
        setSelectedUser(null);
      }

      alert("User deleted successfully");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.detail ||
        "Failed to delete user"
      );
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

          {userList.map((user) => (

            <tr key={user.id}>

              <td>{user.id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>

                <button
                  className="view-btn"
                  onClick={() => handleView(user.id)}
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

          ))}

        </tbody>

      </table>

      {selectedUser && (
        <UserDetails user={selectedUser} />
      )}

    </div>

  );
}

export default UserTable;