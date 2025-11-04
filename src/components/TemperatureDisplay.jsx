import React from "react";

function TemperatureDisplay({ value, unit }) {
  return (
    <div className="temperature-card">
      <h2>Temperature</h2>
      <p>
        {value}°{unit}
      </p>
    </div>
  );
}

export default TemperatureDisplay;
