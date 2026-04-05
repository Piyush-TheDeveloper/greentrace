import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProductGallery from './components/ProductGallery'
import CartSidebar from './components/CartSidebar'
import ProductPassport from './components/ProductPassport'
import CheckoutFlow from './components/CheckoutFlow'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Impact from './components/Impact'
import { useCartStore } from './store/cartStore'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('home') // "home", "about", "impact"
  const cartOpen = useCartStore((s) => s.cartOpen)
  const setCartOpen = useCartStore((s) => s.setCartOpen)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className='min-h-screen bg-cream font-sans flex flex-col'>
      <Navbar
        onCartClick={() => setCartOpen(true)}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <AnimatePresence>
        {loading && (
          <motion.div
            key='loader'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-cream'
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              className='flex flex-col items-center gap-4'
            >
              <div className='w-14 h-14 rounded-full border-4 border-sage/30 border-t-sage animate-spin' />
              <span className='text-slate text-sm tracking-widest uppercase font-medium'>
                Loading Green-Trace
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className='flex-1'>
        {!loading && currentPage === 'home' && (
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ProductGallery onProductClick={setSelectedProduct} />
            </motion.div>
          </div>
        )}

        {!loading && currentPage === 'about' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <About />
          </motion.div>
        )}

        {!loading && currentPage === 'impact' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Impact />
          </motion.div>
        )}
      </main>

      <AnimatePresence>
        {selectedProduct && (
          <ProductPassport
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && (
          <CartSidebar
            onClose={() => setCartOpen(false)}
            onCheckout={() => {
              setCartOpen(false)
              setCheckoutOpen(true)
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {checkoutOpen && (
          <CheckoutFlow onClose={() => setCheckoutOpen(false)} />
        )}
      </AnimatePresence>

      <Footer />

      <AnimatePresence>
        {checkoutOpen && (
          <CheckoutFlow onClose={() => setCheckoutOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}
