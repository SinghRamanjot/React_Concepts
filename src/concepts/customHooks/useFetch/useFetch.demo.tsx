import React from "react";
import { useDebounce } from "../index";
import useFetch from "./useFetch";

function UseFetchDemo() {
  const [value, setValue] = React.useState("");
  const debouncedValue = useDebounce(value, 500);
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${debouncedValue}`,
  );
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
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default UseFetchDemo;
