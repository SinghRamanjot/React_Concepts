import React from "react"

function RefTyping() {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null)
  const [count, setCount] = React.useState<number>(0)

  const handleFocus = () => {
    inputRef.current?.focus()
  }

  const handleStart = () => {
    if (timerRef.current) return

    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)
  }

  const handleStop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  return (
    <div>
      {/* Input ref */}
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>

      <hr />

      {/* Timer ref */}
      <p>Count: {count}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default RefTyping;