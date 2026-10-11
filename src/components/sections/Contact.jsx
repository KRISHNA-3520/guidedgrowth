import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react'

const contacts = [
  { icon: Mail, label: 'Email', value: 'guidedgrowthwithbinita@gmail.com', href: 'mailto:guidedgrowthwithbinita@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 95297 03353', href: 'https://wa.me/919529703353' },
  { icon: Instagram, label: 'Instagram', value: '@guidedgrowthwithbinita', href: 'https://instagram.com/guidedgrowthwithbinita' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Binita Rathod', href: 'https://www.linkedin.com/in/binitarathod/' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 border-t border-border/40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-accent">Contact</p>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground">Let's Connect</h2>
        <div className="gold-rule w-20 mx-auto mt-6" />
        <ul className="mt-12 space-y-3 text-left">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/60 px-5 py-4 hover:border-accent/50 hover:-translate-y-0.5 transition-all">
                <span className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={17} strokeWidth={1.5} />
                </span>
                <span className="flex-1">
                  <span className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
                  <span className="block text-foreground/90 text-[15px] mt-0.5">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex items-center justify-center gap-5 text-muted-foreground">
          {contacts.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} className="h-10 w-10 rounded-full border border-border/70 flex items-center justify-center hover:text-accent hover:border-accent/50 transition-colors">
              <Icon size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
