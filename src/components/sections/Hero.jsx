const bookingUrl = 'https://topmate.io/binita_rathod/1865836'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 md:pt-32"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-20 md:pb-28 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
        <div className="animate-fade-up text-center lg:text-left">
          <p className="text-[11px] uppercase tracking-[0.32em] text-accent mb-6">
            Growth Coach For Working Professionals
          </p>
          <p className="font-serif italic text-xl md:text-2xl text-foreground/70 mb-6">
            You're Not Behind. You're Becoming.
          </p>
          <h1 className="font-serif text-[2.4rem] sm:text-5xl md:text-6xl leading-[1.08] text-foreground">
            Become Clearer.
            <span className="block">Trust Yourself More.</span>
            <span className="block italic text-primary mt-1">Move Forward With Confidence.</span>
          </h1>
          <p className="mt-8 text-base md:text-[17px] text-foreground/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
            I help working professionals move from overthinking and confusion towards clarity, self-trust and meaningful action.
          </p>
          <p className="mt-4 text-base md:text-[17px] text-foreground/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Gain the clarity to make confident decisions, strengthen self-trust, and create growth that feels aligned to who you are becoming.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-5 justify-center lg:justify-start">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm tracking-wide font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/90 transition-all hover:-translate-y-0.5"
            >
              Book a Free Clarity Conversation
            </a>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            13+ Years Supporting Professional Growth &amp; Human Transformation
          </p>
        </div>
        <div className="animate-fade-up delay-200 relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 rounded-[2.5rem] opacity-60 blur-3xl" style={{ background: 'var(--gradient-stone)' }} aria-hidden="true" />
          <div className="relative">
            <div className="absolute -inset-2 rounded-[2rem] border border-accent/40" aria-hidden="true" />
            <img
              src="/images/binita-desk.png"
              alt="Binita Rathod — Growth Coach for Professionals"
              width="1024"
              height="1280"
              className="relative rounded-[1.75rem] shadow-[var(--shadow-portrait)] object-cover aspect-[4/5] w-full"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
