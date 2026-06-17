import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView.js'

const credentials = [
  '13+ Years Professional Experience',
  'Former Corporate HR Leader',
  'Certified Life Coach',
  'Speaker & Facilitator',
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-16 items-start">

        {/* Story column — LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5"
        >
          <p className="font-body text-xs tracking-[0.22em] uppercase text-sage-500 font-medium">
            Founder · Coach · Speaker
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-sage-900 font-light leading-tight">
            Meet Binita
          </h2>

          <div className="flex flex-col gap-4 text-gray-600 font-body text-base leading-relaxed">
            <p>
              For over 13 years, I worked closely with professionals navigating leadership, career growth,
              workplace challenges, and the pressure of balancing ambition with personal well-being.
            </p>
            <p>Again and again, I noticed a pattern.</p>
            <p>
              The people who appeared most capable on the outside were often carrying the deepest uncertainty
              on the inside. They were successful, responsible, and dependable — yet many were quietly
              questioning themselves, overthinking decisions, and wondering why growth felt harder than it should.
            </p>
            <p className="font-medium text-sage-800 font-display italic text-lg">
              That realization changed the direction of my work.
            </p>
            <p>
              Most capable professionals don't need more information. They need clarity — space to slow down,
              reflect honestly, and reconnect with their own inner wisdom.
            </p>
            <p>
              Guided Growth with Binita was created to help thoughtful professionals move through uncertainty
              with greater clarity, stronger self-trust, and the confidence to take aligned action in both
              life and career.
            </p>
            <p className="font-display italic text-xl text-sage-700 border-l-2 border-sage-300 pl-5 mt-2">
              "Meaningful growth isn't about becoming someone else. It's about becoming more fully yourself."
            </p>
          </div>
        </motion.div>

        {/* Portrait column — RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center md:items-start gap-5 md:pl-10"
        >
          <div className="relative w-full">
            <div className="absolute -inset-3 rounded-3xl border border-warm-200/70" />
            <img
              src="https://guidedgrowthwithbinita.lovable.app/__l5e/assets-v1/0047cb8b-00a0-433e-833e-70b1c36e983c/binita-headshot.png"
              alt="Binita Darekar — Founder, Coach, Speaker"
              className="relative w-full rounded-2xl object-cover object-top shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="font-display text-3xl text-sage-900 mt-1">Binita Darekar</p>
          </div>

          {/* Credential badges */}
          <ul className="flex flex-col gap-2 w-full max-w-xs">
            {credentials.map((c) => (
              <li key={c} className="flex items-center gap-3 font-body text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-400 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}