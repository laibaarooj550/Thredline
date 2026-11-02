import { useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import {
  filterProducts, categories, sortOptions, CLOTHING_SIZES, SHOE_SIZES,
} from '../data/products'

// All filter state lives in the URL (?q= ?cat= ?size= ?sale= ?new= ?sort=),
// so navigation links, search, and bookmarks all show the same results.
const ALL_SIZES = [...CLOTHING_SIZES, ...SHOE_SIZES]

export default function ProductsPage() {
  const [params, setParams] = useSearchParams()

  const cat = categories.includes(params.get('cat')) ? params.get('cat') : 'All'
  const size = ALL_SIZES.includes(params.get('size')) ? params.get('size') : 'All'
  const sort = sortOptions.some((s) => s.value === params.get('sort')) ? params.get('sort') : 'featured'
  const sale = params.get('sale') === '1'
  const isNew = params.get('new') === '1'
  const q = (params.get('q') || '').trim()

  const results = filterProducts({ q, cat, size, sale, isNew, sort })

  const setParam = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'All' || value === 'featured' || value === '0') next.delete(key)
    else next.set(key, value)
    setParams(next)
  }

  const toggle = (key) => setParam(key, params.get(key) === '1' ? '0' : '1')

  const hasFilters = q || cat !== 'All' || size !== 'All' || sale || isNew
  const title = q
    ? `Results for “${q}”`
    : sale
      ? 'Sale'
      : isNew
        ? 'New In'
        : cat !== 'All'
          ? cat
          : 'All Gear'

  return (
    <section className="section">
      <div className="section-head">
        <h2>{title}</h2>
        <span className="result-count">{results.length} item{results.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="toolbar">
        <div className="chips" role="group" aria-label="Category">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${cat === c ? 'active' : ''}`}
              aria-pressed={cat === c}
              onClick={() => setParam('cat', c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="toolbar-right">
          <label className="select">
            <span>Size</span>
            <select value={size} onChange={(e) => setParam('size', e.target.value)}>
              <option value="All">All sizes</option>
              <optgroup label="Apparel">
                {CLOTHING_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
              </optgroup>
              <optgroup label="Shoes">
                {SHOE_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
              </optgroup>
            </select>
          </label>
          <label className="select">
            <span>Sort</span>
            <select value={sort} onChange={(e) => setParam('sort', e.target.value)}>
              {sortOptions.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </label>
        </div>
      </div>

      <div className="chips secondary">
        <button className={`chip ${isNew ? 'active' : ''}`} aria-pressed={isNew} onClick={() => toggle('new')}>New In</button>
        <button className={`chip ${sale ? 'active' : ''}`} aria-pressed={sale} onClick={() => toggle('sale')}>On Sale</button>
        {hasFilters && (
          <button className="clear-link" onClick={() => setParams(new URLSearchParams())}>Clear all</button>
        )}
      </div>

      {q && (
        <div className="active-filters">
          <button className="chip active" onClick={() => setParam('q', '')}>Search: {q} ✕</button>
        </div>
      )}

      <ProductGrid products={results} />
    </section>
  )
}
