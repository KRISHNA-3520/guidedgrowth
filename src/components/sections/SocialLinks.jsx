import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView.js'
import { FaSpotify, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const links = [
  { icon: FaSpotify, label: 'Podcast', sublabel: 'Conversations on clarity', href: 'https://open.spotify.com/show/0iTZK3oLH6eMcCy6qyPx5N', color: 'text-green-500' },
  { icon: FaInstagram, label: 'Instagram', sublabel: '@guidedgrowthwithbinita', href: 'https://instagram.com/guidedgrowthwithbinita', color: 'text-pink-500' },
  { icon: FaLinkedinIn, label: 'LinkedIn', sublabel: 'Binita Darekar', href: 'https://www.linkedin.com/in/binitarathod/', color: 'text-blue-600' },
  { icon: FaYoutube, label: 'YouTube', sublabel: 'Reflections & talks', href: 'https://youtube.com/@guidedgrowthwithbinita', color: 'text-red-500' },
]

export default function SocialLinks() {
  const [ref, inView] = useInView()

  return (
    <section className="py-20 bg-cream" ref={ref}>
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.22em] uppercase text-sage-500 font-medium mb-3"
        >
          Stay Close
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-light leading-tight mb-12"
          style={{ color: '#282624' }}
        >
          Explore Guided Growth
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {links.map(({ icon: Icon, label, sublabel, href, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * i }}
              className="group flex flex-col items-center gap-3 bg-white rounded-2xl px-4 py-7 shadow-sm border border-sage-100 hover:shadow-md transition-all"
            >
              <Icon size={28} className={`${color} group-hover:scale-110 transition-transform`} />
              <div>
                <p className="font-body text-sm font-semibold text-sage-800">{label}</p>
                <p className="font-body text-xs text-gray-400 mt-0.5">{sublabel}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
