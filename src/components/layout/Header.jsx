import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)

    const el = document.querySelector(href)

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="font-display text-base md:text-xl text-sage-800 font-medium tracking-wide"
        >
          Guided Growth with Binita
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className="text-sm font-body text-gray-600 hover:text-sage-600 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://topmate.io/binita_rathod/1865836"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-white text-sm font-body font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
          style={{ backgroundColor: '#61675C' }}
        >
          Book a Free Clarity Conversation
        </a>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://topmate.io/binita_rathod/1865836"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs font-medium px-3 py-2 rounded-full whitespace-nowrap"
            style={{ backgroundColor: '#61675C' }}
          >
            Book Now
          </a>

          <button
            className="p-2 text-sage-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop Hamburger Hidden */}
        <button
          className="hidden md:hidden"
          aria-label="Toggle menu"
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-cream/98 backdrop-blur-md border-t border-sage-100"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="text-base font-body text-gray-700 hover:text-sage-600 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}