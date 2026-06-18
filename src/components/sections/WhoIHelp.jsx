import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView.js'

const items = [
  "You're successful on the outside but internally feel stuck, uncertain, or overwhelmed.",
  "You constantly overthink important decisions and struggle to trust yourself.",
  "You feel pressure to have everything figured out but secretly feel lost.",
  "You're navigating a life transition, career change, or personal growth journey.",
  "You want greater clarity, confidence, and direction.",
  "You're ready to stop surviving and start living intentionally.",
]

export default function WhoIHelp() {
  const [ref, inView] = useInView()

  return (
    <section id="who-i-help" className="py-24 bg-sage-50" ref={ref}>
      <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.22em] uppercase text-sage-500 font-medium mb-3"
        >
          Who I Help
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-light leading-tight mb-14"
          style={{ color: '#282624' }}
        >
          This Work Is For You If...
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="bg-white rounded-2xl p-6 text-left shadow-sm border border-sage-100 hover:shadow-md transition-shadow"
            >
              <span className="font-display text-3xl text-sage-200 font-light block mb-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-body text-gray-600 leading-relaxed text-sm">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-col items-center gap-2"
        >
          <p className="font-display text-2xl italic text-sage-700">You are not broken.</p>
          <p className="font-body text-gray-500 text-base">
            You may simply need space to hear yourself clearly again.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
