import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StoreProvider } from './context/StoreContext'
import { CartProvider } from './context/CartContext'
import ScrollToHash from './components/ScrollToHash'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderPage from './pages/OrderPage'
import AccountPage from './pages/AccountPage'
import InfoPage from './pages/InfoPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <StoreProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToHash />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/orders/:id" element={<OrderPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/info/:slug" element={<InfoPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </StoreProvider>
  )
}
