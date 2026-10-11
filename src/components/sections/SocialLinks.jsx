import { ArrowUpRight, Instagram, Linkedin, Mic, Youtube } from 'lucide-react'

const links = [
  { icon: Mic, label: 'Podcast', sub: 'Conversations on clarity', href: 'https://open.spotify.com/show/0iTZK3oLH6eMcCy6qyPx5N' },
  { icon: Instagram, label: 'Instagram', sub: '@guidedgrowthwithbinita', href: 'https://instagram.com/guidedgrowthwithbinita' },
  { icon: Linkedin, label: 'LinkedIn', sub: 'Binita Rathod', href: 'https://www.linkedin.com/in/binitarathod/' },
  { icon: Youtube, label: 'YouTube', sub: 'Reflections & talks', href: 'https://youtube.com/@guidedgrowthwithbinita?si=luVfZ-JlDfVkYHBs' },
]

export default function SocialLinks() {
  return (
    <section className="py-16 md:py-20" style={{ background: 'var(--gradient-stone)' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.32em] text-accent">Stay Close</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground">Explore Guided Growth</h2>
          <div className="gold-rule w-20 mx-auto mt-6" />
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {links.map(({ icon: Icon, label, sub, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="group relative rounded-2xl bg-card border border-border/60 p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-accent/50">
              <ArrowUpRight size={18} className="absolute top-5 right-5 text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <div className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon size={18} strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-serif text-xl text-foreground">{label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
