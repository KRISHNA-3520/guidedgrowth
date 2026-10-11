export default function Footer() {
  return (
    <footer className="py-14 border-t border-border/40" style={{ background: 'var(--gradient-stone)' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <p className="font-serif text-lg text-foreground">Guided Growth with Binita</p>
        <p className="mt-3 text-sm italic text-foreground/70">You're Not Behind. You're Becoming.</p>
        <div className="gold-rule w-16 mx-auto my-6" />
        <p className="text-[11px] uppercase tracking-[0.32em] text-accent">Aligned Growth Action</p>
        <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Guided Growth with Binita. All rights reserved.</p>
      </div>
    </footer>
  )
}
