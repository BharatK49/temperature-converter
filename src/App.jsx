import React, { useState } from "react";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureInput from "./components/TemperatureInput";
import TemperatureControls from "./components/TemperatureControls";
import ToggleUnit from "./components/ToggleUnit";
import "./App.css"; // flamboyant css we built earlier

function App() {
  const [temperature, setTemperature] = useState(0);
  const [unit, setUnit] = useState("C"); // "C" for Celsius, "F" for Fahrenheit

  // Conversion logic
  const celsius =
    unit === "C" ? temperature : ((temperature - 32) * 5) / 9;
  const fahrenheit =
    unit === "F" ? temperature : (temperature * 9) / 5 + 32;

  const handleIncrease = () => setTemperature(temperature + 1);
  const handleDecrease = () => setTemperature(temperature - 1);

  const handleInputChange = (value) => setTemperature(Number(value));

  const handleToggleUnit = () => {
    if (unit === "C") {
      setTemperature(fahrenheit); // convert to F
      setUnit("F");
    } else {
      setTemperature(celsius); // convert to C
      setUnit("C");
    }
  };

  return (
    <div className="app-container">
      <h1>🌡 Temperature Converter</h1>

      {/* Toggle between Celsius & Fahrenheit */}
      <ToggleUnit unit={unit} onToggle={handleToggleUnit} />

      {/* Show only the active unit */}
      <TemperatureDisplay
        value={temperature}
        unit={unit}
      />

      <TemperatureInput
        value={temperature}
        unit={unit}
        onChange={handleInputChange}
      />

      <TemperatureControls
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}

export default App;
