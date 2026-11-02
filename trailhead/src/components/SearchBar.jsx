import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function SearchBar() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') || '')

  // Keep the box in sync when a search or filter changes the URL.
  useEffect(() => {
    setQuery(params.get('q') || '')
  }, [params])

  const submit = (e) => {
    e.preventDefault()
    const q = query.trim()
    navigate(q ? `/products?q=${encodeURIComponent(q)}` : '/products')
  }

  return (
    <form className="search" role="search" onSubmit={submit}>
      <input
        type="text"
        aria-label="Search gear and essentials"
        placeholder="Search tents, stoves, packs…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" aria-label="Search">Search</button>
    </form>
  )
}
