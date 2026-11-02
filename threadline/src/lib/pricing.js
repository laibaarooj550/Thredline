export const FREE_SHIPPING_THRESHOLD = 75
export const FLAT_SHIPPING = 7.95
export const MAX_QTY = 10

export function shippingFor(subtotal) {
  if (subtotal <= 0 || subtotal >= FREE_SHIPPING_THRESHOLD) return 0
  return FLAT_SHIPPING
}

export const money = (n) => `$${n.toFixed(2)}`
