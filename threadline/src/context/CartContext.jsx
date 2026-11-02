import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getProduct, isSizeAvailable } from '../data/products'
import { loadJSON, saveJSON } from '../lib/storage'
import { shippingFor } from '../lib/pricing'

// The bag stores { id, size, qty } lines. Product details are looked up from the catalog,
// so prices and names never go stale. Invalid saved lines are dropped.
const BAG_KEY = 'threadline-bag'
const CartContext = createContext(null)

function sanitize(raw) {
  if (!Array.isArray(raw)) return []
  return raw.filter((l) => {
    const p = l && getProduct(l.id)
    return p && isSizeAvailable(p, l.size) && Number.isInteger(l.qty) && l.qty > 0
  })
}

const sameLine = (l, id, size) => l.id === id && l.size === size

export function CartProvider({ children }) {
  const [lines, setLines] = useState(() => sanitize(loadJSON(BAG_KEY, [])))

  useEffect(() => {
    saveJSON(BAG_KEY, lines)
  }, [lines])

  const addToCart = useCallback((id, size, qty = 1) => {
    setLines((prev) =>
      prev.some((l) => sameLine(l, id, size))
        ? prev.map((l) => (sameLine(l, id, size) ? { ...l, qty: Math.min(10, l.qty + qty) } : l))
        : [...prev, { id, size, qty: Math.min(10, qty) }]
    )
  }, [])

  const removeFromCart = useCallback((id, size) => {
    setLines((prev) => prev.filter((l) => !sameLine(l, id, size)))
  }, [])

  const updateQty = useCallback((id, size, delta) => {
    setLines((prev) =>
      prev
        .map((l) => (sameLine(l, id, size) ? { ...l, qty: Math.min(10, l.qty + delta) } : l))
        .filter((l) => l.qty > 0)
    )
  }, [])

  const clearCart = useCallback(() => setLines([]), [])

  const items = useMemo(
    () => lines.map((l) => ({ ...getProduct(l.id), size: l.size, qty: l.qty, key: `${l.id}|${l.size}` })),
    [lines]
  )

  const { total, count } = useMemo(
    () => ({
      total: items.reduce((sum, i) => sum + i.price * i.qty, 0),
      count: items.reduce((sum, i) => sum + i.qty, 0),
    }),
    [items]
  )

  const shipping = shippingFor(total)

  return (
    <CartContext.Provider
      value={{ items, lines, addToCart, removeFromCart, updateQty, clearCart, total, count, shipping, grandTotal: total + shipping }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
