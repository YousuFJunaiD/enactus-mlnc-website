export default function PageHero({
  badge,
  title,
  kicker,
  description,
  className = '',
}) {
  return (
    <section className={`page-hero section-bg-dark page-hero-premium text-center ${className}`.trim()}>
      <div className="container page-hero-shell">
        {badge ? <span className="page-hero-badge">{badge}</span> : null}
        <h1 className="heading-xl">{title}</h1>
        {kicker ? <p className="page-hero-kicker">{kicker}</p> : null}
        {description ? (
          <p className="text-lg text-light max-w-800 mx-auto">{description}</p>
        ) : null}
        <div className="page-hero-divider" aria-hidden="true" />
      </div>
    </section>
  );
}
