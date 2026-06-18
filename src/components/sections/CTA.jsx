import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView.js'

export default function CTA() {
  const [ref, inView] = useInView()

  return (
    <section id="book-clarity-conversation" className="py-28 text-foreground relative overflow-hidden" ref={ref} style={{ background: 'linear-gradient(oklch(0.972 0.008 85) 0%, oklch(0.91 0.018 80) 100%)' }}>
      {/* Background decorative circles */}

      <div className="max-w-2xl mx-auto px-5 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.22em] uppercase font-medium mb-4"
          style={{ color: '#61675C' }}
        >
          A Quiet Invitation
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-light leading-tight mb-5"
          style={{ color: '#282624' }}
        >
          The Answers You Are Searching For{' '}
          <span className="italic" style={{ color: '#61675C' }}>May Not Be Outside You.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-body text-base leading-relaxed mb-8"
          style={{ color: '#282624' }}
        >
          Let's create the space to hear them clearly.
          <br />
          You don't need to have everything figured out. You only need the courage to begin.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col items-center gap-3"
        >
           <a
          href="https://topmate.io/binita_rathod/1865836"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-sm font-body font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
          style={{ backgroundColor: '#61675C', color: 'white' }}
        >
          Book a Free Clarity Conversation
        </a>
          <p className="font-body text-xs" style={{ color: '#61675C' }}>No pressure · No obligation</p>
        </motion.div>
      </div>
    </section>
  )
}
