import { useEffect, useState } from 'react';

const FetchOnMount = () => {
  const [count, setCount] = useState(0)
  
  console.log("I am the component rendering")

  useEffect(() => {
    console.log("I ran after render!")
  }, [])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
    </div>
  )
};

export default FetchOnMount;