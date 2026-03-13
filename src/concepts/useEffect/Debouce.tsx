import { useState, useEffect } from "react"

interface User {
  id: number
  name: string
  email: string
}

const SearchUsers = () => {
  const [value, setValue] = useState("")
  const [data, setData] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // dont fetch if input is empty
    if (!value) {
      setData([])
      return
    }

    let cancelled = false

    const timer = setTimeout(async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${value}`
        )
        const json = await res.json()
        if (!cancelled) setData(json)
      } catch (err) {
        if (!cancelled) setError("Something went wrong")
      } finally {
        if (!cancelled) setLoading(false)
      }
    }, 500)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [value])

  return (
    <div>
      {/* Input */}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search users..."
      />

      {/* States */}
      {loading && <p>Searching...</p>}
      {error && <p>{error}</p>}
      {!loading && data.length === 0 && value && <p>No users found</p>}

      {/* Results */}
      {data.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default SearchUsers