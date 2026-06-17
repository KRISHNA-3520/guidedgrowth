export default function Footer() {
  return (
    <footer className="py-14 text-foreground">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center">
        {/* Brand Name */}
        <p className="font-serif text-lg text-foreground" style={{ color: '#282624' }}>
          Guided Growth with Binita
        </p>

        {/* Tagline */}
        <p className="mt-3 text-sm italic" style={{ color: 'rgba(40, 38, 36, 0.7)' }}>
          You Are Not Behind. You Are Becoming.
        </p>

        {/* Gold Rule Divider */}
        <div className="gold-rule w-16 mx-auto my-6" style={{ height: '1px', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #BD9B6E 50%, rgba(0, 0, 0, 0) 100%)' }}></div>

        {/* Tagline Label */}
        <p className="text-[11px] uppercase tracking-[0.32em] font-medium" style={{ color: '#BD9B6E' }}>
          Aligned Growth Action
        </p>

        {/* Copyright */}
        <p className="mt-6 text-xs" style={{ color: '#615D59' }}>
          © {new Date().getFullYear()} Guided Growth with Binita. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
