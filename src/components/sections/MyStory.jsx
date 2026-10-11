const story = [
  'I grew up in a lower-middle-class chawl in Mumbai. My father was a carpenter, and my mother was a homemaker. I supported my education through tuitions and call centre work, eventually completing my Master\'s in Industrial Relations and Personnel Management.',
  'Those experiences shaped a belief that has stayed with me: people are important in business.',
  'My career in HR gave me the opportunity to work closely with people—their aspirations, challenges, transitions and growth. It also helped me see how much we can carry beneath the surface while continuing to show up at work.',
  'In my own journey, I\'ve had to question expectations, recognise my need for approval, and learn to trust myself when the next step wasn\'t completely clear. Moving from HR leadership towards coaching and entrepreneurship has been part of that learning.',
  'Guided Growth with Binita grew from my belief that we deserve space to understand ourselves, question the patterns that keep us stuck, and choose our next steps with greater awareness.',
  'Today, as a Growth Coach and certified NLP Practitioner, I support working professionals who feel caught between knowing they want something to change and being able to take action.',
  'Why do I do this? Because I know how much energy it takes to keep second-guessing yourself. I want to offer a calm, non-judgmental space where you can pause, feel heard, and find a way forward that feels meaningful to you.',
]

export default function MyStory({ isModal = false }) {
  return (
    <section id={isModal ? undefined : 'my-story'} className={isModal ? 'py-6 md:py-8' : 'py-16 md:py-20'} style={{ background: 'var(--gradient-stone)' }}>
      <div className={`mx-auto px-6 lg:px-10 grid gap-12 lg:gap-20 items-start ${isModal ? 'max-w-3xl grid-cols-1' : 'max-w-7xl lg:grid-cols-[0.9fr_1.1fr]'}`}>
        {!isModal && (
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none lg:sticky lg:top-28">
            <div className="absolute -inset-2 rounded-[2rem] border border-accent/40" aria-hidden="true" />
            <img
              src="/images/binita-headshot.png"
              alt="Binita Rathod, Growth Coach and Certified NLP Practitioner"
              loading="lazy"
              className="relative rounded-[1.75rem] shadow-[var(--shadow-portrait)] object-cover object-top aspect-[4/5] w-full"
            />
          </div>
        )}
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-accent">My Story</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground">Why I do what I do</h2>
          <div className="gold-rule w-20 mt-6" />
          <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-[16px]">
            {story.map((paragraph, index) => (
              <p key={paragraph} className={index === 1 ? 'font-serif italic text-primary text-lg' : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href="https://topmate.io/binita_rathod/1865836"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-accent/60 px-6 py-3 text-sm tracking-wide text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Explore working with me →
          </a>
        </div>
      </div>
    </section>
  )
}
