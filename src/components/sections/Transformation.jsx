import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView.js'
import { ArrowRight } from 'lucide-react'

const before = [
  'Constantly overthinking',
  'Feeling stuck and uncertain',
  'Looking outside yourself for answers',
  'Carrying invisible pressure',
  'Doubting your decisions',
]

const after = [
  'Clearer thinking',
  'Stronger self-trust',
  'Confident decision-making',
  'Greater emotional awareness',
  'Aligned action',
  'Meaningful progress',
  'Greater peace of mind',
  'Growth that feels authentic',
]

export default function Transformation() {
  const [ref, inView] = useInView()

  return (
    <section className="py-16 text-foreground" ref={ref} style={{ background: 'linear-gradient(135deg, oklch(0.93 0.013 75) 0%, oklch(0.96 0.008 85) 100%)' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[11px] uppercase tracking-[0.32em] font-medium" style={{ color: '#BD9B6E' }}>
            Transformation
          </p>
          <motion.h2
            className="mt-4 font-serif text-3xl md:text-5xl leading-[1.15]"
            style={{ color: '#282624', letterSpacing: '-0.45px' }}
          >
            What Becomes Possible When
            <span className="block italic" style={{ color: '#61675C' }}>You Trust Yourself More</span>
          </motion.h2>
          <div className="gold-rule w-20 mx-auto mt-6" style={{ height: '1px', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #BD9B6E 50%, rgba(0, 0, 0, 0) 100%)' }}></div>
        </motion.div>

        {/* Before/After Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch"
        >
          {/* Before Column */}
          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{
              backgroundColor: 'rgba(247, 245, 244, 0.7)',
              borderColor: 'rgba(232, 224, 212, 0.6)',
            }}
          >
            <p className="text-[11px] uppercase tracking-[0.32em] font-medium" style={{ color: '#615D59' }}>
              Before
            </p>
            <ul className="mt-6 space-y-4">
              {before.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm"
                  style={{
                    color: '#393633',
                    textDecoration: 'line-through',
                    textDecorationColor: '#494542',
                  }}
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: '#9C9289' }}></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center" style={{ color: '#BD9B6E' }}>
            <ArrowRight size={28} />
          </div>

          {/* After Column */}
          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{
              background: 'linear-gradient(135deg, oklch(0.55 0.02 130) 0%, oklch(0.45 0.02 130) 100%)',
              borderColor: 'rgba(155, 161, 147, 0.2)',
              color: '#F5F3EB',
            }}
          >
            <p className="text-[11px] uppercase tracking-[0.32em] font-medium" style={{ color: '#DFCFB4' }}>
              After
            </p>
            <ul className="mt-6 space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#F5F3EB' }}>
                  <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: '#BD9B6E' }}></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
