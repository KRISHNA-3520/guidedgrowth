import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const feedbackImages = [
  'feedback-connection.jpg',
  'feedback-challenge-support.jpg',
  'feedback-clarity-reflection.jpg',
  'feedback-one-step-at-a-time.jpg',
  'feedback-clarity-reset.jpg',
  'feedback-trust-self.jpg',
  'feedback-thinking-reset.jpg',
  'feedback-impactful-challenge.jpg',
]

const clientNames = {
  'feedback-challenge-support.jpg': 'Jason',
  'feedback-clarity-reflection.jpg': 'Farha',
  'feedback-clarity-reset.jpg': 'Aditya',
  'feedback-connection.jpg': 'Jyoti',
  'feedback-impactful-challenge.jpg': 'Aditi',
  'feedback-one-step-at-a-time.jpg': 'Jisha',
  'feedback-thinking-reset.jpg': 'Maya',
  'feedback-trust-self.jpg': 'Krishna',
}

export default function Testimonials() {
  const scrollerRef = useRef(null)
  const isPausedRef = useRef(false)
  const [scrollState, setScrollState] = useState({ start: true, end: false })

  const updateScrollState = useCallback(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const maxScroll = scroller.scrollWidth - scroller.clientWidth
    const hasOverflow = maxScroll > 8
    setScrollState({
      start: !hasOverflow,
      end: !hasOverflow,
    })
  }, [])

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
    return () => window.removeEventListener('resize', updateScrollState)
  }, [updateScrollState])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = window.setInterval(() => {
      if (isPausedRef.current) return

      const maxScroll = scroller.scrollWidth - scroller.clientWidth
      if (maxScroll <= 8) return

      const firstCard = scroller.querySelector('figure')
      const distance = firstCard ? firstCard.offsetWidth + 24 : scroller.clientWidth
      if (scroller.scrollLeft >= maxScroll - 8) {
        scroller.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scroller.scrollBy({ left: distance, behavior: 'smooth' })
      }
    }, 3500)

    return () => window.clearInterval(interval)
  }, [])

  const scrollCards = (direction) => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const firstCard = scroller.querySelector('figure')
    const distance = firstCard ? firstCard.offsetWidth + 24 : scroller.clientWidth
    const maxScroll = scroller.scrollWidth - scroller.clientWidth
    const atStart = scroller.scrollLeft < 8
    const atEnd = scroller.scrollLeft >= maxScroll - 8

    if (direction < 0 && atStart) {
      scroller.scrollTo({ left: maxScroll, behavior: 'smooth' })
    } else if (direction > 0 && atEnd) {
      scroller.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      scroller.scrollBy({ left: direction * distance, behavior: 'smooth' })
    }
  }

  return (
    <section id="testimonials" className="pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-accent">
              Client Experiences
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground">
              Stories of growth
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Reflections from the people I've worked with.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scrollCards(-1)}
              disabled={scrollState.start}
              className="h-11 w-11 rounded-full border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent disabled:opacity-30 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => scrollCards(1)}
              disabled={scrollState.end}
              className="h-11 w-11 rounded-full border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent disabled:opacity-30 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          <div
            ref={scrollerRef}
            onScroll={updateScrollState}
            onMouseEnter={() => { isPausedRef.current = true }}
            onMouseLeave={() => { isPausedRef.current = false }}
            onFocus={() => { isPausedRef.current = true }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) isPausedRef.current = false
            }}
            tabIndex={0}
            role="region"
            aria-label="Testimonials, use arrow keys to scroll"
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight') {
                event.preventDefault()
                scrollCards(1)
              }
              if (event.key === 'ArrowLeft') {
                event.preventDefault()
                scrollCards(-1)
              }
            }}
            className="flex items-start gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {feedbackImages.map((image) => {
              const name = clientNames[image] ?? 'Client'

              return (
                <figure
                  key={`feedback-image-${image}`}
                  className="snap-start shrink-0 basis-[85%] sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] rounded-2xl bg-card border border-border/60 p-7 shadow-[var(--shadow-card)] flex flex-col"
                >
                  <img
                    src={`/images/feedback/${image}`}
                    alt={`Feedback from ${name}`}
                    loading="lazy"
                    className="h-80 w-full rounded-lg object-contain"
                  />
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center font-serif text-primary"
                      aria-hidden="true"
                    >
                      {name.charAt(0)}
                    </span>
                    <span className="text-sm text-foreground">{name}</span>
                  </figcaption>
                </figure>
              )
            })}
          </div>
          {!scrollState.end && (
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-background to-transparent"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </section>
  )
}
