import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FREE_SHIPPING_THRESHOLD, MAX_QTY, money } from '../lib/pricing'

export default function CartPage() {
  const { items, removeFromCart, updateQty, clearCart, total, count, shipping, grandTotal } = useCart()

  if (items.length === 0) {
    return (
      <section className="section">
        <p className="empty">
          Your bag is empty.<br /><br />
          <Link to="/products" className="btn">Start shopping</Link>
        </p>
      </section>
    )
  }

  const toGo = Math.max(0, FREE_SHIPPING_THRESHOLD - total)
  const progress = Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100)

  return (
    <section className="section">
      <div className="section-head">
        <h2>Your Bag ({count} item{count !== 1 ? 's' : ''})</h2>
      </div>

      <div className="bag-layout">
        <div>
          {items.map((item) => (
            <div key={item.key} className="bag-item">
              <img src={`/images/products/${item.id}.svg`} alt={item.name} />
              <div className="bag-info">
                <Link to={`/product/${item.id}`} className="bag-name">{item.name}</Link>
                <small>Size {item.size} · {item.color}</small>
                <div className="qty">
                  <button onClick={() => updateQty(item.id, item.size, -1)} aria-label="Decrease quantity">−</button>
                  <span aria-live="polite">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.size, +1)}
                    aria-label="Increase quantity"
                    disabled={item.qty >= MAX_QTY}
                  >+</button>
                </div>
              </div>
              <div className="bag-right">
                <strong>{money(item.price * item.qty)}</strong>
                <button className="link-danger" onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <aside className="summary">
          <h3>Order summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>{money(total)}</span></div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : money(shipping)}</span>
          </div>
          {shipping > 0 ? (
            <>
              <div className="ship-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
              <p className="ship-note">Add {money(toGo)} more for free shipping.</p>
            </>
          ) : (
            <p className="ship-note good">You've unlocked free shipping.</p>
          )}
          <div className="summary-row grand"><span>Total</span><span>{money(grandTotal)}</span></div>
          <Link to="/checkout" className="btn btn-block">Checkout</Link>
          <button
            className="link-danger"
            onClick={() => { if (window.confirm('Remove all items from your bag?')) clearCart() }}
          >
            Empty bag
          </button>
        </aside>
      </div>
    </section>
  )
}
