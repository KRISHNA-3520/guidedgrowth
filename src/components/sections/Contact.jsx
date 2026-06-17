import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView.js'
import { Mail, MessageCircle, Instagram, Linkedin } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'guidedgrowthwithbinita@gmail.com',
    href: 'mailto:guidedgrowthwithbinita@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 95297 03353',
    href: 'https://wa.me/919529703353',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@guidedgrowthwithbinita',
    href: 'https://instagram.com/guidedgrowthwithbinita',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Binita Darekar',
    href: 'https://www.linkedin.com/in/binitarathod/',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" ref={ref} className="py-16 text-foreground">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] uppercase tracking-[0.32em] font-medium" style={{ color: '#BD9B6E' }}>
            Contact
          </p>
          <motion.h2
            className="mt-4 font-serif text-3xl md:text-5xl text-foreground"
            style={{ color: '#282624' }}
          >
            Let's Connect
          </motion.h2>
          <div className="gold-rule w-20 mx-auto mt-6" style={{ height: '1px', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #BD9B6E 50%, rgba(0, 0, 0, 0) 100%)' }}></div>
        </motion.div>

        {/* Contact List */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 space-y-3 text-left"
        >
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <li key={i}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border transition-all hover:border-opacity-100 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'rgba(247, 245, 244, 0.6)',
                  borderColor: 'rgba(232, 224, 212, 0.6)',
                  padding: '16px 20px',
                }}
              >
                {/* Icon Circle */}
                <span
                  className="h-10 w-10 rounded-full flex items-center justify-center text-base shrink-0 group-hover:bg-opacity-100 transition-colors"
                  style={{
                    backgroundColor: '#D3CDC5',
                    color: '#61675C',
                  }}
                >
                  <Icon size={17} strokeWidth={1.5} />
                </span>

                {/* Contact Info */}
                <span className="flex-1">
                  <span className="block text-[11px] uppercase tracking-[0.25em] font-medium" style={{ color: '#615D59' }}>
                    {label}
                  </span>
                  <span className="block text-[15px] mt-0.5" style={{ color: '#2D2B29' }}>
                    {value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
