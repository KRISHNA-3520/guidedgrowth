import { ArrowUpRight, Compass, Crown, MessageCircle, UsersRound } from 'lucide-react'

const services = [
  {
    title: 'Private Clarity Conversation',
    body: "Gain perspective on what is keeping you stuck, uncover what's truly important, and identify your next aligned step with greater confidence.",
    cta: 'Book a Free Clarity Conversation',
    href: 'https://topmate.io/binita_rathod/1865836',
    icon: MessageCircle,
  },
  {
    title: '1:1 Growth Coaching',
    body: 'A personalized coaching journey designed to strengthen self-trust, navigate uncertainty, and create meaningful progress in your personal and professional life.',
    cta: 'Book a Free Clarity Conversation',
    href: 'https://topmate.io/binita_rathod/1865836',
    icon: Compass,
  },
  {
    title: 'Corporate Training & Speaking',
    body: 'Thought-provoking workshops, leadership conversations, and development programs that help individuals and teams build clarity, emotional awareness, resilience, and workplace effectiveness.',
    cta: 'Enquire Now',
    href: 'mailto:guidedgrowthwithbinita@gmail.com',
    icon: UsersRound,
  },
  {
    title: 'Effective Leadership Coaching',
    body: 'For leaders who want to lead with greater self-awareness, confidence, emotional intelligence, and impact.',
    cta: 'Learn More',
    href: 'https://wa.me/919529703353?text=Hi%20Binita%2C%20I%20would%20like%20to%20know%20more%20about%20your%20coaching.',
    icon: Crown,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.32em] text-accent">Work With Binita</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground">Choose Your Growth Path</h2>
          <div className="gold-rule w-20 mx-auto mt-6" />
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map(({ title, body, cta, href, icon: Icon }) => (
            <article key={title} className="group rounded-2xl bg-card border border-border/60 p-8 md:p-10 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-accent/50 flex flex-col">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-serif text-2xl md:text-[28px] text-foreground leading-tight">{title}</h3>
              <p className="mt-4 text-foreground/75 leading-relaxed text-[15px] flex-1">{body}</p>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                {cta}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
