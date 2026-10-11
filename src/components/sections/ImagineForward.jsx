const points = [
  'Making decisions with confidence.',
  'Trusting your own judgment.',
  'Navigating change with greater calm.',
  'Creating progress that feels aligned rather than forced.',
]

export default function ImagineForward() {
  return (
    <section className="py-16 md:py-20 relative" style={{ background: 'var(--gradient-stone)' }}>
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-3 rounded-3xl bg-accent/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-portrait)] ring-1 ring-accent/30">
            <img
              src="/images/imagine-forward.png"
              alt="A quiet morning scene with a journal, coffee, and olive branch"
              width="1024"
              height="1280"
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-accent/40 hidden md:block" aria-hidden="true" />
        </div>
        <div className="order-1 md:order-2">
          <div className="gold-rule w-16 mb-6" />
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.15] text-foreground">
            Imagine Moving Forward
            <span className="block italic text-primary mt-2">Without Constantly Questioning Yourself.</span>
          </h2>
          <ul className="mt-8 space-y-3 text-[17px] text-foreground/80 leading-relaxed">
            {points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base md:text-[17px] text-foreground/75 leading-relaxed">
            Through Guided Growth, you'll strengthen self-trust, gain clarity on what truly matters, and move forward with greater confidence in your life, career, and personal growth.
          </p>
          <div className="mt-8 pl-5 border-l-2 border-accent/50">
            <p className="font-serif italic text-xl md:text-2xl text-primary leading-relaxed">
              Because clarity is not just about knowing what to do next.
            </p>
            <p className="mt-2 text-foreground/75 leading-relaxed">
              It's about becoming the person who trusts themselves enough to take that next step.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
