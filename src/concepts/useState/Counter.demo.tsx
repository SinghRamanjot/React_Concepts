import { useState } from "react"


// --- Exercise 1: Functional Update ---

export const Counter = () => {
  const [value, setValue] = useState(0)

  const handleIncrement = () => setValue(prev => prev + 1)
  const handleDecrement = () => setValue(prev => prev - 1)

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={handleIncrement}>+ Increment</button>
      <button onClick={handleDecrement}>- Decrement</button>
    </div>
  )
}

// --- Exercise 2: Object State (spread rule) ---
export const UserCard = () => {
  const [user, setUser] = useState({ name: "Arjun", age: 25 })

  const handleNameChange = () => {
    // ✅ spread prev state, only override name
    setUser(prev => ({ ...prev, name: "Rahul" }))
  }

  const handleAgeChange = () => {
    // ✅ spread prev state, only override age
    setUser(prev => ({ ...prev, age: prev.age + 1 }))
  }

  return (
    <div>
      <h2>Name: {user.name} | Age: {user.age}</h2>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleAgeChange}>Birthday 🎂</button>
    </div>
  )
}

// --- Exercise 3: Lazy Initialization ---
export const LazyCounter = () => {
  const [value, setValue] = useState(() => {
    console.log("⚡ This runs ONCE only — lazy init")
    return 100 // expensive calculation would go here
  })

  return (
    <div>
      <h2>Lazy Value: {value}</h2>
      <button onClick={() => setValue(prev => prev + 1)}>Increment</button>
    </div>
  )
}