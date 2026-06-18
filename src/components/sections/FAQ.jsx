import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView.js'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'I feel something is off, but I wouldn\'t say I\'m stuck. Is this still for me?',
    a: 'Absolutely. You don\'t have to be in crisis to benefit from coaching. Many people come to Guided Growth when they sense there\'s more clarity, direction, or peace available to them — even when things are "okay" on the surface. That quiet feeling that something could be better is often the most meaningful signal.',
  },
  {
    q: "I'm not sure exactly what kind of help I need. Is that okay?",
    a: "More than okay — it's completely normal. Many people arrive without a clearly defined problem. The discovery process itself is part of the work. A free Clarity Conversation is a great first step to begin exploring what's actually present for you.",
  },
  {
    q: 'How is this different from reading self-help books or content online?',
    a: "Books and content offer information. Coaching offers a relationship — a structured, personalized space where you're truly seen, gently challenged, and supported. The difference is the same as knowing the theory of swimming versus actually being in the water with someone guiding you.",
  },
  {
    q: 'Will you tell me what decisions to make?',
    a: "No — and that's the point. The goal of Guided Growth is to help you strengthen your own clarity and self-trust so that you can make aligned decisions yourself. The answers you're looking for are already within you. This process helps you access them.",
  },
  {
    q: 'What kinds of challenges do clients usually bring?',
    a: "Overthinking, career uncertainty, navigating transitions, imposter syndrome, difficulty trusting themselves, emotional overwhelm, loss of direction, relationship and workplace dynamics, and the quiet pressure of trying to hold everything together.",
  },
  {
    q: 'How do I know if coaching is right for me?',
    a: "If you're feeling stuck, uncertain, or disconnected — and you're ready to invest in yourself and take honest, reflective action — coaching is likely a good fit. The simplest next step is a free Clarity Conversation, which will give you a felt sense of whether this is right for you.",
  },
  {
    q: "Do I need to commit to a long-term coaching program?",
    a: "Not initially. You can begin with a single Clarity Conversation and take it one step at a time. That said, meaningful change often unfolds over multiple sessions, and longer engagements tend to create deeper, more lasting transformation.",
  },
  {
    q: 'What makes Guided Growth different from other coaching?',
    a: "The depth, thoughtfulness, and genuine care behind the work. This isn't a scripted program or a formula. Every engagement is tailored to the individual. The foundation is a belief that you already have the wisdom you need — this work helps you access and trust it.",
  },
]

function Item({ faq, open, toggle }) {
  return (
    <div className="border-b border-sage-100 last:border-none">
      <button
        className="flex items-start justify-between w-full py-5 text-left gap-4"
        onClick={toggle}
        aria-expanded={open}
      >
        <span className="font-body text-base text-sage-900 leading-snug font-medium">{faq.q}</span>
        <span className="shrink-0 mt-0.5 text-sage-500">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-body text-gray-500 leading-relaxed text-sm">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [ref, inView] = useInView()
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="faq" className="py-16 md:py-20 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-9 md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.22em] uppercase text-sage-500 font-medium mb-3"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-light leading-tight"
            style={{ color: '#282624' }}
          >
            Questions You May Be{' '}
            <span className="italic text-sage-600">Asking Yourself</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-cream rounded-3xl px-7 py-2 shadow-sm"
        >
          {faqs.map((faq, i) => (
            <Item
              key={i}
              faq={faq}
              open={openIdx === i}
              toggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
