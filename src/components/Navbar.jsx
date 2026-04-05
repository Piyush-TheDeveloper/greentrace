import { Leaf, ShoppingBag, Wind } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCartStore } from '../store/cartStore'

export default function Navbar({ onCartClick, currentPage, onNavigate }) {
  const itemCount = useCartStore((s) => s.items.reduce((n, i) => n + i.qty, 0))
  const totalCarbon = useCartStore((s) =>
    s.items.reduce((n, i) => n + i.carbonGrams * i.qty, 0),
  )

  const navLinks = [
    { label: 'Shop', page: 'home' },
    { label: 'Impact', page: 'impact' },
    { label: 'About', page: 'about' },
  ]

  return (
    <header className='sticky top-0 z-30 bg-cream/90 backdrop-blur-md border-b border-sage/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
        <button
          onClick={() => onNavigate('home')}
          className='flex items-center gap-2.5 group'
        >
          <div className='w-8 h-8 rounded-full bg-sage flex items-center justify-center group-hover:bg-sage/90 transition-colors'>
            <Leaf className='w-4 h-4 text-cream' />
          </div>
          <span className='font-semibold text-slate tracking-tight text-lg hover:text-sage transition-colors'>
            Green<span className='text-sage'>-Trace</span>
          </span>
        </button>

        <nav className='hidden md:flex items-center gap-8 text-sm text-slate/70 font-medium'>
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate(link.page)}
              className={`relative transition-colors ${
                currentPage === link.page
                  ? 'text-sage'
                  : 'text-slate/70 hover:text-sage'
              }`}
            >
              {link.label}
              {currentPage === link.page && (
                <motion.div
                  layoutId='activeNav'
                  className='absolute bottom-0 left-0 right-0 h-0.5 bg-sage'
                  transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          {totalCarbon > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className='hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/30'
            >
              <Wind className='w-3.5 h-3.5 text-terracotta' />
              <span className='text-xs font-medium text-terracotta'>
                {totalCarbon}g CO₂
              </span>
            </motion.div>
          )}

          <button
            onClick={onCartClick}
            aria-label={`Open cart, ${itemCount} items`}
            className='relative p-2.5 rounded-full hover:bg-sage/10 transition-colors'
          >
            <ShoppingBag className='w-5 h-5 text-slate' />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className='absolute -top-0.5 -right-0.5 w-4.5 h-4.5 min-w-[18px] min-h-[18px] bg-terracotta text-cream text-[10px] font-bold rounded-full flex items-center justify-center leading-none px-1'
              >
                {itemCount}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
