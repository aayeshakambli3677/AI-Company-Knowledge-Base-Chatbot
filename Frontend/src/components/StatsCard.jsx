import React from "react";
import "./StatsCard.css";

function StatsCard({ icon, title, value }) {
  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <h2>{value}</h2>

    </div>
  );
}

export default StatsCard;