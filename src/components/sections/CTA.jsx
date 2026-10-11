const bookingUrl = 'https://topmate.io/binita_rathod/1865836'

export default function CTA() {
  return (
    <section id="book" className="py-20 md:py-24 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-accent">A Quiet Invitation</p>
        <h2 className="mt-5 font-serif text-3xl md:text-5xl text-foreground leading-[1.15]">
          The Answers You Are Searching For
          <span className="block italic text-primary mt-2">May Not Be Outside You.</span>
        </h2>
        <div className="gold-rule w-20 mx-auto mt-8" />
        <p className="mt-10 text-lg text-foreground/80 leading-relaxed">Let's create the space to hear them clearly.</p>
        <p className="mt-3 text-foreground/70 leading-relaxed">You don't need to have everything figured out. You only need the courage to begin.</p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-sm tracking-wide font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/90 transition-all hover:-translate-y-0.5"
        >
          Book a Free Clarity Conversation
        </a>
      </div>
    </section>
  )
}
