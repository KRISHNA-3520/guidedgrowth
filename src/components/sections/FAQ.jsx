import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "I feel something is off, but I wouldn't say I'm stuck. Is this still for me?",
    a: "Yes. You don't need a defined problem to begin. Many clients arrive with a quiet sense that something is misaligned — not broken, just unclear. Guided Growth gives you space to name what you're noticing and explore it honestly.",
  },
  {
    q: "I'm not sure exactly what kind of help I need. Is that okay?",
    a: "That's often the most honest place to start. The first conversation is designed to help you understand what's beneath the surface, so you can move forward with more clarity about what truly supports you.",
  },
  {
    q: 'How is this different from reading self-help books or content online?',
    a: 'Self-help content offers ideas. Coaching offers a relationship. You are not consuming information alone — you are reflecting with someone who listens carefully, asks the right questions, and helps you hear yourself more clearly.',
  },
  {
    q: 'Will you tell me what decisions to make?',
    a: 'No. My role is not to advise you on your life. It is to help you reconnect with your own judgment so the decisions you make are honest, considered, and truly yours.',
  },
  {
    q: 'What kinds of challenges do clients usually bring?',
    a: 'Career uncertainty, overthinking, decision fatigue, life transitions, leadership pressure, loss of direction, and the quiet exhaustion of always holding things together. Most clients are capable professionals carrying invisible weight.',
  },
  {
    q: 'How do I know if coaching is right for me?',
    a: 'The free Private Clarity Conversation exists exactly for this. There is no pressure to continue — only an honest, considered space to see whether working together feels aligned.',
  },
  {
    q: 'Do I need to commit to a long-term coaching program?',
    a: "No. Some clients find meaningful clarity in a few focused conversations; others choose ongoing coaching for deeper work. We'll discuss what feels right for you after your clarity conversation — never before.",
  },
  {
    q: 'What makes Guided Growth different from other coaching?',
    a: 'The work is calm, reflective, and grounded in 13+ years of professional experience supporting human growth. It is not motivational, not formulaic, and not performative. It is a thoughtful, private space designed for people who want to grow with depth and integrity.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="pt-8 pb-16 md:pt-10 md:pb-20 border-t border-border/40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-accent">FAQ</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground leading-[1.15]">
            Questions You May Be
            <span className="block italic text-primary">Asking Yourself</span>
          </h2>
          <div className="gold-rule w-20 mx-auto mt-6" />
        </div>
        <div className="mt-12">
          {faqs.map(({ q, a }, index) => {
            const open = openIndex === index
            const answerId = `faq-answer-${index}`
            return (
              <div key={q} className="border-b border-border/60 first:border-t">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-5 text-left font-serif text-lg md:text-xl text-foreground hover:no-underline py-6"
                >
                  {q}
                  <ChevronDown size={18} className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && (
                  <div id={answerId} className="text-foreground/75 leading-relaxed text-[15px] pb-6">
                    {a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
