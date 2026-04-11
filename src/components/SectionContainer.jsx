export default function SectionContainer({
  children,
  className = '',
  narrow = false,
}) {
  const classes = ['container', 'section-container', narrow ? 'section-container-narrow' : '', className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}
