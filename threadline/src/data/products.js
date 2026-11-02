export const categories = ['All', 'Men', 'Women', 'Shoes', 'Accessories']
export const CLOTHING_SIZES = ['XS', 'S', 'M', 'L', 'XL']
export const SHOE_SIZES = ['7', '8', '9', '10', '11']
export const ONE_SIZE = ['One Size']
export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

// Each product has a slug id (used in URLs) and an image in public/images/products.
// outOfStock lists sizes that cannot be bought.
export const products = [
  { id: 'essential-crew-tee', name: 'Essential Crew Tee', category: 'Men', type: 'Tops', price: 24, oldPrice: null, rating: 4.7, reviews: 412, color: 'Navy', isNew: false, sizes: CLOTHING_SIZES, outOfStock: ['XL'], tags: 't-shirt tshirt tee basic cotton', description: 'A midweight organic cotton tee with a soft, slightly boxy fit and a reinforced collar that holds its shape wash after wash.', care: 'Machine wash cold, tumble dry low. 100% organic cotton.' },
  { id: 'oxford-button-down', name: 'Oxford Button-Down Shirt', category: 'Men', type: 'Tops', price: 58, oldPrice: null, rating: 4.4, reviews: 188, color: 'White', isNew: true, sizes: CLOTHING_SIZES, outOfStock: [], tags: 'shirt button down oxford office work', description: 'A classic oxford cloth shirt with a button-down collar, cut for an easy everyday fit.', care: 'Machine wash warm. Iron on medium heat. 100% cotton.' },
  { id: 'slim-stretch-jeans', name: 'Slim Stretch Jeans', category: 'Men', type: 'Bottoms', price: 68, oldPrice: 89, rating: 4.6, reviews: 530, color: 'Indigo', isNew: false, sizes: CLOTHING_SIZES, outOfStock: ['XS'], tags: 'jeans denim pants trousers slim', description: 'Slim-fit jeans with a little stretch for comfort through the day. Dark indigo wash.', care: 'Wash inside out in cold water. 98% cotton, 2% elastane.' },
  { id: 'quilted-field-jacket', name: 'Quilted Field Jacket', category: 'Men', type: 'Outerwear', price: 145, oldPrice: 185, rating: 4.8, reviews: 96, color: 'Olive', isNew: true, sizes: CLOTHING_SIZES, outOfStock: [], tags: 'jacket coat outerwear quilted winter field', description: 'A lightweight quilted jacket with a windproof shell, two chest pockets, and an insulated lining for cool mornings.', care: 'Dry clean recommended. Shell: 100% nylon. Lining: recycled polyester.' },
  { id: 'relaxed-hoodie', name: 'Relaxed Fleece Hoodie', category: 'Men', type: 'Tops', price: 62, oldPrice: null, rating: 4.5, reviews: 264, color: 'Oat', isNew: false, sizes: CLOTHING_SIZES, outOfStock: [], tags: 'hoodie sweatshirt fleece hooded casual', description: 'Brushed fleece hoodie with a relaxed shape, kangaroo pocket, and a drawcord hood.', care: 'Machine wash cold, hang dry. 80% cotton, 20% polyester.' },
  { id: 'chino-shorts', name: 'Stretch Chino Shorts', category: 'Men', type: 'Bottoms', price: 44, oldPrice: null, rating: 4.1, reviews: 77, color: 'Khaki', isNew: false, sizes: CLOTHING_SIZES, outOfStock: ['S'], tags: 'shorts chino summer casual', description: 'Lightweight chino shorts with a bit of stretch, made for warm days and easy movement.', care: 'Machine wash cold. 97% cotton, 3% elastane.' },
  { id: 'linen-wrap-dress', name: 'Linen Wrap Midi Dress', category: 'Women', type: 'Dresses', price: 98, oldPrice: 128, rating: 4.9, reviews: 341, color: 'Sage', isNew: true, sizes: CLOTHING_SIZES, outOfStock: ['XS'], tags: 'dress midi linen wrap summer', description: 'A breathable linen midi dress with a wrap front, tie waist, and flowing skirt.', care: 'Hand wash cold, line dry. 100% European linen.' },
  { id: 'ribbed-knit-top', name: 'Ribbed Knit Top', category: 'Women', type: 'Tops', price: 42, oldPrice: null, rating: 4.3, reviews: 152, color: 'Cream', isNew: false, sizes: CLOTHING_SIZES, outOfStock: [], tags: 'top knit ribbed sweater shirt', description: 'A fitted ribbed knit top with a crew neck that layers easily under jackets or on its own.', care: 'Hand wash cold, lay flat to dry. 60% cotton, 40% viscose.' },
  { id: 'high-rise-wide-jeans', name: 'High-Rise Wide-Leg Jeans', category: 'Women', type: 'Bottoms', price: 74, oldPrice: null, rating: 4.6, reviews: 289, color: 'Light Wash', isNew: true, sizes: CLOTHING_SIZES, outOfStock: [], tags: 'jeans denim wide leg high rise pants', description: 'High-rise wide-leg jeans in a light vintage wash, with a relaxed leg and a flattering waist.', care: 'Wash cold, inside out. 100% cotton denim.' },
  { id: 'pleated-midi-skirt', name: 'Pleated Midi Skirt', category: 'Women', type: 'Bottoms', price: 58, oldPrice: 72, rating: 4.4, reviews: 118, color: 'Terracotta', isNew: false, sizes: CLOTHING_SIZES, outOfStock: [], tags: 'skirt midi pleated pleats', description: 'Sunray-pleated midi skirt with an elastic waist, light and swingy for everyday wear.', care: 'Machine wash cold on gentle. 100% polyester.' },
  { id: 'cropped-denim-jacket', name: 'Cropped Denim Jacket', category: 'Women', type: 'Outerwear', price: 88, oldPrice: null, rating: 4.5, reviews: 203, color: 'Mid Blue', isNew: false, sizes: CLOTHING_SIZES, outOfStock: ['L'], tags: 'jacket denim cropped outerwear', description: 'A cropped denim jacket with a classic structure, metal buttons, and a soft, worn-in feel.', care: 'Wash cold, inside out. 100% cotton denim.' },
  { id: 'wool-blend-coat', name: 'Wool-Blend Long Coat', category: 'Women', type: 'Outerwear', price: 210, oldPrice: 260, rating: 4.7, reviews: 74, color: 'Camel', isNew: true, sizes: CLOTHING_SIZES, outOfStock: ['XS', 'S'], tags: 'coat wool winter long outerwear jacket', description: 'A long, double-breasted coat in a wool blend with a tailored waist and deep pockets.', care: 'Dry clean only. 70% wool, 30% polyester.' },
  { id: 'canvas-low-sneakers', name: 'Canvas Low-Top Sneakers', category: 'Shoes', type: 'Footwear', price: 64, oldPrice: null, rating: 4.6, reviews: 611, color: 'White', isNew: false, sizes: SHOE_SIZES, outOfStock: ['7'], tags: 'sneakers shoes trainers canvas low top', description: 'Classic low-top canvas sneakers with a cushioned insole and a rubber sole.', care: 'Spot clean with mild soap. Canvas upper, rubber sole.' },
  { id: 'leather-chelsea-boots', name: 'Leather Chelsea Boots', category: 'Shoes', type: 'Footwear', price: 165, oldPrice: 195, rating: 4.8, reviews: 157, color: 'Cognac', isNew: true, sizes: SHOE_SIZES, outOfStock: ['11'], tags: 'boots shoes chelsea leather winter', description: 'Full-grain leather Chelsea boots with elastic side panels and a sturdy stacked heel.', care: 'Condition leather every few months. Full-grain leather upper.' },
  { id: 'daily-runner-pro', name: 'Daily Runner Pro', category: 'Shoes', type: 'Footwear', price: 110, oldPrice: null, rating: 4.5, reviews: 342, color: 'Graphite', isNew: true, sizes: SHOE_SIZES, outOfStock: [], tags: 'sneakers running shoes trainers athletic', description: 'Lightweight running sneakers with responsive foam and a breathable knit upper.', care: 'Hand wash with cool water and mild soap. Air dry.' },
  { id: 'canvas-tote', name: 'Canvas Everyday Tote', category: 'Accessories', type: 'Bags', price: 36, oldPrice: null, rating: 4.4, reviews: 129, color: 'Natural', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'bag tote canvas handbag accessories', description: 'A sturdy natural canvas tote with leather handles and an inside zip pocket.', care: 'Spot clean. 100% organic cotton canvas.' },
  { id: 'merino-beanie', name: 'Merino Ribbed Beanie', category: 'Accessories', type: 'Hats', price: 28, oldPrice: null, rating: 4.7, reviews: 245, color: 'Rust', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'hat beanie winter wool merino accessories', description: 'Soft merino wool beanie with a ribbed knit and a folded cuff.', care: 'Hand wash cold, lay flat to dry. 100% merino wool.' },
  { id: 'leather-belt', name: 'Full-Grain Leather Belt', category: 'Accessories', type: 'Belts', price: 49, oldPrice: null, rating: 4.6, reviews: 98, color: 'Brown', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'belt leather accessories', description: 'A full-grain leather belt with a brushed brass buckle. Trim to fit at home.', care: 'Wipe clean with a dry cloth. Full-grain leather.' },
]

