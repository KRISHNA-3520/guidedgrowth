import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView.js'

const testimonials = [
  {
    quote: 'The process helped me see my strengths, reduce confusion, and move forward with greater confidence. The reflections were simple, yet incredibly impactful.',
    name: 'Aditya',
  },
  {
    quote: "Binita's guidance helped me understand that my biggest challenge wasn't a lack of direction — it was overthinking. I now trust myself more and focus on taking consistent action instead of waiting for perfect clarity.",
    name: 'Jaison',
  },
  {
    quote: 'The experience helped me slow down, reflect on what truly mattered, and approach my thoughts and priorities with greater clarity and calm.',
    name: 'Maya',
  },
  {
    quote: 'I realised that many of my challenges came from trying to manage everything at once. Through this journey, I learned to take one step at a time and trust the process.',
    name: 'Farha',
  },
  {
    quote: 'What stood out most was the clarity and support I received. The conversations helped me see things differently and move forward with more confidence and self-awareness.',
    name: 'Aditi',
  },
  {
    quote: 'I never expected such thoughtful guidance. The experience helped me better understand myself, reduce mental noise, and gain clarity on the next steps I wanted to take.',
    name: 'Krishna',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView()

  return (
    <section id="testimonials" className="py-24 bg-warm-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.22em] uppercase text-warm-600 font-medium mb-3"
        >
          Client Experiences
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-light leading-tight mb-3"
          style={{ color: '#282624' }}
        >
          Quiet shifts, lasting clarity.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-gray-500 text-sm mb-14"
        >
          Real reflections from people who experienced Guided Growth support.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="bg-white rounded-3xl p-7 text-left shadow-sm border border-warm-100 flex flex-col gap-4"
            >
              <span className="font-display text-5xl text-warm-300 leading-none select-none">"</span>
              <p className="font-body text-gray-600 leading-relaxed text-sm flex-1 -mt-3">{t.quote}</p>
              <p className="font-body text-sm font-medium text-sage-700">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
