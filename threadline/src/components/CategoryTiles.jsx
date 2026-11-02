import { Link } from 'react-router-dom'

const tiles = [
  { to: '/products?cat=Men', label: 'Men', sub: 'Tees, denim, outerwear', tone: 'tone-sage' },
  { to: '/products?cat=Women', label: 'Women', sub: 'Dresses, knits, coats', tone: 'tone-clay' },
  { to: '/products?cat=Shoes', label: 'Shoes', sub: 'Sneakers & boots', tone: 'tone-stone' },
  { to: '/products?cat=Accessories', label: 'Accessories', sub: 'Bags, hats, belts', tone: 'tone-sand' },
]

export default function CategoryTiles() {
  return (
    <div className="tiles">
      {tiles.map((t) => (
        <Link key={t.label} to={t.to} className={`tile ${t.tone}`}>
          <strong>{t.label}</strong>
          <small>{t.sub}</small>
        </Link>
      ))}
    </div>
  )
}
