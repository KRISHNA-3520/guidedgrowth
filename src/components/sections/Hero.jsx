import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-cream pt-20"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage-50/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-warm-100/40 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left — text */}
        <div className="flex flex-col gap-6 max-w-lg">
          <motion.p
            {...fadeUp(0.1)}
            className="font-body text-xs tracking-[0.22em] uppercase text-sage-500 font-medium"
          >
            Guided Growth with Binita
          </motion.p>

          <motion.p
            {...fadeUp(0.2)}
            className="font-display text-lg md:text-xl text-warm-600 italic font-light"
          >
            You Are Not Behind. You Are Becoming.
          </motion.p>

          <motion.h1
            {...fadeUp(0.3)}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]"
            style={{ color: '#282624' }}
          >
            Become Clearer.{' '}
            <span className="italic text-sage-600">Trust Yourself</span>{' '}
            More.{' '}
            <br />
            Move Forward With Confidence.
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="font-body text-base md:text-lg text-gray-600 leading-relaxed max-w-md"
          >
            For capable professionals navigating uncertainty, emotional overwhelm,
            overthinking, or important life and career transitions.
          </motion.p>

          <motion.p
            {...fadeUp(0.5)}
            className="font-body text-sm text-gray-500 leading-relaxed max-w-sm"
          >
            Gain the clarity to make confident decisions, strengthen self-trust, and
            create growth that feels aligned to who you are becoming.
          </motion.p>

          <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row gap-4 mt-2">
           <a
          href="https://topmate.io/binita_rathod/1865836"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-white text-sm font-body font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
          style={{ backgroundColor: '#61675C' }}
        >
          Book a Free Clarity Conversation
        </a>
          </motion.div>
        </div>

        {/* Right — hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-sm md:max-w-md">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-3xl border border-sage-200/60" />
            <img
              src="https://guidedgrowthwithbinita.lovable.app/__l5e/assets-v1/792c465d-75ae-41c4-8873-964a18066c53/binita-desk.png"
              alt="Binita Darekar — Growth Coach for Professionals"
              className="relative w-full rounded-2xl object-cover shadow-xl"
              loading="eager"
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3"
            >
              <p className="font-body text-xs text-sage-500 uppercase tracking-widest">Experience</p>
              <p className="font-display text-2xl text-sage-800 font-medium">13+ Years</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
