import { useState, useEffect, useMemo } from 'react'
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard'
import ProductSkeleton from './ProductSkeleton'
import { products } from '../data/mockData'

const CATEGORIES = ['All', ...new Set(products.map((p) => p.category))]
const GRADES = ['All', 'A', 'B', 'C', 'D', 'E']
const ITEMS_PER_PAGE = 8

export default function ProductGallery({ onProductClick }) {
  const [loaded, setLoaded] = useState(false)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [grade, setGrade] = useState('All')
  const [sortBy, setSortBy] = useState('default')
  const [showFilters, setShowFilters] = useState(false)
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    setDisplayCount(ITEMS_PER_PAGE)
  }, [search, category, grade, sortBy])

  const filtered = products
    .filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase())
      const matchCat = category === 'All' || p.category === category
      const matchGrade = grade === 'All' || p.sustainabilityGrade === grade
      return matchSearch && matchCat && matchGrade
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'carbon-asc') return a.carbonGrams - b.carbonGrams
      if (sortBy === 'grade')
        return a.sustainabilityGrade.localeCompare(b.sustainabilityGrade)
      return 0
    })

  const skeletonIds = useMemo(
    () => Array.from({ length: 8 }, (_, i) => String(i)),
    [],
  )

  const renderSkeletons = () => (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
      {skeletonIds.map((id) => (
        <ProductSkeleton key={`skeleton-loader-${id}`} />
      ))}
    </div>
  )

  const renderEmptyState = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='flex flex-col items-center justify-center py-20 text-slate/50'
    >
      <p className='text-4xl mb-3'>🌿</p>
      <p className='text-base font-medium'>No products match your filters</p>
      <button
        onClick={() => {
          setSearch('')
          setCategory('All')
          setGrade('All')
          setDisplayCount(ITEMS_PER_PAGE)
        }}
        className='mt-3 text-sage text-sm underline'
      >
        Clear all filters
      </button>
    </motion.div>
  )

  const renderProductsContent = () => {
    if (filtered.length === 0) return renderEmptyState()

    return (
      <>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          <AnimatePresence>
            {filtered.slice(0, displayCount).map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onPassportClick={onProductClick}
              />
            ))}
          </AnimatePresence>
        </div>

        {displayCount < filtered.length && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className='flex justify-center mt-10'
          >
            <button
              onClick={() => setDisplayCount((prev) => prev + ITEMS_PER_PAGE)}
              className='flex items-center gap-2 px-6 py-3 rounded-xl bg-sage text-cream font-medium text-sm hover:bg-sage/90 transition-all active:scale-95'
            >
              <span>Load More Products</span>
              <ChevronDown className='w-4 h-4' />
            </button>
          </motion.div>
        )}
      </>
    )
  }

  return (
    <section aria-label='Product gallery'>
      {/* Header */}
      <div className='mb-8'>
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6'
        >
          <div>
            <p className='text-xs font-semibold text-terracotta uppercase tracking-widest mb-1'>
              Verified Sustainable
            </p>
            <h1 className='text-3xl sm:text-4xl font-bold text-slate tracking-tight'>
              The Green Marketplace
            </h1>
            <p className='text-slate/60 mt-1 text-sm max-w-lg'>
              Every product carries a full Digital Passport — materials,
              factory, and end-of-life verified.
            </p>
          </div>
          <div className='text-right hidden sm:block'>
            <p className='text-3xl font-bold text-sage'>{products.length}</p>
            <p className='text-xs text-slate/50 uppercase tracking-wider'>
              Verified Products
            </p>
          </div>
        </motion.div>

        {/* Search & Filter bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className='flex flex-col sm:flex-row gap-3'
        >
          <div className='relative flex-1'>
            <Search className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40' />
            <input
              type='search'
              placeholder='Search products or brands…'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label='Search products'
              className='w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-sage/20 text-sm text-slate placeholder:text-slate/40 focus:outline-none focus:border-sage/60 focus:ring-2 focus:ring-sage/10 transition-all'
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label='Sort products'
            className='px-4 py-2.5 rounded-xl bg-white border border-sage/20 text-sm text-slate focus:outline-none focus:border-sage/60 transition-all cursor-pointer'
          >
            <option value='default'>Sort: Featured</option>
            <option value='grade'>Sort: Best Grade</option>
            <option value='carbon-asc'>Sort: Lowest Carbon</option>
            <option value='price-asc'>Sort: Price ↑</option>
            <option value='price-desc'>Sort: Price ↓</option>
          </select>

          <button
            onClick={() => setShowFilters(!showFilters)}
            aria-expanded={showFilters}
            aria-label='Toggle filters'
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
              showFilters
                ? 'bg-sage text-cream border-sage'
                : 'bg-white border-sage/20 text-slate hover:border-sage/40'
            }`}
          >
            <SlidersHorizontal className='w-4 h-4' />
            Filters
          </button>
        </motion.div>

        {/* Filter chips */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className='mt-3 overflow-hidden'
            >
              <div className='p-4 bg-white rounded-xl border border-sage/15 space-y-3'>
                <div>
                  <p className='text-xs font-semibold text-slate/50 uppercase tracking-wider mb-2'>
                    Category
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {CATEGORIES.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCategory(c)}
                        className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                          category === c
                            ? 'bg-sage text-cream border-sage'
                            : 'bg-sage/5 text-slate border-sage/15 hover:border-sage/40'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className='text-xs font-semibold text-slate/50 uppercase tracking-wider mb-2'>
                    Sustainability Grade
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {GRADES.map((g) => (
                      <button
                        key={g}
                        onClick={() => setGrade(g)}
                        className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${
                          grade === g
                            ? 'bg-sage text-cream border-sage'
                            : 'bg-sage/5 text-slate border-sage/15 hover:border-sage/40'
                        }`}
                      >
                        {g === 'All' ? 'All Grades' : `Grade ${g}`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Grid */}
      {loaded ? renderProductsContent() : renderSkeletons()}

      {loaded && filtered.length > 0 && (
        <p className='text-center text-xs text-slate/40 mt-8'>
          Showing {Math.min(displayCount, filtered.length)} of {filtered.length}{' '}
          filtered products
        </p>
      )}
    </section>
  )
}
