import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useStore } from '../context/StoreContext'
import SearchBar from './SearchBar'

const navLinks = [
  { to: '/products?cat=Shelter', label: 'Shelter', cat: 'Shelter' },
  { to: '/products?cat=Sleep', label: 'Sleep', cat: 'Sleep' },
  { to: '/products?cat=Cooking', label: 'Cooking', cat: 'Cooking' },
  { to: '/products?cat=Packs', label: 'Packs', cat: 'Packs' },
  { to: '/products?cat=Apparel', label: 'Apparel', cat: 'Apparel' },
  { to: '/products?cat=Essentials', label: 'Essentials', cat: 'Essentials' },
  { to: '/products?new=1', label: 'New In', isNew: true },
  { to: '/products?sale=1', label: 'Sale', sale: true, isSale: true },
]

// A nav link is active when the product page's filters match it exactly.
function isActive(link, location) {
  if (location.pathname !== '/products') return false
  const p = new URLSearchParams(location.search)
  if (p.get('q')) return false
  if (link.cat) return p.get('cat') === link.cat && !p.get('new') && !p.get('sale')
  if (link.isNew) return p.get('new') === '1'
  if (link.isSale) return p.get('sale') === '1'
  return false
}

export default function Navbar() {
  const { count } = useCart()
  const { user } = useStore()
  const location = useLocation()
  const firstName = user?.name.split(' ')[0]

  return (
    <header className="site-header">
      <div className="announce">
        Free shipping on orders over $75 &nbsp;·&nbsp; Free returns within 30 days
      </div>
      <div className="header-main">
        <Link to="/" className="brand" aria-label="Trailhead home">
          TRAILHEAD
        </Link>
        <SearchBar />
        <div className="header-actions">
          <Link to="/account" className="action">
            <span className="action-label">{firstName ? `Hi, ${firstName}` : 'Account'}</span>
          </Link>
          <Link to="/cart" className="action bag">
            <span className="action-label">Bag</span>
            <span className="bag-count" aria-label={`${count} items in bag`}>{count}</span>
          </Link>
        </div>
      </div>
      <nav className="site-nav" aria-label="Main">
        <ul>
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className={[isActive(l, location) ? 'active' : '', l.sale ? 'sale' : ''].join(' ').trim()}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li><Link to="/info/size-guide">Sizing</Link></li>
        </ul>
      </nav>
    </header>
  )
}
