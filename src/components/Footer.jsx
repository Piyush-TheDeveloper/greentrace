import { Leaf, Mail, MapPin, Phone, Linkedin, Share2, Code } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Product',
      links: ['Shop', 'Collections', 'New Arrivals', 'Sale'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Impact Reports', 'Careers', 'Blog'],
    },
    {
      title: 'Support',
      links: ['Contact', 'FAQ', 'Shipping', 'Returns'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    },
  ]

  const socialLinks = [
    { id: 'twitter', icon: Share2, label: 'Twitter' },
    { id: 'code', icon: Code, label: 'Code' },
    { id: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className='bg-slate text-cream'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Top Section - Brand & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 pb-12 border-b border-cream/10'
        >
          {/* Brand Section */}
          <div>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 rounded-full bg-sage flex items-center justify-center'>
                <Leaf className='w-5 h-5 text-cream' />
              </div>
              <div>
                <h2 className='text-2xl font-bold'>
                  Green<span className='text-sage'>-Trace</span>
                </h2>
                <p className='text-xs text-cream/60 uppercase tracking-widest'>
                  Verified Sustainable Marketplace
                </p>
              </div>
            </div>
            <p className='text-cream/70 text-sm leading-relaxed max-w-xs mt-4'>
              We believe in radical transparency for sustainable living. Every
              product carries a full Digital Passport — materials, factory, and
              end-of-life verified.
            </p>
          </div>

          {/* Contact Section */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-lg mb-4'>Get in Touch</h3>
            <div className='space-y-3'>
              <a
                href='mailto:hello@greentrace.com'
                className='flex items-center gap-3 text-cream/70 hover:text-sage transition-colors group'
              >
                <Mail className='w-5 h-5 text-sage group-hover:scale-110 transition-transform' />
                <span className='text-sm'>hello@greentrace.com</span>
              </a>
              <a
                href='tel:+1234567890'
                className='flex items-center gap-3 text-cream/70 hover:text-sage transition-colors group'
              >
                <Phone className='w-5 h-5 text-sage group-hover:scale-110 transition-transform' />
                <span className='text-sm'>+1 (234) 567-890</span>
              </a>
              <div className='flex items-center gap-3 text-cream/70'>
                <MapPin className='w-5 h-5 text-sage flex-shrink-0' />
                <div className='text-sm'>
                  <p>123 Green Street</p>
                  <p>Portland, Oregon 97201</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-cream/10'
        >
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className='font-semibold text-sm mb-4 uppercase tracking-wider'>
                {section.title}
              </h3>
              <ul className='space-y-2'>
                {section.links.map((link) => (
                  <li key={link}>
                    <button className='text-cream/60 hover:text-sage text-xs transition-colors text-left bg-none border-none cursor-pointer'>
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section - Socials & Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-col md:flex-row justify-between items-center gap-6'
        >
          <p className='text-cream/50 text-xs'>
            © {currentYear} Green-Trace. All rights reserved. Made with 🌱 for a
            sustainable future.
          </p>

          <div className='flex items-center gap-4'>
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <button
                  key={social.id}
                  aria-label={social.label}
                  className='w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sage hover:bg-sage hover:text-cream transition-all'
                >
                  <Icon className='w-4 h-4' />
                </button>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Sustainability Message */}
      <div className='bg-sage/10 border-t border-cream/10 py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-center text-xs text-cream/60'>
            🌍 Every purchase offsets carbon emissions. Learn about our impact →
          </p>
        </div>
      </div>
    </footer>
  )
}
