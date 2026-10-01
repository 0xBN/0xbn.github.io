import { useEffect, useId, useRef, useState } from 'react'

const iconClass = 'size-4 shrink-0'

const IconSystem = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={iconClass}
    aria-hidden='true'
  >
    <rect x='2' y='2.5' width='20' height='13' rx='2' />
    <path d='M8 19.5h8' />
    <path d='M12 15.5v3.5' />
  </svg>
)

const IconSun = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={iconClass}
    aria-hidden='true'
  >
    <circle cx='12' cy='12' r='4' />
    <path d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41' />
  </svg>
)

const IconMoon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={iconClass}
    aria-hidden='true'
  >
    <path d='M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z' />
  </svg>
)

const OPTIONS = [
  { value: 'system', label: 'System', Icon: IconSystem },
  { value: 'light', label: 'Light', Icon: IconSun },
  { value: 'dark', label: 'Dark', Icon: IconMoon },
]

const optionByValue = (value) =>
  OPTIONS.find((o) => o.value === value) ?? OPTIONS[0]

export const ThemeToggle = ({ themePreference, setThemePreference, compact }) => {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const listId = useId()

  const active = optionByValue(themePreference)
  const shellSize = compact ? 'size-7' : 'size-8'
  const openHeight = compact ? 'h-7' : 'h-8'
  const optionBtnSize = compact ? 'size-6' : 'size-7'

  useEffect(() => {
    if (!open) return

    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const pick = (value) => {
    setThemePreference(value)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className='relative shrink-0'>
      <div
        role='group'
        aria-label='Color theme'
        className={`theme-toggle-shell flex items-center overflow-hidden rounded-full border border-white/10 bg-neutral-900/30 transition-[width,box-shadow] duration-500 ease-header dark:bg-black/20 ${
          open ? `w-[6.5rem] ${openHeight} shadow-md shadow-black/20` : shellSize
        }`}
      >
        {!open ? (
          <button
            type='button'
            className={`grid shrink-0 place-items-center text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 [&_svg]:block ${shellSize}`}
            aria-label={`Theme: ${active.label}. Click to change`}
            aria-expanded='false'
            aria-controls={listId}
            onClick={() => setOpen(true)}
          >
            <active.Icon />
          </button>
        ) : (
          <div
            id={listId}
            className='flex w-full items-center justify-between px-0.5'
            aria-expanded='true'
          >
            {OPTIONS.map(({ value, label, Icon }) => {
              const selected = themePreference === value
              return (
                <button
                  key={value}
                  type='button'
                  aria-label={label}
                  aria-pressed={selected}
                  title={label}
                  onClick={() => pick(value)}
                  className={`grid place-items-center rounded-full transition-colors duration-300 ease-header [&_svg]:block ${optionBtnSize} ${
                    selected
                      ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-600 dark:text-white'
                      : 'text-neutral-500 hover:bg-white/10 hover:text-neutral-800 dark:text-neutral-400'
                  }`}
                >
                  <Icon />
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
