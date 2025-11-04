import React from "react";

function TemperatureInput({ value, unit, onChange }) {
  return (
    <div className="temperature-input">
      <label>Enter {unit === "C" ? "Celsius" : "Fahrenheit"}: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default TemperatureInput;
