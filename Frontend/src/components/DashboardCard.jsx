import React from "react";
import "./DashboardCard.css";

function DashboardCard({ title, description, buttonText, onClick }) {

  return (

    <div className="dashboard-card">

      <h2>
        {title}
      </h2>

      <p>
        {description}
      </p>

      <button onClick={onClick}>
        {buttonText}
      </button>

    </div>

  );

}

export default DashboardCard;