import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

const bookingUrl = 'https://topmate.io/binita_rathod/1865836'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/85 backdrop-blur-md border-b border-border/50 shadow-[0_1px_20px_-12px_rgba(0,0,0,0.15)]' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="font-serif text-base md:text-lg tracking-tight text-foreground">
          Guided Growth with Binita
        </a>
        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-[13px] tracking-wide text-foreground/75 hover:text-accent transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-[12px] tracking-wide font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-[var(--shadow-soft)]"
        >
          Book a Free Clarity Conversation
        </a>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden p-2 -mr-2 text-foreground"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <ul className="px-6 py-6 space-y-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)} className="block py-1 text-foreground/85 text-base">
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a href={bookingUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
                Book a Free Clarity Conversation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
