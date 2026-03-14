import React from "react";
import { useToggle } from "../index";

function UseToggleDemo() {
  const { value, toggle } = useToggle(false);
  return (
    <div
      style={{
        background: value ? "#333" : "#fff",
        color: value ? "#fff" : "#333",
      }}
    >
      <p>Value: {value.toString()}</p>
      <button onClick={toggle}>
        {value ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
}

export default UseToggleDemo;
