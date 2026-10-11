const featuredArticles = [
  {
    publication: 'Times of Entrepreneurs',
    image: 'https://static.wixstatic.com/media/ec32c5_5aa3474166074a85a96c9cff17268ad6~mv2.jpg/v1/fill/w_980%2Ch_374%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/TIMES%20OF%20ENTREPRENEURS%20DB_edited.jpg',
    imageAlt: 'Times of Entrepreneurs logo',
    imageSize: { width: 120, height: 46 },
    url: 'https://www.timesofentrepreneurs.com/post/binita-darekar-from-corporate-hr-leadership-to-life-coaching-and-guided-growth',
  },
  {
    publication: 'The Preneur',
    label: 'The Preneur',
    image: 'https://static.wixstatic.com/media/ec32c5_23f7293f10f14693bed833296521a752~mv2.png',
    imageAlt: 'The Preneur logo',
    imageSize: { width: 40, height: 40 },
    url: 'https://www.thepreneur.in/post/binita-darekar-from-corporate-hr-leadership-to-life-coaching-and-guided-growth',
  },
  {
    publication: 'The Entrepreneurs of India',
    image: 'https://static.wixstatic.com/media/ec32c5_36fcbacc71d14f3b8a01af533ad11441~mv2.png/v1/crop/x_0%2Cy_2025%2Cw_7500%2Ch_3188/fill/w_339%2Ch_142%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/2025%20white%20Logo.png',
    imageAlt: 'The Entrepreneurs of India logo',
    imageSize: { width: 120, height: 46 },
    cardClassName: 'bg-[#242629]',
    url: 'https://www.timesofentrepreneurs.com/post/binita-darekar-from-corporate-hr-leadership-to-life-coaching-and-guided-growth',
  },
  {
    publication: 'Flipboard',
    label: 'Flipboard',
    image: '/images/flipboard-logo.svg',
    imageAlt: 'Flipboard logo',
    imageSize: { width: 40, height: 40 },
    url: 'https://flipboard.com/@TheEntrepre3mu5/-binita-darekar-from-corporate-hr-leader/a-pWEiYd0WS8io3uOh7YlSDA%3Aa%3A4184755390-5691dd4ecc%2Fthepreneur.in',
  },
]

export default function Featured() {
  return (
    <section id="featured" className="py-8 md:py-10" style={{ background: 'var(--gradient-stone)' }}>
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <p className="text-center text-[11px] uppercase tracking-[0.32em] text-accent">
          Featured
        </p>
        <div
          className="mt-4 grid gap-4"
          style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}
        >
          {featuredArticles.map(({ publication, label, image, imageAlt, imageSize, cardClassName = '', url }) => (
            <a
              key={publication}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read Binita Darekar's feature in ${publication}`}
              className={`group flex min-h-32 w-full flex-col items-center justify-center rounded-xl border border-border/60 bg-card p-4 shadow-[0_24px_48px_-14px_rgba(24,28,22,0.34)] transition hover:border-accent/60 hover:shadow-[0_32px_68px_-16px_rgba(24,28,22,0.48)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${cardClassName}`}
            >
              <span className="flex h-16 w-full items-center justify-center">
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  className="drop-shadow-[0_9px_14px_rgba(0,0,0,0.52)]"
                  style={{ ...imageSize, objectFit: 'contain' }}
                />
              </span>
              {label ? (
                <span className="mt-2 flex h-5 items-center justify-center rounded-full bg-secondary/70 px-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {label}
                </span>
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
