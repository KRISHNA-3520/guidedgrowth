import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView.js'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Private Clarity Conversation',
    desc: 'Gain perspective on what is keeping you stuck, uncover what\'s truly important, and identify your next aligned step with greater confidence.',
    cta: 'Book a Free Clarity Conversation',
    href: 'https://topmate.io/binita_rathod/1865836',
    accent: 'sage',
  },
  {
    title: '1:1 Growth Coaching',
    desc: 'A personalized coaching journey designed to strengthen self-trust, navigate uncertainty, and create meaningful progress in your personal and professional life.',
    cta: 'Book a Free Clarity Conversation',
    href: 'https://topmate.io/binita_rathod/1865836',
    accent: 'warm',
  },
  {
    title: 'Corporate Training & Speaking',
    desc: 'Thought-provoking workshops, leadership conversations, and development programs that help individuals and teams build clarity, emotional awareness, resilience, and workplace effectiveness.',
    cta: 'Enquire Now',
    href: 'mailto:guidedgrowthwithbinita@gmail.com',
    accent: 'sage',
  },
  {
    title: 'Effective Leadership Coaching',
    desc: 'For leaders who want to lead with greater self-awareness, confidence, emotional intelligence, and impact.',
    cta: 'Learn More',
    href: 'https://wa.me/919529703353?text=Hi%20Binita%2C%20I%20would%20like%20to%20know%20more%20about%20your%20coaching.',
    accent: 'warm',
  },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.22em] uppercase text-sage-500 font-medium mb-3"
          >
            Work With Binita
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-light leading-tight"
            style={{ color: '#282624' }}
          >
            Choose Your Growth Path
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group bg-cream rounded-3xl p-8 flex flex-col gap-5 border border-sage-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-display text-2xl text-sage-800 font-medium">{svc.title}</h3>
              <p className="font-body text-gray-500 leading-relaxed text-sm flex-1">{svc.desc}</p>
              <a
                href={svc.href}
                target={svc.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 font-body text-sm font-medium transition-colors group-hover:gap-3"
              >
                {svc.cta}
                <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
