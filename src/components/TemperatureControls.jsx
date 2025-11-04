import React from "react";

function TemperatureControls({ onIncrease, onDecrease }) {
  return (
    <div className="button-group">
      <button className="button-decrease" onClick={onDecrease}>
        - Decrease
      </button>
      <button className="button-increase" onClick={onIncrease}>
        + Increase
      </button>
    </div>
  );
}

export default TemperatureControls;
