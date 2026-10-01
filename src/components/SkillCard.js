export const SkillCard = ({
  label,
  svg,
  src,
  bg,
  link,
  variant,
  compact,
}) => {
  const isTool = variant === 'tool'

  return (
    <li
      className='flex flex-col rounded-xl border border-transparent transition hover:border-white/15 hover:bg-white/5'
    >
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={isTool ? label : undefined}
        title={isTool ? label : undefined}
        className='rounded-xl p-2 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryDark'
      >
        <span
          className={`mx-auto block [&_svg]:h-full [&_svg]:w-full ${
            compact
              ? 'h-9 w-9'
              : isTool
                ? 'h-14 w-14 md:h-16 md:w-16'
                : 'h-[60px] w-[60px] md:h-28 md:w-28'
          }`}
        >
          {src ? (
            <img
              src={src}
              alt=''
              className={`mx-auto h-full w-full object-contain ${
                bg === 'white' ? 'rounded-sm bg-white' : ''
              }`}
            />
          ) : (
            svg
          )}
        </span>
        {!isTool && (
          <span
            className={`mt-1 block font-semibold uppercase text-neutral-600 dark:text-neutral-400 ${
              compact ? 'text-[10px] leading-tight' : 'text-xs md:text-sm'
            }`}
          >
            {label}
          </span>
        )}
      </a>
    </li>
  )
}
