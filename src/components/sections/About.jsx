import { useRef } from 'react'
import { Check, X } from 'lucide-react'
import MyStory from './MyStory.jsx'

const credentials = [
  'Former Corporate HR Leader',
  'Certified Life Coach',
  'Certified NLP Practitioner',
  'Speaker & Facilitator',
]

export default function About() {
  const storyDialogRef = useRef(null)

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none order-1 lg:order-2">
          <div className="absolute -inset-6 rounded-[2.5rem] opacity-50 blur-3xl" style={{ background: 'var(--gradient-stone)' }} aria-hidden="true" />
          <img
            src="/images/binita-headshot.png"
            alt="Binita Rathod — Founder, Coach, Speaker"
            width="1024"
            height="1280"
            className="relative rounded-[1.75rem] shadow-[var(--shadow-portrait)] object-cover aspect-[4/5] w-full"
          />
        </div>
        <div className="order-2 lg:order-1">
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground">Meet Binita</h2>
          <div className="gold-rule w-20 mt-6" />
          <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-[16px]">
            <p>For over 13 years, I worked closely with professionals navigating leadership, career growth, workplace challenges, and the pressure of balancing ambition with personal well-being.</p>
            <p>Again and again, I noticed a pattern.</p>
            <p>The people who appeared most capable on the outside were often carrying the deepest uncertainty on the inside. They were successful, responsible, and dependable — yet many were quietly questioning themselves, overthinking decisions, and wondering why growth felt harder than it should.</p>
            <p className="font-serif italic text-primary text-lg">That realization changed the direction of my work.</p>
            <p>Most capable professionals don't need more information. They need clarity — space to slow down, reflect honestly, and reconnect with their own inner wisdom.</p>
            <p>Guided Growth with Binita was created to help thoughtful professionals move through uncertainty with greater clarity, stronger self-trust, and the confidence to take aligned action in both life and career.</p>
            <p className="font-serif italic text-foreground/85">Because meaningful growth isn't about becoming someone else. It's about becoming more fully yourself.</p>
            <button
              type="button"
              onClick={() => storyDialogRef.current?.showModal()}
              className="inline-flex items-center rounded-full border border-accent/60 px-5 py-2.5 text-sm tracking-wide text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Why I do what I do
            </button>
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 gap-3">
            {credentials.map((credential) => (
              <li key={credential} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 px-4 py-3">
                <span className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className="text-sm text-foreground/85">{credential}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <dialog
        ref={storyDialogRef}
        aria-label="Why I do what I do"
        className="m-auto max-h-[90vh] w-[min(96vw,72rem)] max-w-none overflow-y-auto rounded-2xl border border-border bg-background p-0 shadow-2xl backdrop:bg-black/60"
        onClick={(event) => {
          if (event.target === storyDialogRef.current) storyDialogRef.current.close()
        }}
      >
        <button
          type="button"
          aria-label="Close My Story"
          onClick={() => storyDialogRef.current?.close()}
          className="sticky right-4 top-4 z-10 ml-auto mr-4 mt-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X size={18} />
        </button>
        <MyStory isModal />
      </dialog>
    </section>
  )
}
