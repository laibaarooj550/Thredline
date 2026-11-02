import { Link } from 'react-router-dom'
import SafeImage from './SafeImage'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">Trail-Tested Gear</span>
        <h1>Gear for the<br />long way round.</h1>
        <p>Tents, sleep systems, cooking kit and essentials, chosen for reliability and tested on real trips from the first night out.</p>
        <div className="hero-actions">
          <Link to="/products?new=1" className="btn">Shop New In</Link>
          <Link to="/products?cat=Shelter" className="btn btn-ghost">Shop Shelter</Link>
        </div>
      </div>
      <div className="hero-panel" aria-hidden="true">
        <SafeImage src={`${import.meta.env.BASE_URL}images/hero-camp.jpg`} fallback={`${import.meta.env.BASE_URL}images/hero-camp.svg`} alt="" />
      </div>
    </section>
  )
}
