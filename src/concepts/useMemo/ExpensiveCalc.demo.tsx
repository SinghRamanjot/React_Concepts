// import { useState, useMemo } from "react"

// const ExpensiveCalc = () => {
//   const [count, setCount] = useState(0)
//   const [text, setText] = useState("")

//   const expensiveValue = useMemo(() => {
//     console.log("🔴 Expensive calculation ran!")
//     let total = 0
//     for (let i = 0; i < 1000000000; i++) {
//       total += i
//     }
//     return total
//   }, [count])

//   return (
//     <div>
//       <h2>Expensive Value: {expensiveValue}</h2>
//       <button onClick={() => setCount(prev => prev + 1)}>
//         Change Count (recalculates)
//       </button>
//       <input
//         value={text}
//         onChange={e => setText(e.target.value)}
//         placeholder="Type here (no recalculation)"
//       />
//     </div>
//   )
// // 

// export default ExpensiveCalc

import { useState, useMemo } from "react"

const data = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
  salary: Math.floor(Math.random() * 100000)
}))

const ExpensiveCalc = () => {
  const [filter, setFilter] = useState("")
  const [theme, setTheme] = useState("light")

  const filteredData = useMemo(() => {
    console.log("Filtering ran!")
    return data.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    )
  }, [filter])

  return (
    <div>
      <button onClick={() => setTheme(t => t === "light" ? "dark" : "light")}>
        Toggle Theme (no refilter)
      </button>
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Filter users..."
      />
      <p>Showing {filteredData.length} users</p>
    </div>
  )
}

export default ExpensiveCalc