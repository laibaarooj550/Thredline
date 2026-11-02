import { Link } from 'react-router-dom'

const tiles = [
  { to: '/products?cat=Shelter', label: 'Shelter', sub: 'Tents, tarps, chairs', tone: 'tone-sage' },
  { to: '/products?cat=Sleep', label: 'Sleep', sub: 'Bags, pads, pillows', tone: 'tone-clay' },
  { to: '/products?cat=Packs', label: 'Packs', sub: 'Daypacks, trekking, dry bags', tone: 'tone-stone' },
  { to: '/products?cat=Essentials', label: 'Essentials', sub: 'Lights, first aid, tools', tone: 'tone-sand' },
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
