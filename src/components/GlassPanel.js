export const GlassPanel = ({ id, title, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`glass-panel scroll-mt-[calc(var(--header-height,8.5rem)+0.75rem)] ${className}`}
    >
      {title ? (
        <h2 className='mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight dark:text-primaryDark'>
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  )
}
