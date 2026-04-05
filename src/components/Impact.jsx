import { motion } from 'framer-motion'
import { TrendingDown, Users, Leaf, Award } from 'lucide-react'
import { products } from '../data/mockData'

export default function Impact() {
  // Calculate impact metrics based on all products
  const totalCarbon = products.reduce((sum, p) => sum + p.carbonGrams, 0)
  const avgSustainabilityGrade = (() => {
    const gradeValues = { A: 5, B: 4, C: 3, D: 2, E: 1 }
    const avg =
      products.reduce((sum, p) => sum + gradeValues[p.sustainabilityGrade], 0) /
      products.length
    return avg.toFixed(1)
  })()

  const totalWorkers = products.reduce((sum, p) => sum + p.factory.workers, 0)
  const fairTradeCertified = products.filter((p) =>
    p.factory.certifications.includes('Fair Trade'),
  ).length

  const impactMetrics = [
    {
      icon: Leaf,
      title: 'Total CO₂ Tracked',
      value: `${(totalCarbon / 1000).toFixed(1)}kg`,
      description: 'Across all 36 verified products',
      color: 'sage',
    },
    {
      icon: TrendingDown,
      title: 'Avg Carbon Grade',
      value: `${avgSustainabilityGrade}/5.0`,
      description: 'Sustainability score average',
      color: 'terracotta',
    },
    {
      icon: Users,
      title: 'Workers Supported',
      value: `${totalWorkers.toLocaleString()}+`,
      description: 'Fair wage employment across factories',
      color: 'sage',
    },
    {
      icon: Award,
      title: 'Fair Trade Products',
      value: `${fairTradeCertified}`,
      description: 'Ensuring ethical supply chains',
      color: 'terracotta',
    },
  ]

  const impactAreas = [
    {
      title: 'Environmental Impact',
      metrics: [
        {
          label: 'Carbon Reduced',
          value: '1.2M kg',
          detail: 'Through sustainable material choices annually',
        },
        {
          label: 'Water Saved',
          value: '500M L',
          detail: 'Organic cotton vs conventional cotton production',
        },
        {
          label: 'Plastic Diverted',
          value: '200K tons',
          detail: 'Ocean plastic and recycled materials used',
        },
        {
          label: 'Renewable Energy',
          value: '85%',
          detail: 'Partner factories powered by renewables',
        },
      ],
    },
    {
      title: 'Social Impact',
      metrics: [
        {
          label: 'Fair Wages',
          value: '2.3x',
          detail: 'Average multiplier above local minimum wage',
        },
        {
          label: 'Worker Safety',
          value: '100%',
          detail: 'SA8000 certified facilities',
        },
        {
          label: 'Communities Supported',
          value: '45',
          detail: 'Across 28 countries worldwide',
        },
        {
          label: 'Jobs Created',
          value: '8,500',
          detail: 'Direct and indirect employment',
        },
      ],
    },
  ]

  const certifications = [
    { name: 'B-Corp', count: 12, color: 'sage' },
    { name: 'Fair Trade', count: 14, color: 'terracotta' },
    { name: 'GOTS', count: 11, color: 'sage' },
    { name: 'FSC', count: 13, color: 'terracotta' },
    { name: 'ISO 14001', count: 9, color: 'sage' },
    { name: 'Rainforest Alliance', count: 6, color: 'terracotta' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className='min-h-screen bg-cream'>
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16'
      >
        <div className='text-center max-w-2xl mx-auto'>
          <p className='text-xs font-semibold text-terracotta uppercase tracking-widest mb-3'>
            Verified Impact
          </p>
          <h1 className='text-4xl md:text-5xl font-bold text-slate mb-6 leading-tight'>
            Our Impact on the Planet
          </h1>
          <p className='text-xl text-slate/70 leading-relaxed'>
            Green-Trace verifies real-world environmental and social impact. No
            greenwashing. Just hard facts backed by data and certifications.
          </p>
        </div>
      </motion.section>

      {/* Key Metrics */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
        >
          {impactMetrics.map((metric) => {
            const Icon = metric.icon
            const bgColor =
              metric.color === 'sage' ? 'bg-sage/10' : 'bg-terracotta/10'
            const textColor =
              metric.color === 'sage' ? 'text-sage' : 'text-terracotta'
            return (
              <motion.div
                key={metric.title}
                variants={itemVariants}
                className={`p-6 rounded-xl ${bgColor} border border-${metric.color}/10`}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-${metric.color}/20 flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${textColor}`} />
                </div>
                <h3 className='font-semibold text-slate mb-1'>
                  {metric.title}
                </h3>
                <p className={`text-2xl font-bold ${textColor} mb-2`}>
                  {metric.value}
                </p>
                <p className='text-xs text-slate/60'>{metric.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Impact Areas Grid */}
      <section className='bg-white/50 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <p className='text-xs font-semibold text-terracotta uppercase tracking-widest mb-3'>
              Measurable Outcomes
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-slate'>
              How We Make a Difference
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='space-y-8'
          >
            {impactAreas.map((area) => (
              <motion.div key={area.title} variants={itemVariants}>
                <h3 className='text-2xl font-bold text-slate mb-6'>
                  {area.title}
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                  {area.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className='p-6 rounded-xl bg-cream border border-sage/10 hover:border-sage/30 transition-all'
                    >
                      <p className='text-sm text-slate/60 mb-2'>
                        {metric.label}
                      </p>
                      <p className='text-3xl font-bold text-sage mb-2'>
                        {metric.value}
                      </p>
                      <p className='text-xs text-slate/60'>{metric.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <p className='text-xs font-semibold text-terracotta uppercase tracking-widest mb-3'>
            Third-Party Verification
          </p>
          <h2 className='text-3xl md:text-4xl font-bold text-slate'>
            Industry Certifications
          </h2>
          <p className='text-slate/60 mt-4 max-w-2xl mx-auto'>
            All our products are verified by independent, internationally
            recognized certification bodies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'
        >
          {certifications.map((cert) => {
            const bgColor =
              cert.color === 'sage' ? 'bg-sage/10' : 'bg-terracotta/10'
            const textColor =
              cert.color === 'sage' ? 'text-sage' : 'text-terracotta'
            return (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                className={`p-4 rounded-lg ${bgColor} border border-${cert.color}/10 text-center`}
              >
                <p className={`text-2xl font-bold ${textColor}`}>
                  {cert.count}
                </p>
                <p className='text-xs text-slate/60 mt-1'>{cert.name}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Carbon Breakdown */}
      <section className='bg-sage text-cream py-20'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold mb-4'>Average CO₂ Breakdown</h2>
            <p className='text-cream/80'>
              Per product lifecycle from raw material to customer delivery
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-2 md:grid-cols-4 gap-6'
          >
            {[
              { phase: 'Raw Material', percentage: 40, grams: 90 },
              { phase: 'Manufacturing', percentage: 30, grams: 68 },
              { phase: 'Shipping', percentage: 20, grams: 45 },
              { phase: 'Packaging', percentage: 10, grams: 23 },
            ].map((item) => (
              <motion.div
                key={item.phase}
                variants={itemVariants}
                className='text-center'
              >
                <div className='relative w-24 h-24 mx-auto mb-4'>
                  <svg
                    viewBox='0 0 100 100'
                    className='w-full h-full transform -rotate-90'
                  >
                    <circle
                      cx='50'
                      cy='50'
                      r='40'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className='text-cream/20'
                    />
                    <circle
                      cx='50'
                      cy='50'
                      r='40'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeDasharray={`${(item.percentage / 100) * 251.2} 251.2`}
                      className='text-cream transition-all duration-1000'
                    />
                  </svg>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <p className='text-lg font-bold'>{item.percentage}%</p>
                  </div>
                </div>
                <p className='font-semibold text-sm mb-1'>{item.phase}</p>
                <p className='text-xs text-cream/70'>{item.grams}g CO₂</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='bg-gradient-to-br from-sage/10 to-terracotta/10 rounded-2xl p-12 text-center border border-sage/20'
        >
          <h2 className='text-3xl font-bold text-slate mb-4'>
            Join the Impact Movement
          </h2>
          <p className='text-slate/70 max-w-xl mx-auto mb-6'>
            Every purchase supports verified sustainable production. Together,
            we're creating a marketplace that prioritizes people and planet over
            profit.
          </p>
          <button className='px-6 py-3 rounded-xl bg-sage text-cream font-medium text-sm hover:bg-sage/90 transition-all'>
            Explore Verified Products
          </button>
        </motion.div>
      </section>

      {/* Footer Message */}
      <section className='bg-slate/5 py-8 border-t border-sage/10'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-sm text-slate/60'>
            📊 All impact data is updated quarterly. Download our full impact
            report →
          </p>
        </div>
      </section>
    </div>
  )
}
