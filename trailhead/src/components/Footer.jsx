import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useStore } from '../context/StoreContext'

function Newsletter() {
  const { subscribe } = useStore()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // null | 'ok' | 'error'

  const submit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setStatus('error')
      return
    }
    subscribe(email)
    setStatus('ok')
    setEmail('')
  }

  return (
    <form className="newsletter" onSubmit={submit} noValidate>
      <h4>Join the list</h4>
      <p>New gear, trip ideas and early access to sales, once a week.</p>
      <div className="newsletter-row">
        <input
          type="email"
          aria-label="Email for newsletter"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus(null) }}
        />
        <button type="submit">Subscribe</button>
      </div>
      {status === 'ok' && <small className="ok">Thanks, you're on the list.</small>}
      {status === 'error' && <small className="error">Enter a valid email address.</small>}
    </form>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>Customer Care</h4>
          <Link to="/info/help">Help Center</Link>
          <Link to="/account">Order Status</Link>
          <Link to="/info/returns">Returns &amp; Exchanges</Link>
          <Link to="/info/shipping">Shipping</Link>
          <Link to="/info/size-guide">Sizing Guide</Link>
        </div>
        <div>
          <h4>Shop</h4>
          <Link to="/products?cat=Shelter">Shelter</Link>
          <Link to="/products?cat=Sleep">Sleep</Link>
          <Link to="/products?cat=Cooking">Cooking</Link>
          <Link to="/products?cat=Packs">Packs</Link>
          <Link to="/products?cat=Apparel">Apparel</Link>
          <Link to="/products?cat=Essentials">Essentials</Link>
          <Link to="/info/gift-cards">Gift Cards</Link>
        </div>
        <div>
          <h4>About</h4>
          <Link to="/info/about">Our Story</Link>
          <Link to="/info/careers">Careers</Link>
          <Link to="/info/stores">Find a Store</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:hello@trailhead.example">hello@trailhead.example</a>
          <span className="footer-text">Mon–Fri, 9am–6pm</span>
        </div>
        <Newsletter />
      </div>
      <div className="footer-bottom">© 2026 Trailhead · Sample store for demonstration purposes</div>
    </footer>
  )
}
