import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CategoryTiles from '../components/CategoryTiles'
import ProductGrid from '../components/ProductGrid'
import { products } from '../data/products'

export default function HomePage() {
  const newIn = products.filter((p) => p.isNew).slice(0, 4)
  const onSale = products.filter((p) => p.oldPrice).slice(0, 4)

  return (
    <>
      <Hero />
      <section className="section">
        <CategoryTiles />
      </section>

      <section className="section" id="new-arrivals">
        <div className="section-head">
          <h2>New Arrivals</h2>
          <Link to="/products?new=1">Shop all new →</Link>
        </div>
        <ProductGrid products={newIn} />
      </section>

      <section className="story">
        <div>
          <span className="eyebrow">Our promise</span>
          <h2>Fewer pieces. Better made.</h2>
          <p>We make a small number of styles each season, cut from natural fibres and finished to last years, not months.</p>
          <Link to="/info/about" className="btn btn-ghost-dark">Read our story</Link>
        </div>
      </section>

      <section className="section" id="sale">
        <div className="section-head">
          <h2>On Sale</h2>
          <Link to="/products?sale=1">Shop all sale →</Link>
        </div>
        <ProductGrid products={onSale} />
      </section>
    </>
  )
}
