import React from "react";
import { useDebounce } from "../index";

function useDebounceDemo() {
  const [value, setValue] = React.useState("");
  const debouncedValue = useDebounce(value, 500);
  const isTyping = value !== debouncedValue;
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {isTyping && <p>Typing...</p>}
      <p>Current Value: {value}</p>
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
}

export default useDebounceDemo;
