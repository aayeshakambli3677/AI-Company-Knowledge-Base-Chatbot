import React, { useEffect, useState } from "react";
import api from "../services/api";
import StatsCard from "../components/StatsCard";
import UserTable from "../components/UserTable";
import "./AdminDashboard.css";

function AdminDashboard() {

  const [stats, setStats] = useState({
    documents: 0,
    users: 0,
    chats: 0,
    categories: 0,
  });

  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    fetchDashboard();
    fetchStats();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await api.get("/admin/dashboard");
      setAdminName(response.data.admin);
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.detail ||
        "Unauthorized"
      );
    }
  };

  const fetchStats = async () => {
    try {
      const response = await api.get("/admin/stats");
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const statsData = [
    {
      icon: "📄",
      title: "Documents",
      value: stats.documents,
    },
    {
      icon: "👥",
      title: "Users",
      value: stats.users,
    },
    {
      icon: "💬",
      title: "Chats",
      value: stats.chats,
    },
    {
      icon: "📂",
      title: "Categories",
      value: stats.categories,
    },
  ];

  return (
    <div className="admin-dashboard">

      <h1>
        Admin Dashboard 👑
      </h1>

      <p>
        Welcome {adminName}
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

        {statsData.map((item, index) => (

          <StatsCard
            key={index}
            icon={item.icon}
            title={item.title}
            value={item.value}
          />

        ))}

      </div>

      <UserTable />

    </div>
  );
}

export default AdminDashboard;