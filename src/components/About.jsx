import { motion } from 'framer-motion'
import { Leaf, Target, Users, Award } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: 'Radical Transparency',
      description:
        "Every product's journey is tracked from raw material to end-of-life. No greenwashing, no hidden impacts.",
    },
    {
      icon: Target,
      title: 'Verified Impact',
      description:
        'Third-party certifications and factory audits ensure every sustainability claim is backed by data.',
    },
    {
      icon: Users,
      title: 'Fair Trade',
      description:
        'We partner exclusively with suppliers that guarantee fair wages and safe working conditions.',
    },
    {
      icon: Award,
      title: 'Continuous Improvement',
      description:
        "We're not perfect. We track our own impact and improve our practices every quarter.",
    },
  ]

  const timeline = [
    {
      year: '2019',
      title: 'The Idea',
      description:
        'Founded by environmental scientists frustrated with greenwashing in retail.',
    },
    {
      year: '2020',
      title: 'First Partnership',
      description:
        'Launched with 12 verified sustainable brands. Introduced the Digital Passport concept.',
    },
    {
      year: '2022',
      title: 'Scale & Impact',
      description:
        'Reached 50+ brands, 50,000+ verified products, 1M+ kg CO₂ offsets.',
    },
    {
      year: '2024',
      title: 'Today',
      description:
        '300+ sustainability-verified brands. 36 products in Green Marketplace.',
    },
  ]

  const stats = [
    { number: '300+', label: 'Verified Brands' },
    { number: '100K+', label: 'Products Tracked' },
    { number: '5M+', label: 'kg CO₂ Offset' },
    { number: '98%', label: 'Customer Trust Score' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
            Our Story
          </p>
          <h1 className='text-4xl md:text-5xl font-bold text-slate mb-6 leading-tight'>
            What is Green<span className='text-sage'>-Trace?</span>
          </h1>
          <p className='text-xl text-slate/70 leading-relaxed'>
            We're building the internet's most transparent sustainable
            marketplace. No algorithms. No greenwashing. Just verified products
            with real impact.
          </p>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='bg-sage text-cream py-16'
      >
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-lg md:text-xl leading-relaxed'>
            <span className='font-semibold'>Our mission:</span> To make
            sustainable living the default choice by providing complete
            transparency on every product's environmental and social impact.
          </p>
        </div>
      </motion.section>

      {/* Stats */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-4 gap-8'
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className='text-center'
            >
              <p className='text-4xl md:text-5xl font-bold text-sage mb-2'>
                {stat.number}
              </p>
              <p className='text-sm text-slate/60 uppercase tracking-wider'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values Section */}
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
              Our Values
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-slate'>
              How We Operate
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-8'
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className='p-6 rounded-xl bg-cream border border-sage/10'
                >
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0'>
                      <Icon className='w-6 h-6 text-sage' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-slate mb-2'>
                        {value.title}
                      </h3>
                      <p className='text-sm text-slate/60 leading-relaxed'>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <p className='text-xs font-semibold text-terracotta uppercase tracking-widest mb-3'>
            Timeline
          </p>
          <h2 className='text-3xl md:text-4xl font-bold text-slate'>
            Our Journey
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='space-y-6'
        >
          {timeline.map((item) => (
            <motion.div
              key={item.year}
              variants={itemVariants}
              className='flex gap-6 md:gap-12'
            >
              <div className='flex flex-col items-center'>
                <div className='w-20 text-right'>
                  <p className='font-bold text-lg text-sage'>{item.year}</p>
                </div>
                <div className='w-1 h-24 bg-sage/20 my-2' />
              </div>
              <div className='flex-1 pt-2 pb-12'>
                <h3 className='font-semibold text-slate mb-2'>{item.title}</h3>
                <p className='text-slate/60 text-sm'>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Highlight */}
      <section className='bg-white/50 py-20'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-2xl md:text-3xl font-bold text-slate mb-4'>
              Built by People Who Care
            </h2>
            <p className='text-slate/60 mb-6'>
              Our team includes environmental scientists, supply chain experts,
              and designers. We live and breathe sustainable impact.
            </p>
            <button className='px-6 py-3 rounded-xl bg-sage text-cream font-medium text-sm hover:bg-sage/90 transition-all'>
              Join Our Team
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='bg-sage rounded-2xl p-12 text-center text-cream'
        >
          <h2 className='text-3xl font-bold mb-4'>Ready to Make an Impact?</h2>
          <p className='mb-6 text-cream/80 max-w-xl mx-auto'>
            Explore our verified sustainable products and join thousands of
            conscious consumers.
          </p>
          <button className='px-6 py-3 rounded-xl bg-cream text-sage font-medium text-sm hover:bg-cream/90 transition-all'>
            Start Shopping
          </button>
        </motion.div>
      </section>
    </div>
  )
}
