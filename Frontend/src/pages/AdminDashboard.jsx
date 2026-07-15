import React from "react";
import StatsCard from "../components/StatsCard";
import UserTable from "../components/UserTable";
import "./AdminDashboard.css";


const statsData = [
  {
    icon: "📄",
    title: "Documents",
    value: "120"
  },
  {
    icon: "👥",
    title: "Users",
    value: "50"
  },
  {
    icon: "💬",
    title: "Chats",
    value: "300"
  },
  {
    icon: "📂",
    title: "Categories",
    value: "10"
  }
];


function AdminDashboard() {

  return (

    <div className="admin-dashboard">


      <h1>
        Admin Dashboard 👑
      </h1>


      <p>
        Manage users, documents, chats and AI knowledge base.
      </p>



      <div className="admin-overview">

        <h2>
          📊 Dashboard Overview
        </h2>

        <p>
          Monitor your AI Knowledge Base system from one place.
        </p>

      </div>



      <div className="stats">

        {
          statsData.map((item, index) => (

            <StatsCard

              key={index}

              icon={item.icon}

              title={item.title}

              value={item.value}

            />

          ))
        }

      </div>



      <UserTable />


    </div>

  );

}


export default AdminDashboard;