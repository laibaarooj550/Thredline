import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { getProduct, isSizeAvailable, stars, badgeFor } from '../data/products'
import { MAX_QTY, money } from '../lib/pricing'
import ProductGrid from '../components/ProductGrid'
import { products } from '../data/products'
import SafeImage from '../components/SafeImage'

export default function ProductPage() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addToCart, count } = useCart()
  const [size, setSize] = useState(null)
  const [qty, setQty] = useState(1)
  const [error, setError] = useState('')
  const [added, setAdded] = useState(null) // { size, qty } after a successful add

  if (!product) {
    return (
      <section className="section">
        <p className="empty">That item isn't available. <Link to="/products" className="btn">Browse all</Link></p>
      </section>
    )
  }

  const badge = badgeFor(product)
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const chooseSize = (s) => {
    setSize(s)
    setError('')
    setAdded(null)
  }

  const submit = () => {
    if (!size) {
      setError('Please select a size.')
      return
    }
    addToCart(product.id, size, qty)
    setAdded({ size, qty })
    setError('')
  }

  return (
    <>
      <section className="section product-page">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link> / <Link to={`/products?cat=${product.category}`}>{product.category}</Link> / <span>{product.name}</span>
        </nav>

        <div className="product-layout">
          <div className="product-media">
            {badge && <span className={`badge ${badge.cls}`}>{badge.label}</span>}
            <SafeImage src={`${import.meta.env.BASE_URL}images/products/${product.id}.jpg`} fallback={`${import.meta.env.BASE_URL}images/products/${product.id}.svg`} alt={product.name} />
          </div>

          <div className="product-info">
            <span className="card-cat">{product.category} · {product.type}</span>
            <h1>{product.name}</h1>
            <div className="card-rating">
              <span className="stars">{stars(product.rating)}</span> <span>{product.rating} · {product.reviews} reviews</span>
            </div>
            <div className="price-row big">
              <span className={`price ${product.oldPrice ? 'on-sale' : ''}`}>{money(product.price)}</span>
              {product.oldPrice && <span className="old">{money(product.oldPrice)}</span>}
            </div>

            <p className="colour-line">Colour: <strong>{product.color}</strong></p>

            <div className="size-head">
              <span>Size</span>
              <Link to="/info/size-guide">Size guide</Link>
            </div>
            <div className="size-grid" role="radiogroup" aria-label="Choose a size">
              {product.sizes.map((s) => {
                const available = isSizeAvailable(product, s)
                return (
                  <button
                    key={s}
                    role="radio"
                    aria-checked={size === s}
                    disabled={!available}
                    className={`size-btn ${size === s ? 'selected' : ''} ${!available ? 'unavailable' : ''}`}
                    onClick={() => chooseSize(s)}
                    title={available ? '' : 'Sold out in this size'}
                  >
                    {s}
                  </button>
                )
              })}
            </div>
            {product.outOfStock.length > 0 && (
              <p className="muted small">Struck-out sizes are sold out.</p>
            )}

            <div className="add-row">
              <label className="select">
                <span>Qty</span>
                <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                  {Array.from({ length: MAX_QTY }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </label>
              <button className="btn btn-block" onClick={submit}>Add to Bag</button>
            </div>

            {error && <p className="form-error" role="alert">{error}</p>}
            {added && (
              <p className="notice success" role="status">
                Added {added.qty} × {product.name} (size {added.size}) to your bag.{' '}
                <Link to="/cart">View bag ({count}) →</Link>
              </p>
            )}

            <div className="details">
              <h3>Description</h3>
              <p>{product.description}</p>
              <h3>Care</h3>
              <p>{product.care}</p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="section-head"><h2>You may also like</h2></div>
          <ProductGrid products={related} />
        </section>
      )}
    </>
  )
}
