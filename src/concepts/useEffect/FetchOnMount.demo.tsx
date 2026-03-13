import { useEffect, useState } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("tick...");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("timer cleaned up!");
    };
  }, []);

  return <div>Timer is running</div>;
};

const FetchOnMount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("effect ran!", count);

    return () => {
      console.log("cleanup ran!", count);
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
    </div>
  );
};

export default FetchOnMount;
