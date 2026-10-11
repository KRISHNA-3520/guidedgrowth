const items = [
  "You're successful on the outside but internally feel stuck, uncertain, or overwhelmed.",
  'You constantly overthink important decisions and struggle to trust yourself.',
  'You feel pressure to have everything figured out but secretly feel lost.',
  "You're navigating a life transition, career change, or personal growth journey.",
  'You want greater clarity, confidence, and direction.',
  "You're ready to stop surviving and start living intentionally.",
]

export default function WhoIHelp() {
  return (
    <section className="py-16 md:py-20" style={{ background: 'var(--gradient-stone)' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.32em] text-accent">Who I Help</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground">This Work Is For You If...</h2>
          <div className="gold-rule w-20 mx-auto mt-6" />
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, index) => (
            <article key={item} className="relative rounded-2xl bg-card border border-border/60 p-7 md:p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-accent/50">
              <span className="absolute top-5 right-5 font-serif text-xs text-accent tracking-widest">0{index + 1}</span>
              <span className="block h-px w-10 bg-accent/60 mb-5" />
              <p className="text-foreground/85 leading-relaxed text-[15px]">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 max-w-xl mx-auto text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-primary leading-relaxed">You are not broken.</p>
          <p className="mt-3 text-foreground/75 leading-relaxed">You may simply need space to hear yourself clearly again.</p>
        </div>
      </div>
    </section>
  )
}
