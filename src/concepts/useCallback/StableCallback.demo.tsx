import { useState, useCallback, memo } from "react"

// Child wrapped in React.memo
const Child = memo(({ onClick }: { onClick: () => void }) => {
  console.log("🔴 Child rendered!")
  return <button onClick={onClick}>Click me</button>
})

const Parent = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  // Toggle between these two and observe child renders
  const handleClick = useCallback(() => {
    console.log("clicked!")
  }, []) // stable reference

//   const handleClick = () => {
//     console.log("clicked!")      
//   } // new reference every render

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment Parent
      </button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type here..."
      />
      <Child onClick={handleClick} />
    </div>
  )
}

export default Parent