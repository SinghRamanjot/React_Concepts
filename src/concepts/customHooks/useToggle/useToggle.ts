import { useState } from "react";

function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);
  function toggle() {
    setValue(!value);
  }
  return { value, toggle };
}

export default useToggle;
