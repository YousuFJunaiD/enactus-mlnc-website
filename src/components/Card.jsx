export default function Card({
  as: Tag = 'div',
  children,
  className = '',
  ...props
}) {
  const classes = ['ui-card', className].filter(Boolean).join(' ');

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