export function getProduct(id) {
  return products.find((p) => p.id === id) || null
}

export function isSizeAvailable(p, size) {
  return p.sizes.includes(size) && !p.outOfStock.includes(size)
}

// Every search term must appear in the product's name, category, type, color or tags.
export function searchProducts(list, query) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (terms.length === 0) return list
  return list.filter((p) => {
    const haystack = `${p.name} ${p.category} ${p.type} ${p.color} ${p.tags}`.toLowerCase()
    return terms.every((t) => haystack.includes(t))
  })
}

export function filterProducts({ q = '', cat = 'All', size = 'All', sale = false, isNew = false, sort = 'featured' }) {
  let list = searchProducts(products, q)
  if (cat !== 'All') list = list.filter((p) => p.category === cat)
  if (size !== 'All') list = list.filter((p) => isSizeAvailable(p, size))
  if (sale) list = list.filter((p) => p.oldPrice != null)
  if (isNew) list = list.filter((p) => p.isNew)
  list = [...list]
  if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
  if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)
  return list
}

export function badgeFor(p) {
  if (p.oldPrice) return { cls: 'sale', label: 'Sale' }
  if (p.isNew) return { cls: 'new', label: 'New' }
  return null
}

export function stars(rating) {
  const full = Math.round(rating)
  return '★'.repeat(full) + '☆'.repeat(5 - full)
}
