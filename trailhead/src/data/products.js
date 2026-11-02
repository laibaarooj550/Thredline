export const categories = ['All', 'Shelter', 'Sleep', 'Cooking', 'Packs', 'Apparel', 'Essentials']
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
  // Shelter
  { id: 'trail-two-person-tent', name: 'Two-Person Dome Tent', category: 'Shelter', type: 'Tents', price: 219, oldPrice: 249, rating: 4.7, reviews: 318, color: 'Forest', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'tent dome camping shelter backpacking two person', description: 'A freestanding two-person dome with two doors, two vestibules, and quick-pitch poles. Packs into a compact bag for the trail.', care: 'Air dry fully before storing. Fly: 75D silicone-coated polyester. Floor: 40D nylon.' },
  { id: 'silnylon-camp-tarp', name: 'Silnylon Camp Tarp 3 x 3 m', category: 'Shelter', type: 'Tarps', price: 64, oldPrice: null, rating: 4.5, reviews: 142, color: 'Sand', isNew: true, sizes: ONE_SIZE, outOfStock: [], tags: 'tarp shelter rain silnylon camp', description: 'A lightweight silnylon tarp with reinforced corners and eight guy points. Pitch it as a rain fly, a sun shade, or a kitchen shelter.', care: 'Rinse with fresh water after saltwater use and dry before packing. 30D silnylon.' },
  { id: 'folding-camp-chair', name: 'Folding Camp Chair', category: 'Shelter', type: 'Furniture', price: 58, oldPrice: 70, rating: 4.4, reviews: 205, color: 'Olive', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'chair camp folding seat furniture', description: 'A low-slung folding chair with an aluminium frame, a cup holder, and a carry bag with a shoulder strap.', care: 'Wipe clean with a damp cloth. Frame: aluminium. Seat: 600D polyester.' },

  // Sleep
  { id: 'three-season-sleeping-bag', name: '3-Season Sleeping Bag, 20°F', category: 'Sleep', type: 'Sleeping Bags', price: 139, oldPrice: null, rating: 4.7, reviews: 264, color: 'Navy', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'sleeping bag sleep warm 3 season mummy', description: 'A mummy-cut bag rated to 20°F with a draft collar, a zip that opens from either side, and a stuff sack.', care: 'Store loosely in the mesh bag, never compressed. Shell: recycled nylon. Fill: synthetic insulation.' },
  { id: 'insulated-sleeping-pad', name: 'Insulated Sleeping Pad', category: 'Sleep', type: 'Pads', price: 89, oldPrice: 110, rating: 4.6, reviews: 187, color: 'Lime', isNew: true, sizes: ONE_SIZE, outOfStock: [], tags: 'sleeping pad mat insulated sleep ground', description: 'An insulated self-inflating pad with an R-value of 4.2 for cold ground. Lies flat on uneven ground and rolls up small.', care: 'Wipe with a damp cloth. Store unrolled and partly inflated. 20D nylon.' },
  { id: 'inflatable-camp-pillow', name: 'Inflatable Camp Pillow', category: 'Sleep', type: 'Pillows', price: 22, oldPrice: null, rating: 4.2, reviews: 96, color: 'Grey', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'pillow camp inflatable sleep neck', description: 'A soft-touch inflatable pillow with a removable cover. Packs down smaller than a fist.', care: 'Machine wash the cover cold and air dry. TPU bladder, polyester cover.' },

  // Cooking
  { id: 'two-burner-camp-stove', name: 'Two-Burner Camp Stove', category: 'Cooking', type: 'Stoves', price: 95, oldPrice: null, rating: 4.6, reviews: 233, color: 'Black', isNew: true, sizes: ONE_SIZE, outOfStock: [], tags: 'stove camp cooking burner gas two burner', description: 'A compact propane stove with two independent burners, wind-resistant pot supports, and a folding case.', care: 'Wipe down after use and keep dry. Cast iron grates, steel body. Fuel not included.' },
  { id: 'titanium-cookset', name: 'Titanium Nesting Cookset', category: 'Cooking', type: 'Cookware', price: 79, oldPrice: null, rating: 4.8, reviews: 118, color: 'Silver', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'cookset pot pan titanium cooking nesting', description: 'Two nesting pots and a frying pan, with folding handles and a lid that doubles as a plate. Light enough to carry on every trip.', care: 'Hand wash with a soft sponge. Titanium alloy with a non-stick-free finish.' },
  { id: 'gravity-water-filter', name: 'Gravity Water Filter', category: 'Cooking', type: 'Water', price: 52, oldPrice: 65, rating: 4.5, reviews: 301, color: 'Clear', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'water filter gravity purify drinking hydration', description: 'A gravity-fed filter with a 2-litre reservoir and hollow-fibre element. Hang it from a branch and let gravity do the work.', care: 'Backflush after each trip and store above freezing. Do not let the filter element freeze.' },
  { id: 'insulated-steel-bottle', name: 'Insulated Steel Bottle, 1 L', category: 'Cooking', type: 'Hydration', price: 34, oldPrice: null, rating: 4.7, reviews: 452, color: 'Terracotta', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'bottle water flask insulated steel hydration', description: 'A double-wall steel bottle that keeps drinks cold for a full day, with a leak-proof lid.', care: 'Hand wash or top-rack dishwasher. Do not microwave. 18/8 stainless steel.' },

  // Packs
  { id: 'daypack-25', name: '25 L Daypack', category: 'Packs', type: 'Backpacks', price: 84, oldPrice: null, rating: 4.5, reviews: 176, color: 'Charcoal', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'backpack daypack pack hiking bag 25l', description: 'A lightweight 25-litre daypack with a padded back panel, a hydration sleeve, and a side pocket for a water bottle.', care: 'Spot clean. Recycled nylon ripstop with a foam back panel.' },
  { id: 'trekking-pack-65', name: '65 L Trekking Pack', category: 'Packs', type: 'Backpacks', price: 189, oldPrice: 220, rating: 4.8, reviews: 142, color: 'Moss', isNew: true, sizes: ONE_SIZE, outOfStock: [], tags: 'backpack trekking pack 65l backpacking multiday', description: 'A multi-day pack with an adjustable torso, hip belt, and a top lid that converts to a daypack. Carries heavy loads comfortably.', care: 'Spot clean and air dry. Recycled nylon, aluminium frame stay.' },
  { id: 'roll-top-dry-bag', name: 'Roll-Top Dry Bag, 20 L', category: 'Packs', type: 'Bags', price: 26, oldPrice: null, rating: 4.4, reviews: 89, color: 'Orange', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'dry bag waterproof roll top kayak bag', description: 'A waterproof roll-top bag for canoe trips, rainy days, and keeping electronics dry.', care: 'Rinse after use and dry fully before rolling. Coated fabric, PVC-free.' },

  // Apparel
  { id: 'merino-base-tee', name: 'Merino Base Layer Tee', category: 'Apparel', type: 'Layers', price: 68, oldPrice: null, rating: 4.7, reviews: 221, color: 'Charcoal', isNew: false, sizes: CLOTHING_SIZES, outOfStock: ['XS'], tags: 'base layer merino tee shirt wool top hiking', description: 'A lightweight merino tee that regulates temperature, resists odour, and dries quickly.', care: 'Machine wash cold on gentle. Lay flat to dry. 100% merino wool.' },
  { id: 'softshell-jacket', name: 'Softshell Jacket', category: 'Apparel', type: 'Outerwear', price: 149, oldPrice: null, rating: 4.6, reviews: 167, color: 'Olive', isNew: true, sizes: CLOTHING_SIZES, outOfStock: [], tags: 'jacket softshell outerwear hiking wind', description: 'A stretch softshell with a water-resistant finish, a brushed fleece lining, and zip pockets.', care: 'Wash cold with a technical detergent. Tumble dry low. Shell: 94% polyester, 6% elastane.' },
  { id: 'packable-rain-shell', name: 'Packable Rain Shell', category: 'Apparel', type: 'Outerwear', price: 120, oldPrice: 140, rating: 4.5, reviews: 203, color: 'Yellow', isNew: false, sizes: CLOTHING_SIZES, outOfStock: ['S'], tags: 'rain jacket shell waterproof packable outerwear', description: 'A fully waterproof three-layer shell that packs into its own pocket, with taped seams and an adjustable hood.', care: 'Wash cold. Reactivate the water-repellent finish with low heat. 100% nylon.' },
  { id: 'stretch-hiking-pants', name: 'Stretch Hiking Pants', category: 'Apparel', type: 'Bottoms', price: 79, oldPrice: null, rating: 4.4, reviews: 134, color: 'Khaki', isNew: false, sizes: CLOTHING_SIZES, outOfStock: [], tags: 'pants trousers hiking trail stretch', description: 'Quick-dry stretch pants with a gusseted crotch, zip pockets, and a hidden rear pocket.', care: 'Machine wash cold. Hang dry. 92% nylon, 8% elastane.' },
  { id: 'waterproof-hiking-boots', name: 'Waterproof Hiking Boots', category: 'Apparel', type: 'Footwear', price: 175, oldPrice: 195, rating: 4.8, reviews: 286, color: 'Brown', isNew: true, sizes: SHOE_SIZES, outOfStock: ['9'], tags: 'boots hiking shoes waterproof trail footwear', description: 'Mid-cut hiking boots with a waterproof membrane, a grippy lug sole, and a supportive heel cup.', care: 'Clean mud after each hike. Re-treat leather every few months. Full-grain leather and nubuck upper.' },

  // Essentials
  { id: 'rechargeable-headlamp', name: 'Rechargeable Headlamp, 500 lm', category: 'Essentials', type: 'Lighting', price: 39, oldPrice: null, rating: 4.6, reviews: 412, color: 'Black', isNew: true, sizes: ONE_SIZE, outOfStock: [], tags: 'headlamp light lamp torch rechargeable night', description: 'A 500-lumen headlamp with a red-light mode, a motion sensor, and a USB-C charging port.', care: 'Store with the battery partly charged. IPX4 splash resistant.' },
  { id: 'trail-first-aid-kit', name: 'Trail First Aid Kit', category: 'Essentials', type: 'Safety', price: 32, oldPrice: null, rating: 4.7, reviews: 189, color: 'Red', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'first aid kit safety medical bandage camp', description: 'A compact kit with bandages, blister care, antiseptic wipes, tape, and tweezers, in a waterproof pouch.', care: 'Check expiry dates each season and restock what you use. Not a substitute for medical care.' },
  { id: 'multi-tool-pliers', name: 'Multi-Tool Pliers', category: 'Essentials', type: 'Tools', price: 45, oldPrice: null, rating: 4.5, reviews: 258, color: 'Steel', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'multitool multi tool pliers knife tools', description: 'Stainless pliers with a locking knife, bottle opener, and a saw blade.', care: 'Clean and dry after use. Oil the hinge occasionally. Stainless steel.' },
  { id: 'map-and-compass', name: 'Map & Compass Set', category: 'Essentials', type: 'Navigation', price: 18, oldPrice: null, rating: 4.3, reviews: 64, color: 'Yellow', isNew: false, sizes: ONE_SIZE, outOfStock: [], tags: 'compass map navigation orienteering trail', description: 'A baseplate compass with a clear ruler and a waterproof topographic map sheet.', care: 'Wipe clean. Keep away from magnets. Map is printed on tear-resistant paper.' },
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
