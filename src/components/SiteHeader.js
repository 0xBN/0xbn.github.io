import { useLayoutEffect, useRef } from 'react'
import { ProfilePicture, ThemeToggle } from 'components'
import { scrollAnimation } from 'utils'
import { user } from 'data/site'
import { useCollapsingHeader } from 'hooks/useCollapsingHeader'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Tools' },
]

const SECTION_LABEL = {
  hero: 'Home',
  about: 'About',
  projects: 'Projects',
  skills: 'Tools',
}

export const SiteHeader = ({
  darkMode,
  themePreference,
  setThemePreference,
  currentSection,
  setCurrentSection,
}) => {
  const headerRef = useRef(null)
  const expandedHeaderHeightRef = useRef(null)
  const { compact } = useCollapsingHeader()

  const go = (hash) => {
    setCurrentSection(hash.replace('#', ''))
    scrollAnimation(hash)
  }

  // Scroll padding uses expanded header height only — shrinking when compact caused mid-scroll jumps.
  useLayoutEffect(() => {
    const el = headerRef.current
    if (!el) return

    const applyScrollPadding = (h) => {
      expandedHeaderHeightRef.current = h
      document.documentElement.style.setProperty('--header-height', `${h}px`)
    }

    const measure = () => {
      if (!compact) {
        applyScrollPadding(Math.ceil(el.getBoundingClientRect().height))
      } else if (expandedHeaderHeightRef.current != null) {
        document.documentElement.style.setProperty(
          '--header-height',
          `${expandedHeaderHeightRef.current}px`
        )
      }
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [compact])

  const sectionHint =
    SECTION_LABEL[currentSection] ?? SECTION_LABEL.hero

  return (
    <header
      ref={headerRef}
      data-compact={compact ? 'true' : 'false'}
      className={`glass-panel header-shell sticky top-0 z-40 !rounded-2xl transition-[padding,box-shadow,background-color] duration-500 ease-header ${
        compact
          ? '!p-2 shadow-lg shadow-black/25 dark:shadow-black/50'
          : '!p-3 md:!p-4'
      }`}
    >
      <div className='flex items-center justify-between gap-3'>
        <button
          type='button'
          onClick={() => go('#hero')}
          className='flex min-w-0 flex-1 items-center gap-2.5 text-left md:gap-3'
        >
          <span
            className={`shrink-0 overflow-hidden rounded-full ring-2 ring-primaryDark/40 transition-[width,height] duration-500 ease-header ${
              compact ? 'h-8 w-8' : 'h-10 w-10'
            }`}
          >
            <ProfilePicture
              darkMode={darkMode}
              customDisplay='block h-full w-full object-cover'
              customRounded='rounded-full'
            />
          </span>
          <span className='min-w-0 leading-snug'>
            <span
              className={`block font-semibold whitespace-nowrap transition-[font-size] duration-500 ease-header ${
                compact ? 'text-xs' : 'text-sm'
              }`}
            >
              {user.firstName} {user.lastName}
            </span>
            <span
              className={`header-subtitle block overflow-hidden text-xs text-neutral-500 transition-[max-height,opacity,margin] duration-500 ease-header dark:text-neutral-400 ${
                compact
                  ? 'max-h-0 opacity-0'
                  : 'max-h-6 opacity-100'
              }`}
            >
              {user.title}
            </span>
          </span>
        </button>

        <div className='flex shrink-0 items-center gap-2'>
          <span
            className={`hidden text-xs font-medium text-neutral-500 transition-opacity duration-500 ease-header dark:text-neutral-400 sm:block ${
              compact ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={!compact}
          >
            {sectionHint}
          </span>
          <ThemeToggle
            themePreference={themePreference}
            setThemePreference={setThemePreference}
            compact={compact}
          />
        </div>
      </div>

      <div
        className={`header-nav grid transition-[grid-template-rows,opacity,margin] duration-500 ease-header ${
          compact
            ? 'mt-0 grid-rows-[0fr] opacity-0'
            : 'mt-3 grid-rows-[1fr] opacity-100'
        }`}
        aria-hidden={compact}
      >
        <div className='overflow-hidden'>
          <nav
            className='flex flex-wrap items-center gap-1 text-xs font-medium'
            aria-label='Primary'
          >
            {NAV.map((item) => (
              <button
                key={item.id}
                type='button'
                tabIndex={compact ? -1 : 0}
                onClick={() => go(`#${item.id}`)}
                className={`rounded-full px-3 py-1.5 transition-colors duration-300 ${
                  currentSection === item.id
                    ? 'bg-primaryDark/20 text-primaryLight dark:text-primaryDark'
                    : 'text-neutral-600 hover:bg-white/10 dark:text-neutral-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={user.resume}
              target='_blank'
              rel='noopener noreferrer'
              tabIndex={compact ? -1 : 0}
              className='rounded-full px-3 py-1.5 text-neutral-600 transition-colors hover:bg-white/10 dark:text-neutral-300'
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
