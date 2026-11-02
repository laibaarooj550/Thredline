import { Link } from 'react-router-dom'
import { badgeFor, stars } from '../data/products'
import { money } from '../lib/pricing'

export default function ProductCard({ product }) {
  const badge = badgeFor(product)
  return (
    <Link to={`/product/${product.id}`} className="card">
      <div className="card-media">
        {badge && <span className={`badge ${badge.cls}`}>{badge.label}</span>}
        <img src={`/images/products/${product.id}.jpg`} alt={product.name} loading="lazy" />
      </div>
      <div className="card-body">
        <span className="card-cat">{product.category} · {product.color}</span>
        <h3>{product.name}</h3>
        <div className="card-rating" aria-label={`Rated ${product.rating} out of 5`}>
          <span className="stars">{stars(product.rating)}</span> <span>{product.reviews}</span>
        </div>
        <div className="price-row">
          <span className={`price ${product.oldPrice ? 'on-sale' : ''}`}>{money(product.price)}</span>
          {product.oldPrice && <span className="old">{money(product.oldPrice)}</span>}
        </div>
      </div>
    </Link>
  )
}
