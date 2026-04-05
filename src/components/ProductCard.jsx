import { motion } from 'framer-motion'
import { ShoppingBag, Wind, ChevronRight } from 'lucide-react'
import { gradeColors } from '../data/mockData'
import { useCartStore } from '../store/cartStore'

export default function ProductCard({ product, onPassportClick, index }) {
  const addItem = useCartStore((s) => s.addItem)
  const grade = gradeColors[product.sustainabilityGrade]

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className='group bg-white rounded-2xl overflow-hidden border border-sage/15 hover:border-sage/40 hover:shadow-lg hover:shadow-sage/10 transition-all duration-300'
      aria-label={`${product.name} by ${product.brand}`}
    >
      <button
        className='relative overflow-hidden cursor-pointer aspect-[4/3]'
        onClick={() => onPassportClick(product)}
        aria-label={`View product passport for ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

        {/* Grade Badge */}
        <div
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold border ${grade.bg} ${grade.text} ${grade.border}`}
          aria-label={`Sustainability grade ${product.sustainabilityGrade}`}
        >
          Grade {product.sustainabilityGrade}
        </div>

        {/* Carbon Badge */}
        <div className='absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate/80 backdrop-blur-sm'>
          <Wind className='w-3 h-3 text-cream/90' />
          <span className='text-[11px] font-medium text-cream'>
            {product.carbonGrams}g CO₂
          </span>
        </div>

        {/* Passport hint */}
        <div className='absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
          <span className='text-[11px] font-medium text-slate'>
            View Passport
          </span>
          <ChevronRight className='w-3 h-3 text-sage' />
        </div>
      </button>

      <div className='p-4'>
        <div className='mb-3'>
          <p className='text-[11px] font-semibold text-sage uppercase tracking-wider mb-0.5'>
            {product.brand} · {product.category}
          </p>
          <h3 className='font-semibold text-slate text-[15px] leading-snug'>
            {product.name}
          </h3>
          <p className='text-slate/60 text-xs mt-1 leading-relaxed line-clamp-2'>
            {product.shortDesc}
          </p>
        </div>

        {/* Material preview */}
        <div className='flex gap-1 mb-4 flex-wrap'>
          {product.materials.slice(0, 2).map((m) => (
            <span
              key={m.name}
              className='text-[10px] px-2 py-0.5 rounded-full bg-sage/10 text-sage font-medium'
            >
              {m.percentage}% {m.name.split(' ')[0]}
            </span>
          ))}
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-slate font-bold text-lg'>${product.price}</span>
          <button
            onClick={() => addItem(product)}
            aria-label={`Add ${product.name} to cart`}
            className='flex items-center gap-1.5 px-3.5 py-2 bg-sage text-cream text-xs font-semibold rounded-full hover:bg-sage/90 active:scale-95 transition-all duration-150'
          >
            <ShoppingBag className='w-3.5 h-3.5' />
            Add
          </button>
        </div>
      </div>
    </motion.article>
  )
}
