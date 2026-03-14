import React, { useRef, useState } from "react";

function FocusInput() {
  const countRef = useRef(0);
  const [countState, setCountState] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          console.log("Ref value:", countRef.current);
        }}
      >
        Increment Ref
      </button>

      <button
        onClick={() => {
          setCountState((prev) => prev + 1);
          countRef.current = countState;
        }}
      >
        Increment State
      </button>

      <p>State value on screen: {countState}</p>
      <p>Ref value on screen: {countRef.current}</p>
    </div>
  );
}

export default FocusInput;
