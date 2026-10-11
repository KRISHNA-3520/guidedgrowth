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
  return (
    <section className="py-16 md:py-20" style={{ background: 'var(--gradient-stone)' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.32em] text-accent">Transformation</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground leading-[1.15]">
            What Becomes Possible When
            <span className="block italic text-primary">You Trust Yourself More</span>
          </h2>
          <div className="gold-rule w-20 mx-auto mt-6" />
        </div>
        <div className="mt-14 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch">
          <div className="rounded-2xl bg-card/70 border border-border/60 p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">Before</p>
            <ul className="mt-6 space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/70 line-through decoration-muted-foreground/40">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex items-center justify-center text-accent">
            <ArrowRight size={28} strokeWidth={1.5} />
          </div>
          <div className="rounded-2xl border border-primary/20 p-8 md:p-10 text-primary-foreground" style={{ background: 'var(--gradient-olive)' }}>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--gold-soft)]">After</p>
            <ul className="mt-6 space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 text-primary-foreground/95">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
