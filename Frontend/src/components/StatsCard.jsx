import React from "react";
import "./StatsCard.css";

function StatsCard({ title, value }) {

  return (

    <div className="stats-card">

      <h3>
        {title}
      </h3>

      <span>
        {value}
      </span>

    </div>

  );

}

export default StatsCard;