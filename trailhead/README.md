# Trailhead — Camping Gear & Essentials Store Front End

A React e-commerce storefront for a camping and outdoor essentials shop: forest green and sand styling, size-aware apparel and boots, and a full bag and checkout flow.

> Demo project. Product photos are in `public/images/products/` as `.jpg` files; each has an `.svg` placeholder with the same name that is shown if the photo fails to load.

## Tech Stack
- React 18 + Hooks
- React Router (routing and URL-driven filters)
- Context API (bag and account state)
- Vite

## Run it
```bash
npm install
npm run dev
```

## Features
- **Shop by category:** Shelter, Sleep, Cooking, Packs, Apparel, Essentials, plus New In and On Sale
- **Filters and sorting:** size, category, new and sale toggles, sort by price or rating. All filters live in the URL, so links and bookmarks show the same results.
- **Search:** multi-word search across name, category, type, colour and tags
- **Product pages:** size picker for apparel and boots (sold-out sizes are struck through), quantity, description and care details, related items
- **Bag:** each size is its own line, quantity controls, remove, empty bag, free-shipping progress ($75 threshold, otherwise $7.95). Saved across reloads.
- **Checkout:** validated contact, shipping and card fields (Luhn check, expiry, CVC), order summary, confirmation page
- **Account:** demo sign-in, order history, track an order by number
- **Newsletter signup** in the footer
- **Info pages:** Sizing Guide, Shipping, Returns, About, Careers, Gift Cards, and more

> Demo limitations: there is no backend. The bag, orders and sign-in are kept in the browser's localStorage. Checkout does not charge a card (only the last four digits are kept), and sign-in is not verified.

## Customising
- **Brand name and contact details:** `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/data/info.js`, `index.html`
- **Colours:** the variables at the top of `src/index.css`
- **Products, sizes and stock:** `src/data/products.js` (set `outOfStock` to hide sizes; use `ONE_SIZE` for gear without sizes)
- **Shipping rules:** `src/lib/pricing.js`

## Structure
```
src/
├── main.jsx / App.jsx / index.css
├── context/   CartContext.jsx (bag lines), StoreContext.jsx (account, orders, newsletter)
├── data/      products.js (catalog, sizes, search & filter), info.js (footer pages)
├── lib/       storage.js (safe localStorage), pricing.js (shipping, money)
├── components/ Navbar, SearchBar, Footer, Hero, CategoryTiles, ProductCard,
│              ProductGrid, ScrollToHash
└── pages/     HomePage, ProductsPage, ProductPage, CartPage, CheckoutPage,
               OrderPage, AccountPage, InfoPage, NotFoundPage
public/
└── images/    hero-camp.svg, products/ (SVG placeholders, one per product id)
```
