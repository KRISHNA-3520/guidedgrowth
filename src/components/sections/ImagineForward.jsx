import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView.js'

const points = [
  'Making decisions with confidence.',
  'Trusting your own judgment.',
  'Navigating change with greater calm.',
  'Creating progress that feels aligned rather than forced.',
]

export default function ImagineForward() {
  const [ref, inView] = useInView()

  return (
    <section id="clarity" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 md:order-1"
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-sage-100/70 blur-2xl" />
          <img
            src="https://guidedgrowthwithbinita.lovable.app/__l5e/assets-v1/db270157-2c83-4219-8e6a-dd79e1a2a410/imagine-forward.png"
            alt="Journal and coffee representing calm clarity, self-awareness, and intentional living"
            className="relative w-full h-[500px] object-cover rounded-2xl shadow-lg"
            loading="lazy"
            decoding="async"
            width="768"
            height="960"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2 flex flex-col gap-6"
        >
          <p className="font-body text-xs tracking-[0.22em] uppercase text-sage-500 font-medium">
            Growth Through Clarity
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight" style={{ color: '#282624' }}>
            Imagine Moving Forward{' '}
            <span className="italic text-sage-600">Without Constantly</span>{' '}
            Questioning Yourself.
          </h2>

          <ul className="flex flex-col gap-3 mt-2">
            {points.map((pt, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 text-gray-600 font-body text-base"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sage-400 shrink-0" />
                {pt}
              </motion.li>
            ))}
          </ul>

          <p className="font-body text-gray-600 leading-relaxed mt-2">
            Through Guided Growth, you'll strengthen self-trust, gain clarity on what truly matters,
            and move forward with greater confidence in your life, career, and personal growth.
          </p>

          <p className="font-display text-xl italic text-sage-700 border-l-2 border-sage-300 pl-5 mt-2">
            "Clarity is not just about knowing what to do next. It's about becoming the person who
            trusts themselves enough to take that next step."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
