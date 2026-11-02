import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">Autumn Collection</span>
        <h1>Quiet essentials,<br />built to last.</h1>
        <p>Natural fabrics, honest fits, and pieces that work from weekday to weekend. Designed in small batches.</p>
        <div className="hero-actions">
          <Link to="/products?new=1" className="btn">Shop New In</Link>
          <Link to="/products?cat=Women" className="btn btn-ghost">Shop Women</Link>
        </div>
      </div>
      <div className="hero-panel" aria-hidden="true">
        <img src="/images/products/wool-blend-coat.jpg" alt="" />
      </div>
    </section>
  )
}
