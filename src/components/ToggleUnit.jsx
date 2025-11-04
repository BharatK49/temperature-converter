import React from "react";

function ToggleUnit({ unit, onToggle }) {
  return (
    <div className="toggle-unit">
      <button onClick={onToggle}>
        Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
}

export default ToggleUnit;
