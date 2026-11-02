import { Link, useParams } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { money } from '../lib/pricing'

export default function OrderPage() {
  const { id } = useParams()
  const { findOrder } = useStore()
  const order = findOrder(id)

  if (!order) {
    return (
      <section className="section">
        <p className="empty">
          We couldn't find order <strong>{id}</strong> on this device.<br /><br />
          <Link to="/account" className="btn">Look up another order</Link>
        </p>
      </section>
    )
  }

  const date = new Date(order.createdAt).toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <section className="section">
      <div className="section-head">
        <h2>Order {order.id}</h2>
        <span className="status-pill">{order.status}</span>
      </div>
      <p className="notice success">
        Thanks, {order.shipTo.name.split(' ')[0]}! Order placed on {date}. A confirmation would be sent to {order.shipTo.email} in a live store.
      </p>

      <div className="bag-layout">
        <div>
          <h3 className="sub-head">Items</h3>
          {order.items.map((i, idx) => (
            <div key={idx} className="bag-item">
              <img src={`/images/products/${i.id}.svg`} alt={i.name} />
              <div className="bag-info">
                <span className="bag-name">{i.name}</span>
                <small>Size {i.size} · {i.color} · Qty {i.qty}</small>
              </div>
              <div className="bag-right"><strong>{money(i.price * i.qty)}</strong></div>
            </div>
          ))}
        </div>

        <aside className="summary">
          <h3>Summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>{money(order.subtotal)}</span></div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{order.shipping === 0 ? 'Free' : money(order.shipping)}</span>
          </div>
          <div className="summary-row grand"><span>Total</span><span>{money(order.total)}</span></div>
          <h4 className="sub-head">Ship to</h4>
          <p className="address">
            {order.shipTo.name}<br />
            {order.shipTo.address}<br />
            {order.shipTo.city}, {order.shipTo.zip}
          </p>
          <p className="address">Paid with card ending in {order.paymentLast4}</p>
          <Link to="/products" className="back-link">Continue shopping →</Link>
        </aside>
      </div>
    </section>
  )
}
