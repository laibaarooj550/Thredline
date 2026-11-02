import { useEffect, useState } from 'react'

// An <img> that switches to a fallback image if the main one fails to load.
// Product photos fall back to their SVG placeholder, so a missing or broken JPEG never shows a blank box.
export default function SafeImage({ src, fallback, alt = '', ...rest }) {
  const [current, setCurrent] = useState(src)

  useEffect(() => setCurrent(src), [src])

  return (
    <img
      src={current}
      alt={alt}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback)
      }}
      {...rest}
    />
  )
}
